import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import cls from './FilmDetail.scss';
import Images from '../../components/UI/Images/Images';
import FilmSimilar from '../FilmSimilar/FilmSimilar';
import { setStartDetail } from '../../store/actions/details';
import { Detail } from '../../store/types/Detail';
import { AppState } from '../../store/reducers';
import { ThunkDispatch } from 'redux-thunk';
import { AppAction } from '../../store/types/actions';

const FilmDetail: React.FC = (props: any) => {
    let { id } = useParams();

    useEffect(() => {
        props.setStartDetail(id);
    }, []);

    if (!props.detail) {
        return null;
    }

    return (
        <div className={cls.FilmDetail}>
            <div className={cls.wrapImg}>
                <Images image={props.detail.backdrop_path} height="100%" />
            </div>
            <div className={cls.container}>
                <h1>{props.detail.title}</h1>
                <h2>Overview: </h2>
                <br />
                <p>{props.detail.overview}</p>
                <h2>SIMILAR MOVIES:</h2>
            </div>
            <FilmSimilar />
        </div>
    );
};

interface LinkStateProps {
    detail: Detail;
}

interface LinkDispatchProps {
    setStartDetail: (id: number) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
    detail: state.detailReducer,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppAction>): LinkDispatchProps => ({
    setStartDetail: (id: any) => dispatch(setStartDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);
