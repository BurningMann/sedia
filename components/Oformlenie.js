import React from 'react';
import PropTypes from 'prop-types';


import './Header.css';
import './Oformlenie.css';

class Oformlenie extends React.Component {
  render(){
    return (
      <main>
        <div class="container">
            <div class="breadcrumbs_box">
              <a href="/" class="bredcumb">Главная</a>
              <a href="#" class="bredcumb ">Корзина</a>
              <a href="#" class="bredcumb last">Оформление заказа</a>
            </div>
            <h1>Оформление заказа</h1>
        </div>  
        <section class="order_product_section">
          <div class="container">
              <form class="order_product_wrapper">
                  <section class="product_info_section">
                  <div class="top_bar">
                      <div class="product">Товар</div>
                      <div class="price">Цена</div>
                      <div class="count">Количество</div>
                  </div>
                  <div class="order_product_element">
                      <div class="product">
                          <img src="/img/product-1.png" alt="" />
                          <div class="product_info">
                              <a href="#" class="name">Стул кухонный GENEVA</a>
                              <span><strong>Цвет:</strong> белый</span>
                              <span><strong>Артикул:</strong> 65469413</span>
                              <span><strong>Бренд:</strong> SEDIA</span>
                          </div>
                      </div>
                      <div class="price"><span class="old_price">305.00 р.</span><span class="main_price">305.00 р.</span> </div>
                      <div class="count">
                          <div class="product_count_box"><span class="minus">-</span><span class="product_count">1</span><span class="plus">+</span></div>
                          <div class="dell_box"><img src="/img/icon/basket-ico.svg" alt=""/></div>
                      </div>
                  </div>
                  <div class="order_product_element">
                      <div class="product">
                          <img src="/img/product-2.png" alt="" />
                          <div class="product_info">
                              <a href="#" class="name">Стул кухонный GENEVA</a>
                              <span><strong>Цвет:</strong> белый</span>
                              <span><strong>Артикул:</strong> 65469413</span>
                              <span><strong>Бренд:</strong> SEDIA</span>
                          </div>
                      </div>
                      <div class="price"><span class="old_price">305.00 р.</span><span class="main_price">305.00 р.</span> </div>
                      <div class="count">
                          <div class="product_count_box"><span class="minus">-</span><span class="product_count">1</span><span class="plus">+</span></div>
                          <div class="dell_box"><img src="/img/icon/basket-ico.svg" alt=""/></div>
                      </div>
                  </div>
                  </section>
   
                  <div class="top_bar">
                <div>Способ доставки</div>
                  </div>
            <div class="delivery_type_wrapper">
                <label class="delivery_type courier">
                    <input type="radio" name="delivery" value="courier"/>
                    <div class="box">
                        <span class="title">Доставка курьером</span>
                        <p class="descr">(зависит от суммы заказа)</p>
                    </div>
                </label>
                <label class="delivery_type pickup active">
                    <input type="radio" name="delivery" value="pickup" checked/>
                    <div class="box">
                        <span class="title">Самовывоз со склада:</span>
                        <p class="descr">Бесплатно. (Брест, Гродно, Минск, Гомель, Могилев, Пинск, Брянск(РФ)</p>
                    </div>
                </label>
            </div>

            <div class="delivery_adress_tab_content pickup">
                <span class="point_name">г.Могилев, ул. Урицкого, д.78</span>
                <img src="/img/map.png"/>
            </div>
            <div class="delivery_adress_tab_content courier disabel">
                <div class="top_bar">
                    <div>Адрес доставки</div>
                </div>
                <label class="delivery_adress">
                    <input type="text" disabled/>
                </label>
            </div>
            <div class="top_bar">
                <div>Способы доставки</div>
            </div>
            <div class="payment_wrapper">
                <label for="" class="payment_type">
                    <input type="radio" name="payment"/>
                    <div class="box"><span class="title">Оплата наличными</span></div>
                </label>
                <label for="" class="payment_type">
                    <input type="radio" name="payment"/>
                    <div class="box"><span class="title">Оплата картой онлайн</span></div>
                </label>
                <label for="" class="payment_type disabled halva">
                    <input type="radio" name="payment" disabled/>
                    <div class="box"><span class="title">Оплата картой рассрочки “ХАЛВА”</span></div>
                </label>
                <label for="" class="payment_type disabled karta_pokupok">
                    <input type="radio" name="payment" disabled/>
                    <div class="box"><span class="title">Оплата картой рассрочки “КАРТА ПОКУПОК”</span></div>
                </label>
            </div>
            <div class="top_bar">
                <div>Информация о покупателе</div>
            </div>
            <div class="buyer_info_wrapper">
                <div class="input_box">
                    <input type="text" placeholder="Имя:"/>
                    <input type="text"  placeholder="Телефон или e-mail:"/>
                    <textarea  placeholder="Комментарий:"></textarea>
                </div>
                <div class="personal_data_wrapper">
                    <label><input type="checkbox" name="personal_data"/><span>Согласен на обработку персональных <br/>данных</span></label>
                </div>
            </div>
            <div class="result_box">
                <div class="total_price">ИТОГО:<span>950.00 р.</span></div>
                <div class="total_produvt_count">3 товара</div>
                <button class="pay" type="submith">ОПЛАТИТЬ ЗАКАЗ</button>
            </div>
              </form>
          </div>
        </section>
      </main>
    )
  }

}
  export default Oformlenie;
