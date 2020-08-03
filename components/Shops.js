import React from 'react';
import PropTypes from 'prop-types';


import './Shops.css';
import './Opt.css';

class Shops extends React.Component {
  render(){
    return (
        <main>
          <div class="container">
            <div class="breadcrumbs_box">
              <a href="/" class="bredcumb">Главная</a>
              <a href="#" class="bredcumb last">Магазины</a>
            </div>
          </div>
          <section class="kontact_section">
            <div class="container">
                <div class="contact_wrapper">
                    <div class="main_adress">РБ, г. Брест, ул. Вычулки, д.129А/3, пом. №1</div>
                    <div class="main_number"><a href="tel:+375 44 ХХХ ХХ ХХ">+375 44 ХХХ ХХ ХХ</a><a href="tel:+375 44 ХХХ ХХ ХХ">+375 44 ХХХ ХХ ХХ</a></div>
                    <div class="main_soc">
                        <div class="left_social_section"><span>Мы в соц. сетях:</span><a href="#" class="icon_element instagram"></a><a href="#" class="icon_element vk"></a><a href="#" class="icon_element facebook"></a><a href="#" class="icon_element telegram"></a><a href="#" class="icon_element ok"></a><a href="#" class="icon_element youtube"></a></div>
                    </div>
                </div>
                <h1>Розничные магазины</h1>

                <div class="shops_wrapper">
                  <div class="shops_name_box">
                      <div class="shops_name_element">
                          <span class="name"> г.Могилев, ул. Урицкого, д.78</span>
                          <span class="time">Пн-Пт: с 9.00 - 17.00</span>
                      </div>
                      <div class="shops_name_element">
                          <span class="name"> г.Могилев, ул. Урицкого, д.78</span>
                          <span class="time">Пн-Пт: с 9.00 - 17.00</span>
                      </div>
                      <div class="shops_name_element">
                          <span class="name"> г.Могилев, ул. Урицкого, д.78</span>
                          <span class="time">Пн-Пт: с 9.00 - 17.00</span>
                      </div>
                      <div class="shops_name_element">
                          <span class="name"> г.Могилев, ул. Урицкого, д.78</span>
                          <span class="time">Пн-Пт: с 9.00 - 17.00</span>
                      </div>
                      <div class="shops_name_element">
                          <span class="name"> г.Могилев, ул. Урицкого, д.78</span>
                          <span class="time">Пн-Пт: с 9.00 - 17.00</span>
                      </div>
                      <div class="shops_name_element">
                          <span class="name"> г.Могилев, ул. Урицкого, д.78</span>
                          <span class="time">Пн-Пт: с 9.00 - 17.00</span>
                      </div>
                  </div>
                  <div class="shops_map_box">
                      {/* <img src="/img/map-2.png" alt="" /> */}
                  </div>
              </div>
            </div>
          </section>  
          <section class="callback_section">
        <div class="container">
            <div class="callback_wrapper">
                <div class="form_box">
                        <span class="title">Остались вопросы? <strong>Свяжитесь с нами!</strong></span>
                        <p>Оставьте свои данные и мы свяжемся с Вами в ближайшее время</p>
                        <form action="" class="callback_form">
                            <input type="text" name="name" placeholder="Имя:"/>
                            <input type="text" name="data" placeholder="Телефон или e-mail:"/>
                            <input type="text" name="topic" placeholder="Тема:"/>
                            <textarea name="message" placeholder="Cообщение:"></textarea>
                            <div class="button_container">
                                <button type="submit">ОТПРАВИТЬ</button>
                                <p class="alert">Нажимая кнопку Вы соглашаетесь с политикой <br /> конфеденциальности</p>
                            </div>  
                        </form>
                </div>
                <div class="img_box">
                  <img src="/img/chear-1.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
      </main>
    )
  }

}
  export default Shops;
