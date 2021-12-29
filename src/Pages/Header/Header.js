import React from 'react';
import { Link } from 'react-router-dom';
import logotype from '../../Items/Logo/FEP.png';
import './Header.scss';

const Header = () => {
    return (
        <>
            <header>
                <div className="containeer">
                    <nav>
                        <ul>
                            <li>
                                <Link to='/Home' className='logotype'>
                                    <img src={logotype} />
                                </Link>
                            </li>
                            <li>
                                <Link to='/MainPage' className='Main-words'>
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link to='/indiPage' className='Main-words'>
                                    О нас
                                </Link>
                            </li>

                            <li>
                                <Link to='/Programms' className='Main-words'>
                                    Программы
                                </Link>
                            </li>

                            <div className={'register'}>
                                <li>
                                    <Link to='/Contacts' className='Main-words'>
                                        <button>Регистрация</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Contacts' className='Main-words'>
                                        <button>Войти</button>
                                    </Link>
                                </li>
                            </div>
                            <li>
                                <Link to='/Contacts' className='Main-words'>
                                    <i class="far fa-user-circle fa-3x"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;