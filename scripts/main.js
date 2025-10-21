// Styles
import '../styles/global.css';
import '../styles/mobile.css';
import '../styles/tablet.css';
import '../styles/desktop.css';

// Node modules
import { animate } from "animejs";
import './typographies.js';

// Elements
const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const main = document.querySelector('main');
const btnExit = document.querySelector('.menu__exit');

// Open and close menu
let isMenuOpen = false;
function setMenuStatus(openMenu) {
    main.style.display = openMenu ? "none": "block";
    menu.style.display = openMenu ? "flex" : "none";
    isMenuOpen = openMenu;
}
burgerMenu.onclick = () => setMenuStatus(true);
btnExit.onclick = () => setMenuStatus(false);
window.onresize = () => {if (window.screen.width > 1100 && isMenuOpen) setMenuStatus(false);}
