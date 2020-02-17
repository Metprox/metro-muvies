import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Images from '../../components/UI/Images/Images';
import cls from './FilmSimilar.scss';
import { startSetSimilar } from '../../store/actions/similar';
import { setStartDetail } from '../../store/actions/details';
import { Similar } from '../../store/types/Similar';
import { AppState } from '../../store/reducers';
import { ThunkDispatch } from 'redux-thunk';
import { AppAction } from '../../store/types/actions';

const FilmSimilar: React.FC = (props: any) => {
    let { id } = useParams();

    useEffect(() => {
        props.startSetSimilar(id);
    }, []);

    if (!props.similar.length) {
        return null;
    }

    return (
        <ul className={cls.FilmSimilar}>
            {props.similar.map((s: Similar) => {
                return (
                    <li key={s.id} className={cls.similarItem}>
                        <Link
                            to={`/detail/${s.id}`}
                            onClick={() => {
                                props.startSetDetail(s.id);
                                window.scrollTo(0, 0);
                            }}
                        >
                            <Images image={s.backdrop_path} borderRadius={17} />
                            <h3>{s.title}</h3>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

interface LinkStateProps {
    similar: Similar[];
}

interface LinkDispatchProps {
    startSetSimilar: (id: number) => void;
    startSetDetail: (id: number) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
    similar: state.similarReducer,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppAction>): LinkDispatchProps => ({
    startSetSimilar: (id: number) => dispatch(startSetSimilar(id)),
    startSetDetail: (id: number) => dispatch(setStartDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmSimilar);
