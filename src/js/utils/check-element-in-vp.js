import { positionGetStarted } from "../dom/position";
import { removePosition } from "../dom/position";
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