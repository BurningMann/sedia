import React from 'react';
import PropTypes from 'prop-types';


import './MainPage.css';
import './ProductPage.css';
import './Catalog.css';

class Catalog extends React.Component {
  render(){
    return (
        <main>
          <div class="container">
            <div class="breadcrumbs_box">
              <a href="/" class="bredcumb">Главная</a>
              <a href="#" class="bredcumb last">Категория</a>
            </div>
          </div>  
          <section class="product_section">
    <div class="container">
        <div class="product_wrapper">
            <div class="left_slider_section">
            <div class="main_product_slider">
                    <div class="img_box"><img src="/img/produvt-page-img-1.png" alt=""/></div>
                    <div class="img_box"><img src="/img/produvt-page-img-3.png" alt=""/></div>
                    <div class="img_box"><img src="/img/produvt-page-img-4.png" alt=""/></div>
                    <div class="img_box"><img src="/img/produvt-page-img-5.png" alt=""/></div>
                    <div class="img_box"><img src="/img/produvt-page-img-1.png" alt=""/></div>
                </div>
                <div class="additional_product_slider">
                    <div class="img_box"><span><img src="/img/produvt-page-img-2.png" alt=""/></span> </div>
                    <div class="img_box"><span><img src="/img/produvt-page-img-3.png" alt=""/></span></div>
                    <div class="img_box"><span><img src="/img/produvt-page-img-4.png" alt=""/></span></div>
                    <div class="img_box"><span><img src="/img/produvt-page-img-5.png" alt=""/></span></div>
                    <div class="img_box"><span><img src="/img/produvt-page-img-2.png" alt=""/></span></div>
                </div>
            </div>
            <div class="right_details_section">
                <div class="rating_wrapper">
                  <div class="rating_box">
                      <span class="star full"></span>
                      <span class="star full"></span>
                      <span class="star half"></span>
                      <span class="star half"></span>
                      <span class="star empty"></span>
                  </div>
                </div>
                <h1>Название товараqwe</h1>
                <div class="specifications_box">
                    <div class="specification_name">Бренд:</div><div class="specification_value">SEDIA</div>
                    <div class="specification_name">Цвет:</div><div class="specification_value">Тёмно - серый / чёрный, Синий / золото, Зеленый / золото, Красный / золото, Светло - коричневый / золото, Алый / золото</div>
                    <div class="specification_name">Материал:</div><div class="specification_value">Ткань, велюр</div>
                    <div class="specification_name">Материал основания:</div><div class="specification_value">Окрашенный металл</div>
                    <div class="specification_name">Ширина (B, мм):</div><div class="specification_value">610</div>
                    <div class="specification_name">Высота (H, мм):</div><div class="specification_value">610</div>
                    <div class="specification_name">Глубина (H, мм):</div><div class="specification_value">610</div>
                </div>  
                <div class="price_box"><span class="old_price">3115.00 р.</span><span class="price">3325.00 р.</span></div>  
                <div class="button_box">
                    <div class="incart_button">В КОРЗИНУ</div>
                    <div class="oneclick_button form_button" data-to="buy-in-one">КУПИТЬ В 1 КЛИК</div>
                    <div class="tofavorite_button"></div>
                </div>
                <div class="delivery_box">
                    <p>Варианты доставки:</p>
                    <div class="delivery_wrapper">
                        <div class="courier">
                            <div class="icon"><img src="/img/icon/delivery-1.svg" alt=""/></div>
                            <div class="descr"><span class="title">Доставка курьером</span><span class="descr">(зависит от суммы заказа)</span></div>
                        </div>
                        <div class="pickup">
                            <div class="icon"><img src="/img/icon/delivery-2.svg" alt=""/></div>
                            <div class="descr"><span class="title">Самовывоз со склада:</span><span class="descr">Бесплатно. (Брест, Гродно, Минск, Гомель, Могилев, Пинск, Брянск(РФ)</span></div>
                        </div>
                    </div>
                </div>
                <div class="description_box">
                    <span class="title">Описание</span>
                    <p>С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере.</p>
                </div>
            </div>
        </div>
    </div>
</section>










          <section class="other_color product_slider_section container">
            <span class="title">Другие цвета</span>
            <div class="catalog">
                <div class="card">
                  <div class="img_box">
                    <img alt="" src="/img/product-1.png" />
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card">
                  <div class="img_box">
                    <img alt="" src="/img/product-2.png"/>
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card">
                  <div class="img_box">
                    <img alt="" src="/img/product-3.png"/>
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card new">
                  <div class="img_box">
                    <img alt="" src="/img/product-4.png"/>
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card">
                  <div class="img_box">
                    <img alt="" src="/img/product-5.png"/>
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card">
                  <div class="img_box">
                    <img alt="" src="/img/product-5.png"/>
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
              </div>
          </section>  
          <section class="related_products product_slider_section container">
            <span class="title">Сопутствующие товары</span>
            <div class="catalog">
                <div class="card">
                  <div class="img_box">
                    <img alt="" src="/img/product-1.png" />
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card">
                  <div class="img_box">
                    <img alt="" src="/img/product-2.png"/>
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card">
                  <div class="img_box">
                    <img alt="" src="/img/product-3.png"/>
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card">
                  <div class="img_box">
                    <img alt="" src="/img/product-4.png"/>
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card">
                  <div class="img_box">
                    <img alt="" src="/img/product-5.png"/>
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card">
                  <div class="img_box">
                    <img alt="" src="/img/product-5.png"/>
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
              </div>

          </section>  

          <section class="you_watched product_slider_section container">
            <span class="title">Вы смотрели</span>
            <div class="you_watched_wrapper">
                <div class="you_watched_element">
                    <img src="/img/you-watched-1.png" alt="" />
                    <div class="link_wrapper"><a href="#">Название товара</a></div>
                </div>
                <div class="you_watched_element">
                    <img src="/img/you-watched-1.png" alt="" />
                    <div class="link_wrapper"><a href="#">Название товара</a></div>
                </div>
                <div class="you_watched_element">
                    <img src="/img/you-watched-1.png" alt="" />
                    <div class="link_wrapper"><a href="#">Название товара</a></div>
                </div>
                <div class="you_watched_element">
                    <img src="/img/you-watched-1.png" alt="" />
                    <div class="link_wrapper"><a href="#">Название товара</a></div>
                </div>
                <div class="you_watched_element">
                    <img src="/img/you-watched-1.png" alt="" />
                    <div class="link_wrapper"><a href="#">Название товара</a></div>
                </div>
                <div class="you_watched_element">
                    <img src="/img/you-watched-1.png" alt="" />
                    <div class="link_wrapper"><a href="#">Название товара</a></div>
                </div>
                <div class="you_watched_element">
                    <img src="/img/you-watched-1.png" alt="" />
                    <div class="link_wrapper"><a href="#">Название товара</a></div>
                </div>
            </div>
          </section>        
      </main>
    )
  }

}
  export default Catalog;
