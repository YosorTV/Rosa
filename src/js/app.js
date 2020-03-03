import scrollreveal from 'scrollreveal';

const selectElement = (element) => document.querySelector(element);

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', ()=> body.classList.toggle('open'));