import { positionGetStarted } from "../dom/position";
import { removePosition } from "../dom/position";
import { navGetStarted } from "../dom/position";
import { removeNav } from "../dom/position";

export function isInViewport(element) {
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

export function navInViewport(position, element) {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.75
    };
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.75) {
                removeNav(element);
            }
        })
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(position);
}

export function isNotInViewport(element, position) {
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

export function navNotInViewport(element, position) {
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