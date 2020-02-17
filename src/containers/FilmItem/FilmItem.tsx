import React from 'react';
import { Link } from 'react-router-dom';
import cls from './FilmItem.scss';
import Images from '../../components/UI/Images/Images';
import Text from '../../components/UI/ItemText/ItemText';

interface IItem {
    id: number;
    image: string;
    title: string;
    year: string;
}

const FilmItem: React.FC<IItem> = ({ id, image, title, year }) => {
    return (
        <li className={cls.FilmItem}>
            <Link to={`/detail/${id}`}>
                <Images image={image} borderRadius={15} />
                <Text title={title} year={year} />
            </Link>
        </li>
    );
};

export default FilmItem;
