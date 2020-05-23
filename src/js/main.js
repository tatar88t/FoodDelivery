
import tabs from './modules/tabs';
import timer from './modules/timer';
import modals from './modules/modals';
import {fitnessMenu, premiumMenu, veganMenu } from './modules/cards';
// import forms from './modules/forms';
// import formsjson from './modules/formsjson';
import formsfetch from './modules/formsfetch';
import Cards from './modules/cards';
import getResource from './modules/getResourse';
import simpleSlider from './modules/simpleSlider';
import smoothSlider from './modules/smoothSlider';
import calculator from './modules/calculator';

window.addEventListener('DOMContentLoaded', () => {
    
'use strict';
    
    tabs('.tabcontent', '.tabheader__items', '.tabheader__item');
    timer();
    modals('.btn_modal-call', '.modal');


    fitnessMenu.addCard();
    premiumMenu.addCard();
    veganMenu.addCard();

    
    
    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new Cards(img, altimg, title, descr, price).addCard();
    //         });
    //     });

    // forms();
    // formsjson();
    formsfetch();

    // simpleSlider('.offer__slide', '.offer__slider-counter', '.offer__slider-prev', '.offer__slider-next', '#current', '#total', 'offer__slide_active', 'offer__slide_hidden');
    smoothSlider('.offer__slide', '.offer__slider-counter', '.offer__slider-prev', '.offer__slider-next', '#current', '#total', 'offer__slide_active', 'offer__slide_hidden', '.offer__slider-wrapper', '.offer__slider-inner-wrapper');
    calculator('.calculating__result span');

})