import React from 'react';
import cls from './Images.scss';

interface IImages {
    image: string;
    height?: string | number;
    borderRadius?: string | number;
}

const Images: React.FC<IImages> = ({ image, height, borderRadius }) => (
    <img
        className={cls.Images}
        src={`https://image.tmdb.org/t/p/original/${image}`}
        height={height}
        style={{ borderRadius: `${borderRadius}px` }}
    />
);

export default Images;
