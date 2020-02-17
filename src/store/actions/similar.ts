import { Similar } from '../types/Similar';
import { AppAction } from '../types/actions';
import axios from '../../axios';
import { Dispatch } from 'redux';

const api_key = '0dae67b8822f2dd69338d13fd21f35b7';
const language = 'en-US';

export const setSimilar = (similar: Similar[]): AppAction => ({
    type: 'SET_SIMILAR',
    similar,
});

export const startSetSimilar = (id: number) => {
    return async (dispatch: Dispatch<AppAction>) => {
        const payload = await axios
            .get(`/movie/${id}/similar`, {
                params: {
                    api_key,
                    language,
                    page: 1,
                },
            })
            .then(res => {
                return res.data.results;
            });

        dispatch(setSimilar(payload));
    };
};
