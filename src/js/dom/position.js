export function positionGetStarted(element) {
    element.classList.add('first-sticky');
}

export function navGetStarted(element) {
    element.classList.add('fixed-nav');
}

export function removePosition(element) {
    element.classList.remove('first-sticky');
}

export function removeNav(element) {
    element.classList.remove('fixed-nav');
}
