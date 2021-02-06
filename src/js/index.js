import { Language } from './Language/Language.js';

const lan = new Language();
lan.init();

var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// const startTest = () => {
//   document.querySelector('.test').classList.remove('hidden');
// };

// document.querySelector('.offer-btn').addEventListener('click', startTest);

const handlerClick = (e) => {
  if(e.target.className === "offer-btn"){
    return document.querySelector('.test').classList.remove('hidden');
  }

  if(e.target.className === "btn-close-test") {
    return document.querySelector('.test').classList.add('hidden');
  }

  
}

document.addEventListener('click', handlerClick);