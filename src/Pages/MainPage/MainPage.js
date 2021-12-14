import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Programms from '../Programms/Programms';
import Reviews from '../Reviews/Reviews';
import Sort from '../Sort/Sort';
import './MainPage.scss';

const MainPage = () => {
    return (
        <div className='MainPage'>
            <h1>
                Find <m>Exchange</m> Programm.
            </h1>
            <Sort/>
            <Map/>
            <Programms/>
            <Reviews/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default MainPage;