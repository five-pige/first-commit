import React from 'react';
import './Footer.scss';
import logo from '../../Items/Logo/FEP.png'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='container'>
                <div className='footer'>
                <div className={'Footer-first'}>
                    <img src={logo} />
                    <h5>Наша платформа предназначена для поиска программ обмена для всех.</h5>
                </div>
                <div className={'Footer-second'}>
                    <ul>
                        <li>Гдавная</li>
                        <li>О нас</li>
                        <li> Программы</li>
                        <li>Регистрация</li>
                        <li>Войти</li>
                    </ul>
                </div>
                <div className={'Footer-third'}>
                    <strong> Our Github </strong>
                    <div className='list-team'>
                        <div className='list-team-left'>
                            <a href=''>FrontEnd Team</a>
                        </div>
                        <div className='list-team-right'>

                            <a href=''>BackEnd Team</a>

                        </div>
                    </div>

                </div>
                <div className={'Footer-fourth'}></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;