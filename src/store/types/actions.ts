// import axios from '../../axios';
import { Movies } from './Movies';
import { Detail } from './Detail';
import { Similar } from './Similar';

export const SET_MOVIES = 'SET_MOVIES';
export const SET_DETAIL = 'SET_DETAIL';
export const SET_SIMILAR = 'SET_SIMILAR';

export interface SetMovies {
    type: typeof SET_MOVIES;
    movies: Movies[];
}

export interface SetDetail {
    type: typeof SET_DETAIL;
    detail: Detail;
}

export interface SetSimilar {
    type: typeof SET_SIMILAR;
    similar: Similar[];
}

export type MoviesActionType = SetMovies;
export type DetailActionType = SetDetail;
export type SimilarActionType = SetSimilar;

export type AppAction = MoviesActionType | DetailActionType | SimilarActionType;
