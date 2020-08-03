import React from 'react';
import PropTypes from 'prop-types';


import './Catalog.css';

class MainCatalog extends React.Component {
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
                 <img src="/img/filter.png" />
            </div>
            <div class="catalog_section">
              <div class="main_catalog_wrapper">
              <div class="main_catalog_card">
                    <div class="img_box"><img src="/img/main-card-img-1.png" alt=""/></div>
                    <a href="#" class="name">Стулья и кресла</a><span class="models">Более <strong class="count">130</strong> моделей</span>
                </div>               
                <div class="main_catalog_card">
                    <div class="img_box"><img src="/img/main-card-img-1.png" alt=""/></div>
                    <a href="#" class="name">Стулья и кресла</a><span class="models">Более <strong class="count">130</strong> моделей</span>
                </div>               
                <div class="main_catalog_card">
                    <div class="img_box"><img src="/img/main-card-img-1.png" alt=""/></div>
                    <a href="#" class="name">Стулья и кресла</a><span class="models">Более <strong class="count">130</strong> моделей</span>
                </div>               
                <div class="main_catalog_card">
                    <div class="img_box"><img src="/img/main-card-img-1.png" alt=""/></div>
                    <a href="#" class="name">Стулья и кресла</a><span class="models">Более <strong class="count">130</strong> моделей</span>
                </div>               
                <div class="main_catalog_card">
                    <div class="img_box"><img src="/img/main-card-img-1.png" alt=""/></div>
                    <a href="#" class="name">Стулья и кресла</a><span class="models">Более <strong class="count">130</strong> моделей</span>
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
       </main>
    )
  }

}
  export default MainCatalog;
