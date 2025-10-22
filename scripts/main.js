// Styles
import '../styles/global.css';
import '../styles/mobile.css';
import '../styles/tablet.css';
import '../styles/desktop.css';
import '../styles/popup/popupStyle.css';

// Node modules
import { animate } from "animejs";
import './typographies.js';
import { popup } from './popup.js';

// Elements
const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const main = document.querySelector('main');
const btnExit = document.querySelector('.menu__exit');
const headerLogo = document.querySelector('.header__logo');

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


// Popup
headerLogo.onclick = () => popup.openPopup(
    "Hey!",
    "You just opened up a popup. <br>Try to click the button!",
    () => {
        alert("Deleting OS...");
        alert("Just kidding!");
    }
);