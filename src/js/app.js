import scrollreveal from 'scrollreveal';
import gsap, {TimelineMax, Power1} from 'gsap';
gsap.registerPlugin(TimelineMax, Power1);

const selectElement = (element) => document.querySelector(element);
const isClicked = (element) => body.classList.contains(element);

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');
const headline = selectElement('.headline');
const subHeadline = selectElement('.sub-headline');
const singleBlock = selectElement('.single-animation');
const asterisk = selectElement('.asterisk');
// Menu
menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
    isClicked('open') ? body.style.overflowY = 'hidden' : body.style.overflowY = 'visible';
});
// Animation 
const tl = new TimelineMax;

tl.fromTo(headline, .9, {scale:3, opacity:0}, {scale:1, opacity:1,  ease:Power1.easeIn});
tl.fromTo(asterisk, .6, {rotate:'360deg', opacity:0}, {delay:-.3, rotate:0, opacity:1}, 'step');
tl.fromTo(subHeadline, .6 , {y:'4rem', opacity:0}, {y:'0', opacity: 1, ease:Power1.easeIn},'step');
tl.fromTo('.line', .9, {width:0, opacity:0}, {delay:-.3, width:'100%', opacity:1, ease:Power1.easeIn},'step');
tl.fromTo(singleBlock, .6, {y:'-4rem', opacity:0},{y:0, opacity:1, ease:Power1.easeIn});

const sr = new scrollreveal();

sr.reveal('.animate-left', {origin:'left', duration:1000, distance:'6rem', delay:300});
sr.reveal('.animate-right', {origin:'right', duration:1000, distance:'6rem', delay:600});
sr.reveal('.animate-top', {origin:'top', duration:1000, distance:'6rem', delay:600});
sr.reveal('.animate-bottom', {origin:'bottom', duration:1000, distance:'6rem', delay:600});