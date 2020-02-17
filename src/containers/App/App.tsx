import React from 'react';
import cls from './App.scss';
import MainRouter from '../../routers/MainRouter/MainRouter';
const App: React.FC = () => (
    <div className={cls.wrapper}>
        <div className={cls.container}>
            <MainRouter />
        </div>
    </div>
);

export default App;
