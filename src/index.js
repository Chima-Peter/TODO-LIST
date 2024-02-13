import { Viewport } from "./js/utils/check-element-in-vp";
import { Hover } from "./js/dom/button";

const Start = (function() {
    const getStarted = document.querySelector('#first-sticky');
    const stopper = document.querySelector('#bdhd');
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');
    const nav = document.querySelector('nav');
    const tempNav = document.querySelector('#bdhd');
    const personalSection = document.querySelector('#you-box-start');
    const familySection = document.querySelector('#family-box-start');
    const teamSection = document.querySelector('#team-box-start');
    const closePersonalSection = document.querySelector('#you-box-last');
    const closeFamilySection = document.querySelector('#family-box-last');
    const closeTeamSection = document.querySelector('#team-box-last');
    const navClose = document.querySelector('#stop');

    const welcome = () => {
        getStarted.addEventListener('scroll', () => {
            isInViewport(getStarted)
        })
        
        document.addEventListener("DOMContentLoaded", function(){
            document.addEventListener('scroll', () => {
                Viewport.isInViewport(getStarted);
                Viewport.navNotInViewport(tempNav, nav);
                Viewport.personalInViewport(personalSection);
                Viewport.familyInViewport(familySection);
                Viewport.teamInViewport(teamSection);
                Viewport.notLastElementInViewport(teamSection, nav, tempNav, closeTeamSection);
            });
            document.addEventListener('scroll', () => {
                Viewport.isNotInViewport(stopper, getStarted);
                Viewport.navInViewport(tempNav, nav);
                Viewport.personalInViewport(closePersonalSection);
                Viewport.familyInViewport(closeFamilySection);
                Viewport.lastElementInViewport(nav, tempNav, navClose);
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
          })
    }
    return { welcome };
})();
Start.welcome();