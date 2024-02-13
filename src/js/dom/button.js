export const Hover = (function() {
    const btn1 = document.querySelector('.button1');
    const btn2 = document.querySelector('.button2');
    const btn3 = document.querySelector('.button3');
    
    const button1 = () => {
        btn1.id = 'active';
        btn2.id = '';
        btn3.id = '';
    }
    const button2 = () => {
        btn2.id = 'active';
        btn1.id = '';
        btn3.id = '';
    }
    const button3 = () => {
        btn3.id = 'active';
        btn2.id = '';
        btn1.id = '';
    }
    return { button1, button2, button3 };
})();