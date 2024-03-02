import { Viewport } from "./utils/check-element-in-vp";
import { Hover } from "./dom/button";
import "../css/index.css";

export const Start = (function() {
    const getStarted = document.querySelector('#first-sticky');
    const tempSticky = document.querySelector('#temp-sticky');
    const stopper = document.querySelectorAll('#enter');
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');
    const nav = document.querySelector('nav');
    const tempNav = document.querySelector('#bdhd');
    const last = document.querySelector('#team-box-last');
    const personalSection = document.querySelectorAll('#you-box-start');
    const familySection = document.querySelectorAll('#family-box-start');
    const teamSection = document.querySelectorAll('#team-box-start');
    
    const welcome = () => {        
        document.addEventListener("DOMContentLoaded", function(){
            document.addEventListener('scroll', () => {
                Viewport.isInViewport(getStarted);
                Viewport.navNotInViewport(tempNav, nav);
                Viewport.lastElementInViewport(tempNav, getStarted, tempSticky, last);
            });
            document.addEventListener('scroll', () => {
                Viewport.isNotInViewport(tempNav, getStarted);
                Viewport.navInViewport(tempNav, nav);
            });
            button1.addEventListener('click', () => {
                Hover.button1();
            });
            button2.addEventListener('click', () => {
                Hover.button2();
            });
            button3.addEventListener('click', () => {
                Hover.button3();
            });
            personalSection.forEach(tab => {
                Viewport.personalInViewport(tab, getStarted, tempNav);
            });
            familySection.forEach(tab => {
                Viewport.familyInViewport(tab, getStarted, tempNav);
            });
            teamSection.forEach(tab => {
                Viewport.teamInViewport(tab, getStarted, tempNav);
            });
            stopper.forEach(tab => {
                Viewport.lastElementInViewport(tempNav, getStarted, tempSticky, tab);
            })
          })
    }
    return { welcome };
})();
Start.welcome();