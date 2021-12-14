import React, { useEffect, useState } from 'react';
import { data } from '../../Items/Data/Data';
import Cards from './Cards/Cards';
import './Programms.scss';

const Programms = () => {
    const [product, setProduct] = useState([])


    useEffect(() => {
        setProduct(data)
    }, [data]);

    return (
        <div className='Programms'>
            <h1>Программы</h1>
            {
                data.map((v, i) => {
                    return (
                        <Cards
                            img={v.img}
                            index={i}
                            title={v.title}
                            free={v.free}
                            about={v.about}
                            country={v.country}
                        />
                    )
                })
            }
            <button className='load btn btn-light '>Смотреть все</button>
        </div>
    );
};

export default Programms;