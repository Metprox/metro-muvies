import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import FilmList from '../../containers/FilmList/FilmList';
import FilmDetail from '../../containers/FilmDetail/FilmDetail';

const MainRouter: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={FilmList} />
                <Route path="/detail/:id" exact component={FilmDetail} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default MainRouter;
