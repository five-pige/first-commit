import React from 'react'
// import { Header } from '../Header/Header'
// import { Footer } from '../Footer/Footer'
import './IndiPage.scss'
import img from '../../Items/indiIMG/i.png'

function indiPage() {
   return (
      <div>
         <i className="left_icon fas fa-arrow-left fa-2x"></i>

         <div className={'par'}>
            <div className={'container'}>
               <div className={'block1'}>
                  <div className={'block1_left'}>
                     <img src={img} />
                  </div>
                  <div className={'block1_right'}>
                     <h1>
                        FLEX
                     </h1>
                     <p className={'infi_ptext'}>
                        Программа FLEX была основана в 1992 году и спонсируется Бюро по вопросам образования и культуры при Государственном департаменте США. Программа была создана из убеждения бывшего сенатора Билла Брэдли о том, что лучший способ гарантии долгосрочного мира и понимания между США и странами Евразии – это создание возможности для молодых людей изучать США и американцев из первых рук, и учить американцев об их странах.
                     </p>
                  </div>
               </div>
            </div>
            {/* {Block1} */}
            <div className={'container'}>
               <div className={'block2'}>
                  <div className={'block2_left'}>
                     <h4 className={'bold_text'}>
                        О программе
                     </h4>
                     <hr />
                     <h5>
                        Описание программы
                     </h5>
                     <h6 className={'colored_text'}>
                        Для школьников
                     </h6>
                     <p>
                        Программа обмена для старшеклассников (FLEX) предоставляет старшеклассникам шанс бесплатного обучения в США на один год.
                     </p>
                     <hr />
                     <h5>
                        Возрастные ограничения
                     </h5>
                     <h5 className={'colored_text'}>
                        14-17лет
                     </h5>
                     <hr />
                     <br />
                     <h5>
                        Страны которые могут участвовать в этой программе
                     </h5>
                     <p>
                        Армении, Азербайджана, Греции, Грузии, Казахстана, Кыргызстана, Латвии, Литвы, Молдовы, Монголия, Польши, Румыния, Сербии, Таджикистана, Туркменистана, Украины, Черногории и Эстонии
                     </p>
                     <br />
                     <hr />
                     <h5 className={'colored_text'}>
                        Бесплатная
                     </h5>
                  </div>
                  <div className={'block2_right'}>
                     <h4 className={'bold_text'}>
                        Требования<i className="fas fa-exclamation-circle"></i>
                     </h4>
                     <hr />
                     <br />
                     <p>
                        1. Проходить обучение в 8, 9 или 10 классах российской школы;
                     </p>
                     <p>
                        2. Быть учеником средней школы на момент проведения конкурса. Иметь хорошие и отличные отметки;
                     </p>
                     <p>
                        3. Изучать английский язык;
                     </p>
                     <p>
                        4. Отвечать требованиям по выдаче американской визы.
                     </p>
                     <p>
                        Также школьники должны были предоставить медицинские документы, подтверждающие, что их состояние здоровья позволяет участвовать в программе.
                     </p>
                  </div>
               </div>
            </div>
            {/* {Block2} */}
            <div className={'container'}>
               <div className={'block3'}>
                  <div className={'block3_left'}>
                     <h5>
                        Как прододить отбор на программу<span>?</span>
                     </h5>
                     <hr />
                     <p>
                        Конкурс на <span className={'colored_text'}>FLEX</span> проходил в <span>3 тура</span>:
                     </p>
                     <p>
                        1 тур — 15-минутный тест на знание английского языка, включающий в себя 10 вопросов из лексики и 6 вопросов по тексту;
                     </p>
                     <p>
                        2 тур — более сложный тест на знание английского, состоящий из аудирования, чтения и письма;
                     </p>
                     <p>
                        3 тур — интервью с кандидатом на английском языке, психологическая игра между полуфиналистами, 2 эссе и заполнение анкеты.
                     </p>
                  </div>
                  <div className={'block3_right'}>
                     <div className={'box_one'}>
                        <h5 className={'bold_text'}>
                           Социальные сети
                        </h5>
                        <img className={'box_icon'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png' />
                        <img className={'box_icon'} src='https://www.freepnglogos.com/uploads/telegram-png/telegram-communications-icons-24.png' />
                     </div>
                     <div className={'box_two'}>
                        <div>
                           <img className={'box_icon2'} src='https://mpng.subpng.com/20190417/flz/kisspng-vector-graphics-world-logo-illustration-globe-5cb71118aad603.8986627315555013366998.jpg' />
                        </div>
                        <div className={'text_inbox'}>
                           <h6 className={'bold_text'}>
                              Официальный сайт программы
                           </h6>
                           <a href='https://www.discoverflex.org' target={'_blank'}>https://www.discoverflex.org</a>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
            {/* {Block3} */}
         </div>
      </div>
   )
}

export default indiPage

