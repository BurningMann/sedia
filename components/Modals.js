import React from 'react';
import PropTypes from 'prop-types';


import './Modals.css';

class Modals extends React.Component {
  render(){
    return (
      <div>
        <div class="modal_bg">
          <div class="thx_modal zayavka">
            <div class="close_button"></div>
              <div class="modal_content">
                  <span class="name">Спасибо за заявку!</span>
                  <p class="text">С вами свяжутся в ближайшее время</p>
              </div>
          </div>
          <div class="thx_modal pokupka">
            <div class="close_button"></div>
              <div class="modal_content">
                  <span class="name">Благодарим вас за покупку!</span>
                  <p class="text">С вами свяжутся в ближайшее время</p>
              </div>
          </div>
          <div class="buy-in-one">
            <div class="close_button"></div>
              <div class="modal_content">
                <div class="img_box"><img src="/img/produvt-page-img-1.png" alt=""/></div>
                <div class="detail_box">
                    <div class="rating_wrapper"><div class="rating_box"><span class="star full"></span><span class="star full"></span><span class="star full"></span><span class="star half"></span><span class="star empty"></span></div></div>
                    <span class="name">Название товара</span>
                    <div class="price_box"><span class="old_price">305.00 р.</span><span class="price">305.00 р.</span></div>
                    <form action="" class="buy-in-one-form">
                      <div class="input_box" >
                        <input type="text" placeholder="Имя:"/>
                        <input type="text" placeholder="Телефон:"/>
                        <input type="text" placeholder="E-mail:"/>
                      </div>

                        <button type="submit">КУПИТЬ</button>
                    </form>
                </div>
              </div>
          </div>
          <div class="registration_modal">
    <div class="content_box">
        <div class="tab_section">
            <div class="registration_tab active" data-tab="registration">Регистрация</div>
            <div class="singin_tab" data-tab="singin">Вход </div>
        </div>
        <div class="tab_content">
            <div class="registration active"> 
            <form action="" class="registration_form">
            <div class="input_box" >
              <input type="text" placeholder="Имя:"/>
              <input type="text" placeholder="Телефон:"/>
              <input type="text" placeholder="E-mail:"/>
            </div>
            <div class="sex_box">
                <span>Укажите Ваш пол:</span>
                <label><input type="radio" name="sex" id=""/><span>Женский</span></label>
                <label><input type="radio" name="sex" id=""/><span>Мужской</span></label>
            </div>
            <input type="text" placeholder="Пароль:" class="password" />
            <label class="mailing"><input type="checkbox" name="subscription" /><span>Подписаться на нашу рассылку</span></label>
          </form>
          <div class="login_width">
              <span>Войти с помощью:</span>
              <div class="icon_box">
                  <a href="#" class="insta"></a>
                  <a href="#" class="vk"></a>
                  <a href="#" class="facebook"></a>
                  <a href="#" class="ok"></a>
              </div>
          </div>
            </div>
            <div class="singin"> 
            <form action="" class="singin_form">
            <input type="text" placeholder="Имя:" class="login" />
            <input type="text" placeholder="Пароль:" class="password" />
            </form>
            <div class="login_width">
              <span>Войти с помощью:</span>
              <div class="icon_box">
                      <a href="#" class="insta"></a>
                      <a href="#" class="vk"></a>
                      <a href="#" class="facebook"></a>
                      <a href="#" class="ok"></a>
                  </div>
              </div>
            </div>
        </div>
       
    </div>
   <div class="img_box_registration"></div>
</div>
        </div>
      </div>
    )
  }

}
  export default Modals;
