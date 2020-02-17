import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import cls from './FilmList.scss';
import FilmItem from '../FilmItem/FilmItem';
import { startSetMovies } from '../../store/actions/movies';
import { Movies } from '../../store/types/Movies';
import { AppState } from '../../store/reducers';
import { ThunkDispatch } from 'redux-thunk';
import { AppAction } from '../../store/types/actions';
import { bindActionCreators } from 'redux';

const FilmList: React.FC = (props: any) => {
    useEffect(() => {
        props.startSetMovies();
    }, []);

    if (!props.movies.length) {
        return <p>Фильмов нет!</p>;
    }

    return (
        <div className={cls.FilmList}>
            <h1>Movies</h1>
            <ul className={cls.list}>
                {props.movies.map((f: any): any => {
                    return (
                        <FilmItem key={f.id} id={f.id} title={f.title} year={f.release_date} image={f.poster_path} />
                    );
                })}
            </ul>
        </div>
    );
};

interface LinkStateProps {
    movies: Movies[];
}

interface LinkDispatchProps {
    startSetMovies: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
    movies: state.moviesReducer,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppAction>): LinkDispatchProps => ({
    startSetMovies: bindActionCreators(startSetMovies, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
