import { Detail } from '../types/Detail';
import { DetailActionType } from '../types/actions';

const DetailState: Detail = {
    id: 0,
    backdrop_path: '',
    title: '',
    overview: '',
};

export const detailReducer = (state = DetailState, action: DetailActionType): Detail => {
    switch (action.type) {
        case 'SET_DETAIL':
            return action.detail;
        default:
            return state;
    }
};
