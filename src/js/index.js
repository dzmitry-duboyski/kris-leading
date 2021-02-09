import { Language } from './Language/Language.js';
import { ModalWindow } from './ModalWindow/ModalWindow.js';

const modal = new ModalWindow();
modal.init();
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
    return modal.displayModalWindow();
  }

  if(e.target.className === "btn-close-test") {
    return modal.closeModalWindow();
  }
}

document.addEventListener('click', handlerClick);