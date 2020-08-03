import React from 'react';
import PropTypes from 'prop-types';


import './Footer.css';

class Footer extends React.Component {
  render(){
    return (
        <footer>
            <div class="container">
                <div class="mailing_wrapper">
                    <div class="mail_box">
                        <div class="label">Только лучшие <br/> новости</div>
                        <span class="title">Подпишитесь на наши новости!</span>
                        <p class="descr">С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере.</p>
                        <form action="" class="mailing_form"><input type="text" placeholder="Введите Вам E-mail"/>
                        <button type="submit"><img src="/img/icon/send-mail-ico.svg" alt=""/></button></form>
                    </div>
                    <div class="mailing_slider">
                        <img src="/img/mailing-1.png" />
                        <img src="/img/mailing-1.png" />
                        <img src="/img/mailing-1.png" />
                    </div>
                </div>
            </div>
                <div class="footer_box">
                    <div class="container">
                        <div class="footer_contact">
                            <img src="/img/Logo.png"/>
                            <p class="copyright">Строки копирайта.</p>
                            <p class="work_time"> 
                                <strong>Пн - Пт:</strong> с 9.00 до 18.00 <br/>
                                <strong>Сб:</strong> с 10.00 до 18.00
                            </p>
                        </div>
                        <div class="footer_menu">
                            <div class="footer_menu_element">
                                <span class="title">Покупателям</span>
                                <div class="menu">
                                    <ul>
                                        <li><a href="">Главная</a></li>
                                        <li><a href="">Новинки</a></li>
                                        <li><a href="">Рекомендуемые</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="footer_menu_element catalog_menu">
                                <span class="title">Продукция</span>
                                <div class="menu">
                                    <ul>
                                        <li><a href="">Главная</a></li>
                                        <li><a href="">Новинки</a></li>
                                        <li><a href="">Рекомендуемые</a></li>
                                        <li><a href="">Рекомендуемые</a></li>
                                        <li><a href="">Рекомендуемые</a></li>
                                        <li><a href="">Рекомендуемые</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="footer_menu_element">
                                <span class="title">Покупателям</span>
                                <div class="menu">
                                    <ul>
                                        <li><a href="">Главная</a></li>
                                        <li><a href="">Новинки</a></li>
                                        <li><a href="">Рекомендуемые</a></li>
                                    </ul>
                                </div>
                            </div>                   
                        </div>
                        <div class="footer_delivery">
                            <span>Экспресс-доставка <br/> по Беларуси!</span>
                            <div class="delivery_button">ПОДОБРАТЬ МЕБЕЛЬ</div>
                        </div>
                    </div>
                </div>
            
            <div class="bottom_line">
                <div class="container">               
                    <div class="left_social_section">
                        <a href="#" class="icon_element instagram"></a>
                        <a href="#" class="icon_element vk"></a>
                        <a href="#" class="icon_element facebook"></a>
                        <a href="#" class="icon_element telegram"></a>
                        <a href="#" class="icon_element ok"></a>
                        <a href="#" class="icon_element youtube"></a>
                    </div>
                    <span class="year">Sedia.by.2016-2020</span>
                    <div class="payment_system">
                        <div class="payment visa"></div>
                        <div class="payment mastercard"></div>
                        <div class="payment purse"></div>
                        <div class="payment bank"></div>
                    </div>
                </div> 
            </div>
        </footer>
    )
  }

}
  export default Footer;
