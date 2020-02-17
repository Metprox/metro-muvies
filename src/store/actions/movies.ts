import { Movies } from '../types/Movies';
import { AppAction } from '../types/actions';
import axios from '../../axios';
import { Dispatch } from 'redux';

const api_key = '0dae67b8822f2dd69338d13fd21f35b7';
const language = 'en-US';

export const setMovies = (movies: Movies[]): AppAction => ({
    type: 'SET_MOVIES',
    movies,
});

export const startSetMovies = () => {
    return async (dispatch: Dispatch<AppAction>) => {
        const payload = await axios
            .get('/discover/movie', {
                params: {
                    api_key,
                    language,
                    sort_by: 'popularity.desc',
                    include_adult: false,
                    include_video: false,
                    page: 1,
                },
            })
            .then(res => {
                return res.data.results;
            });

        dispatch(setMovies(payload));
    };
};
