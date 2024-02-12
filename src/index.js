import { isInViewport } from "./js/utils/check-element-in-vp";
import { isNotInViewport } from "./js/utils/check-element-in-vp";
import { Hover } from "./js/dom/button";

const Start = (function() {
    const getStarted = document.querySelector('#first-sticky');
    const stopper = document.querySelector('#bdhd');
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');

    const welcome = () => {
        getStarted.addEventListener('scroll', () => {
            isInViewport(getStarted)
        })
        
        document.addEventListener("DOMContentLoaded", function(){
            document.addEventListener('scroll', () => {
                isInViewport(getStarted);
            });
            document.addEventListener('scroll', () => {
                isNotInViewport(stopper, getStarted);
            });
            button1.addEventListener('click', () => {
                Hover.button1(button1, button2, button3);
            });
            button2.addEventListener('click', () => {
                Hover.button2(button1, button2, button3);
            });
            button3.addEventListener('click', () => {
                Hover.button3(button1, button2, button3);
            });
          })
    }
    return { welcome };
})();
Start.welcome();