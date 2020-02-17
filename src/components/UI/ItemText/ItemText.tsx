import React from 'react';
import cls from './ItemText.scss';

interface IText {
    title: string;
    year: string;
}

const ItemText: React.FC<IText> = ({ title, year }) => {
    return (
        <div className={cls.ItemText}>
            <p>{title}</p>
            <p>{year.split('-')[0]}</p>
        </div>
    );
};

export default ItemText;
