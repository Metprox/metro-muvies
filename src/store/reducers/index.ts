import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { detailReducer } from './detail';
import { similarReducer } from './similar';

export const rootReducer = combineReducers({
    moviesReducer,
    detailReducer,
    similarReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
