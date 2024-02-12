export const Hover = (function() {
    const button1 = (button1, button2, button3) => {
        button1.id = 'active';
        button2.id = '';
        button3.id = '';
    }
    const button2 = (button1, button2, button3) => {
        button2.id = 'active';
        button1.id = '';
        button3.id = '';
    }
    const button3 = (button1, button2, button3) => {
        button3.id = 'active';
        button2.id = '';
        button1.id = '';
    }
    return { button1, button2, button3 };
})();