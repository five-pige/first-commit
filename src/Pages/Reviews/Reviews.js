import React from 'react';
import './Reviews.scss';
import img from '../../Items/reviews/img.png';
import left from '../../Items/reviews/left.png';
import right from '../../Items/reviews/right.png';

const Reviews = () => {
    return (
        <div className='Reviews'>
            <div className='left'>
                <img src={img}/>
            </div>
            <div className='right'>
                <h1 className='right-title'>
                Не забудьте оставить нам отзыв, и расскажите о своем опыте.
                </h1>
                <img className={'left-vector'} src={left}/>
                <span>Не возникло проблем с ручной кладью. Очень любят в других компаниях придираться к чемодану (он маленький очень, но колёсики не вмещаются во время проверки размера ручной клади). Вежливый персонал. В самолёте не душно и хорошая подсветка, которая не давит на глаза.</span>
                <img className={'right-vector'} src={right}/>
                <span className={'date'}>Евгения 17.11.2021</span>
                <div className='right-bottom'>
                <i className="fas fa-arrow-circle-left"></i>
                <i class="fas fa-arrow-circle-right"></i>
                </div>
            </div>
        </div>
    );
};

export default Reviews;