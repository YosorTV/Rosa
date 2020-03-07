import scrollreveal from 'scrollreveal';

const selectElement = (element) => document.querySelector(element);
const isClicked = (element) => body.classList.contains(element);

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
    isClicked('open') ? body.style.overflowY = 'hidden' :
                        body.style.overflowY = 'visible';
});