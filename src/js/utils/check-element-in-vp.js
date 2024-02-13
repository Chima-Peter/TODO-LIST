import { positionGetStarted } from "../dom/position";
import { removePosition } from "../dom/position";
import { navGetStarted } from "../dom/position";
import { removeNav } from "../dom/position";
import { addSticky } from "../dom/position";
import { removeSticky } from "../dom/position";
import { Hover } from "../dom/button";

export const Viewport = (function() {
    const isInViewport = (element) => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1
        };
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio == 1) {
                    positionGetStarted(element);
                }
            })
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(element);
    }
    
    const navInViewport = (position, element) => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.75
        };
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 0.75) {
                    removeNav(element);
                    addSticky(position);
                }
            })
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(position);
    }
    
    const isNotInViewport = (element, position) => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2
        };
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio <= 0.2) {
                    removePosition(position);
                }
            })
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(element);
    }
    
    const navNotInViewport = (element, position) => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2
        };
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio <= 0.2) {
                    navGetStarted(position);
                }
            })
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(element);
    }
    
    const personalInViewport = (element) => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1
        };
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio == 1) {
                    Hover.button1();
                }
            })
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(element);
    }
    
    const familyInViewport = (element) => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1
        };
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio == 1) {
                    Hover.button2();
                }
            })
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(element);
    }
    
    const teamInViewport = (element) => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1
        };
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio == 1) {
                    Hover.button3();
                }
            })
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(element);
    }

    const lastElementInViewport = (nav, temp, element) => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1
        };
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio === 1) {
                    Hover.button3();
                    navGetStarted(nav);
                    removeSticky(temp);
                }
            })
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(element);
    }

    const notLastElementInViewport = (parentElement, nav, temp, element) => {
        const options = {
            root: parentElement,
            rootMargin: "0px",
            threshold: 0
        };
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio == 0) {
                    Hover.button3();
                    removeNav(nav);
                    addSticky(temp);
                }
            })
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(element);
    }
    return {notLastElementInViewport, lastElementInViewport, isInViewport, isNotInViewport, navInViewport, navNotInViewport, personalInViewport, familyInViewport, teamInViewport}
})();