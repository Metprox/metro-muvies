import { AppAction } from '../types/actions';
import axios from '../../axios';
import { Dispatch } from 'redux';
import { Detail } from './../types/Detail';

const api_key = '0dae67b8822f2dd69338d13fd21f35b7';
const language = 'en-US';

export const setDetail = (detail: Detail): AppAction => ({
    type: 'SET_DETAIL',
    detail,
});

export const setStartDetail = (id: number) => {
    return async (dispatch: Dispatch<AppAction>) => {
        const payload = await axios
            .get(`/movie/${id}`, {
                params: {
                    api_key,
                    language,
                },
            })
            .then(res => {
                return res.data;
            });

        dispatch(setDetail(payload));
    };
};
