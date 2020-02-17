import { Movies } from '../types/Movies';
import { MoviesActionType } from '../types/actions';

const MoviesState: Movies[] = [];

export const moviesReducer = (state = MoviesState, action: MoviesActionType): Movies[] => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.movies;
        default:
            return state;
    }
};
