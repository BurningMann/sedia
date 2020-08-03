import React from 'react';
import PropTypes from 'prop-types';


import './MainPage.css';
import './Opt.css';
import './About.css';

class Opt extends React.Component {
  render(){
    return (
      <main>
          <div class="container">
            <div class="breadcrumbs_box">
              <a href="/" class="bredcumb">Главная</a>
              <a href="#" class="bredcumb last">Оптовым покупателям</a>
            </div>
        </div>
        <section class="opt_section">
          <div class="container">
              <h1> Заголовок</h1>
              <div class="opt_wrapper">
                  <div class="text_box">
                    <p>С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. </p>
                  </div>
                  <div class="text_box">
                    <p>С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. </p>
                  </div>
                  <div class="text_box">
                    <p>С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности , которая призвана стать единым органом, представляющим интересы ее участников в данной сфере. С 2019 года компания "Акс-мебель" входит в состав Ассоциации предприятий мебельной и деревообрабатывающей промышленности.</p>
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
        <section class="out_team_section">
    <span class="title">Наша команда</span>
    <div class="container">
        <div class="out_team_wrapper">
            <div class="out_team_element">
                <div class="img_box"><img src="/img/team-1.png" alt=""/></div>
                <div class="text_block">
                  <span class="name">Ковальчук Анастасия</span>
                  <span class="profession">дизайнер</span>
                  <p class="descr">Краткий текст, краткий текст, краткий текст</p>
                </div>
            </div>
            <div class="out_team_element">
                <div class="img_box"><img src="/img/team-2.png" alt=""/></div>
                <div class="text_block">
                  <span class="name">Ковальчук Анастасия</span>
                  <span class="profession">дизайнер</span>
                  <p class="descr">Краткий текст, краткий текст, краткий текст</p>
                </div>
            </div>
            <div class="out_team_element">
                <div class="img_box"><img src="/img/team-3.png" alt=""/></div>
                <div class="text_block">
                  <span class="name">Ковальчук Анастасия</span>
                  <span class="profession">дизайнер</span>
                  <p class="descr">Краткий текст, краткий текст, краткий текст</p>
                </div>
            </div>
            <div class="out_team_element">
                <div class="img_box"><img src="/img/team-4.png" alt=""/></div>
                <div class="text_block">
                  <span class="name">Ковальчук Анастасия</span>
                  <span class="profession">дизайнер</span>
                  <p class="descr">Краткий текст, краткий текст, краткий текст</p>
                </div>
            </div>
            <div class="out_team_element">
                <div class="img_box"><img src="/img/team-5.png" alt=""/></div>
                <div class="text_block">
                  <span class="name">Ковальчук Анастасия</span>
                  <span class="profession">дизайнер</span>
                  <p class="descr">Краткий текст, краткий текст, краткий текст</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="partners_section">
    <div class="container">
            <div class="partner_wrapper">
                <div class="partner_box"><img src="/img/partner-1.png" alt="" /></div>
                <div class="partner_box"><img src="/img/partner-2.png" alt="" /></div>
                <div class="partner_box"><img src="/img/partner-3.png" alt="" /></div>
                <div class="partner_box"><img src="/img/partner-4.png" alt="" /></div>
                <div class="partner_box"><img src="/img/partner-5.png" alt="" /></div>
                <div class="partner_box"><img src="/img/partner-6.png" alt="" /></div>
                <div class="partner_box"><img src="/img/partner-1.png" alt="" /></div>
                <div class="partner_box"><img src="/img/partner-2.png" alt="" /></div>
                <div class="partner_box"><img src="/img/partner-3.png" alt="" /></div>
                <div class="partner_box"><img src="/img/partner-4.png" alt="" /></div>
                <div class="partner_box"><img src="/img/partner-5.png" alt="" /></div>
                <div class="partner_box"><img src="/img/partner-6.png" alt="" /></div>
            </div>
    </div>
</section>

      </main>
    )
  }

}
  export default Opt;
