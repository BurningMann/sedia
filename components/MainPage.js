import React from 'react';
import PropTypes from 'prop-types';


import './MainPage.css';
import './Catalog.css';
import './ProductPage.css';

class MainPage extends React.Component {
  render(){
    return (
      <main>
      <div class="main_slider">
        <div class="container">
          <div class="slide">
            <div class="slider-text">
              <span class="name">SEDIA - дарим комфорт</span>
              <p class="descr">Новые модели и цвета интерьерной мебели для дома</p>
              <a href="#" class="more_link">ПОДРОБНЕЕ</a>
            </div>
            <div class="slider_img"><img src="/img/baner-image-1.png" alt="" /></div>
          </div>
          <div class="slide">
            <div class="slider-text">
              <span class="name">SEDIA - дарим комфорт</span>
              <p class="descr">Новые модели и цвета интерьерной мебели для дома</p>
              <a href="#" class="more_link">ПОДРОБНЕЕ</a>
            </div>
            <div class="slider_img"><img src="/img/baner-image-1.png" alt="" /></div>
          </div>
          <div class="slide">
            <div class="slider-text">
              <span class="name">SEDIA - дарим комфорт</span>
              <p class="descr">Новые модели и цвета интерьерной мебели для дома</p>
              <a href="#" class="more_link">ПОДРОБНЕЕ</a>
            </div>
            <div class="slider_img"><img src="/img/baner-image-1.png" alt="" /></div>
          </div>
        </div>
      </div>
      <div class="container">
        <section class="main_tabs_section">
          <div class="tabs_panel">
            <div class="tab_element active" data-tab="new">
              Новинки
            </div>
            <div class="tab_element" data-tab="best">
              Бестселлеры
            </div>
            <div class="tab_element" data-tab="action">
              Акции
            </div>
            <div class="tab_element" data-tab="sale">
              Распродажа
            </div>
            <div class="tab_element" data-tab="recomend">
              Рекомендуем
            </div>
          </div>
          <div class="tabs_content">
            <div class="tab_element active new">
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
            </div>
            <div class="tab_element best">
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
            </div>
            <div class="tab_element action">
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
            </div>
            <div class="tab_element sale">
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
            </div>
            <div class="tab_element recomend">
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
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="info_section">
        <div class="bg_box"></div>
            <div class="container">
                <div class="info_wraper">
                    <a href="#" class="info_element news">
                        <span class="name">Новости</span>
                        <p class="descr">Все новости, новинки и акции</p>
                    </a>
                    <a href="#" class="info_element opt">
                        <span class="name">Оптовым <br/>покупателям</span>
                        <p class="descr">Все новости, новинки и акции</p>
                    </a>
                </div>
            </div>
      </section>
      <section class="advantages_section">
        <div class="container">
            <div class="advantages_wraper">
                <div class="advantages_element">
                    <img src="/img/icon/advantages-1.svg" alt=""/>
                    <p class="descr">Первый поставщик и производитель</p>
                </div>
                <div class="advantages_element">
                    <img src="/img/icon/advantages-2.svg" alt=""/>
                    <p class="descr">Оптимальное соотношение цены и качества</p>
                </div>
                <div class="advantages_element">
                    <img src="/img/icon/advantages-3.svg" alt=""/>
                    <p class="descr">Регулярно обновляемый ассортимент</p>
                </div>
                <div class="advantages_element">
                    <img src="/img/icon/advantages-4.svg" alt=""/>
                    <p class="descr">Собственный автопарк. Доставка в любой город РБ, СНГ</p>
                </div>
            </div>
        </div>
      </section>
      <section class="about_section">
        <div class="container">
          <div class="about_wrapper">
            <div class="img_box">
              <img src="/img/table.png " />
            </div>
            <div class="text_box">
                <span class="name">О нашей <br/>компании</span>
                <p class="descr">С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере.</p>
                <a href="#" class="more">ПОДРОБНЕЕ</a>
            </div>
          </div>
        </div>
      </section>
      <section class="collection_section">
          <div class="container">
              <div class="collection_wrapper">
                  <a href="#" class="major"><span class="year">2020</span><span class="name">Летняя коллекция</span></a>
                  <a href="#" class="minor"><span class="year">2020</span><span class="name">Коллекция <br/> “Loft”</span></a>
                  <a href="#" class="minor"><span class="year">2020</span><span class="name">Коллекция <br/> “Home”</span></a>
              </div>
          </div>
      </section>
      <section class="instagram_section">
          <div class="container">
              <span class="title">Наш Instagram</span>
              <p class="instagram_text">«Присоединяйтесь к <a href="#" class="yellow">@mebel_sedia</a><br/>Делитесь Вашими интерьерами с мебелью SEDIА – <span class="yellow">#интерьерsedia</span>»</p>
              <div class="instagram_wrapper">
                  <div class="instagram_element">
                      <a href="#" class="img_box"></a>
                      <div class="control_panel">
                      <div>
                          <span class="like">234.4K</span>
                          <span class="comment">1K</span>
                        </div>
                          <span class="share">Поделиться</span>
                      </div>
                      <p class="descr">Текст. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий.</p>
                  </div>
                  <div class="instagram_element">
                      <a href="#" class="img_box"></a>
                      <div class="control_panel">
                      <div>
                          <span class="like">234.4K</span>
                          <span class="comment">1K</span>
                        </div>
                          <span class="share">Поделиться</span>
                      </div>
                      <p class="descr">Текст. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий.</p>
                  </div>
                  <div class="instagram_element">
                      <a href="#" class="img_box"></a>
                      <div class="control_panel">
                        <div>
                          <span class="like">234.4K</span>
                          <span class="comment">1K</span>
                        </div>
                          <span class="share">Поделиться</span>
                      </div>
                      <p class="descr">Текст. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий.</p>
                  </div>
                  <div class="instagram_element">
                      <a href="#" class="img_box"></a>
                      <div class="control_panel">
                      <div>
                          <span class="like">234.4K</span>
                          <span class="comment">1K</span>
                        </div>
                          <span class="share">Поделиться</span>
                      </div>
                      <p class="descr">Текст. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий.</p>
                  </div>
              </div>
          </div>
      </section>
    </main>
    )
  }

}
  export default MainPage;
