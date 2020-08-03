import React from 'react';
import PropTypes from 'prop-types';


import './Catalog.css';

class ProductCatalog extends React.Component {
  render(){
    return (
        <main>
          <div class="container">
            <div class="breadcrumbs_box">
              <a href="/" class="bredcumb">Главная</a>
              <a href="#" class="bredcumb last">Категория</a>
            </div>
          </div>
          <div class="catalog_wrapper container">
            <div class="left_catalog_bar">
                 <img src="/img/filteer-2.png" />
            </div>
            <div class="catalog_section">
            <div class="catalog">
                <div class="card new">
                  <div class="img_box">
                    <img alt="" src="/img/product-1.png" />
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card new">
                  <div class="img_box">
                    <img alt="" src="/img/product-2.png"/>
                    <div class="card_icon_box">
                      <a class="favorite" href="#"></a> <a class="tocart" href="#"></a> <a class="more" href="#"></a> <a class="share" href="#"></a>
                    </div>
                  </div><span class="label">SEDIA</span>
                  <p class="name">Стул кухонный GENEVA</p><span class="price">305.00 р.</span>
                </div>
                <div class="card new">
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
              <div class="pagination">
    <div class="page_count">Показано страниц 1 из 5</div>
    <div class="pagination_wrapper">
        <a href="#" class="page disabel before"></a>
        <a href="#" class="page active">1</a>
        <a href="#" class="page">2</a>
        <a href="#" class="page">3</a>
        <a href="#" class="page next "></a>
    </div>
</div>
            </div>                     
          </div>

          <section class="catalog_about_section">
            <div class="container">
            <div class="catalog_about_wrapper">
                <div class="img_box"></div>
                <div class="text_wrapper">
                  <h1>Заголовок</h1>
                  <div class="text_box">
                      <p>С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере.</p>
                  </div>
                  <div class="text_box">
                    <p>С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере.</p>
                  </div>
                </div>
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
  export default ProductCatalog;
