import { tabToday } from "../dom/dom-todo";
export const Save = (function () {
  let saveArray = [];

  const start = (title, desc, dueDate, list) => {
    const obj = new myObj(title, desc, dueDate, list);
    tabToday(obj);


    if (localStorage.getItem('todo')) {
      saveArray = JSON.parse(localStorage.getItem('todo'));
      saveArray[saveArray.length] = obj;
      localStorage.setItem('todo', JSON.stringify(saveArray));
    } else {
      saveArray[saveArray.length] = obj;
      localStorage.setItem('todo', JSON.stringify(saveArray));
    }
    function myObj (title, desc, dueDate, list) {
      const due = new Date(dueDate);
      dueDate = due.toDateString();
      const done = false;
      return { title, desc, due, list, dueDate, done};
    }
  }
  const update = (name, value) => {
    let saveArray = [];
    saveArray = JSON.parse(localStorage.getItem('todo'));
    //localStorage.removeItem('todo');
    saveArray.forEach(element => {
      if (element.title === name) {
        element.done = value;
      }
    });
    localStorage.setItem('todo', JSON.stringify(saveArray));
  }
  return { start, update };
})();