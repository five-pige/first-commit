import React from 'react';
import map from '../../Items/w-map/map.png';
import './Map.scss'

const Map = () => {
    return (
        <section className='Map'>
            <div className='container'>
                <h1>Откройти для себя новые <m>возможности!</m></h1>

                <img src={map} />
            </div>
        </section>
    );
};

export default Map;