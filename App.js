"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import MainPage from './components/MainPage.js';
import About from './components/About.js';
import Opt from './components/Opt.js';
import MainCatalog from './components/MainCatalog.js';
import ProductCatalog from './components/ProductCatalog.js';
import ProductPage from './components/ProductPage.js';
import Oformlenie from './components/Oformlenie.js';
import Shops from './components/Shops.js';
import Modals from './components/Modals.js'
import Footer from './components/Footer.js';




ReactDOM.render(
  <div>
  <Header/>

    <MainPage/>

    <About/>

    <Opt/>

    <MainCatalog/> 

    <ProductCatalog/> 

    <ProductPage/>

    <Oformlenie/>

    <Shops/>

    <Modals/> 

  <Footer/> 

  </div>
  , document.getElementById('main_content') 
);

