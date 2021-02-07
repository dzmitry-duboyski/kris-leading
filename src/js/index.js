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

const handlerClick = (e) => {
  if(e.target.className === "offer-btn"){
    document.querySelector('.test').classList.remove('hidden');
    document.querySelector('body').classList.add('display-modal');
    return 
  }

  if(e.target.className === "btn-close-test") {
    document.querySelector('.test').classList.add('hidden');
    document.querySelector('body').classList.remove('display-modal');
    return
  }
}

document.addEventListener('click', handlerClick);