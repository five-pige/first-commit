import React from 'react';
import './Cards.scss'

const Cards = ({ img, index, title, free, about, country }) => {
    return (
        <div className='card' index={index}>
            <div className='left'>
                <img src={img} />
            </div>
            <div className='right'>
                <h2>{title}</h2>
                <p>{about}</p>
                <span>Страны которые могут участвовать</span>
                <p>{country}</p>
                <span className='free'>{free}</span>
                <button className='btn btn-light'>Подробнее</button>
            </div>
        </div>
    );
};

export default Cards;