import { Similar } from '../types/Similar';
import { SimilarActionType } from '../types/actions';

const SimilarState: Similar[] = [];

export const similarReducer = (state = SimilarState, action: SimilarActionType): Similar[] => {
    switch (action.type) {
        case 'SET_SIMILAR':
            return action.similar;
        default:
            return state;
    }
};
