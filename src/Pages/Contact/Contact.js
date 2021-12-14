import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className='Contact'>
            <h1>
            Есть вопросы? Свяжитесь с нами.
            </h1>
            <div className='input-box'>
                <input type='email' placeholder='Оставьте ваш email'/>
                <button className='btn btn-warning'>Отправить</button>
            </div>
        </div>
    );
};

export default Contact;