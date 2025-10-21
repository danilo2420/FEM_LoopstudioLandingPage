// Styles
import '../styles/global.css';
import '../styles/mobile.css';
import '../styles/tablet.css';
import '../styles/desktop.css';

// Node modules
import { animate } from "animejs";
import './typographies.js';

// Script

let menuOpen = false;

const burgerMenu = document.querySelector('.header__burger');
burgerMenu.onclick = () => {
    console.log("Burger menu clicked!");
    
    menuOpen = !menuOpen;
}