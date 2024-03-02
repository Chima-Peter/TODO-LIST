export function positionGetStarted(element) {
    element.classList.add('first-sticky');
}

export function navGetStarted(element) {
    element.classList.add('fixed-nav');
}

export function removePosition(element) {
    element.classList.remove('first-sticky');
}
export function addSticky(element) {
    element.classList.add('sticky');
}
export function removeNav(element) {
    element.classList.remove('fixed-nav');
}
export function removeTempNav (element) {
    element.classList.remove('bhdh');
}
export function addTempNav (element) {
    element.classList.add('bhdh');
}