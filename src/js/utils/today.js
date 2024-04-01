import { Time } from "./time";
import { changeQuote } from "../dom/quote";
import { Save } from "./save_value";
import { tabToday } from "../dom/dom-todo";
import { testSelect, testText, testForm, testDate } from "./form-validator";

export const Today = (function () {
  const userName = document.querySelector('#fname');
  const userTime = document.querySelector('#timer');
  const userQuote = document.querySelector('#quote');
  const addBtn = document.querySelector('#btn-add');
  const form = document.querySelector('#add-form');
  const addForm = document.querySelector('#btnYes');
  const cancelForm = document.querySelector('#btnNo');
  const title = document.querySelector('#title');
  const desc = document.querySelector('#desc');
  const dueDate = document.querySelector('#date');
  const myList = document.querySelector('#list');
  let saveArray = [];


  const start = (fname) => {
    userName.textContent = fname.charAt(0).toUpperCase() + fname.slice(1);
    Time.displayTime(userTime)
    changeQuote(userQuote);
    addBtn.addEventListener("click", () => {
      form.classList.remove('invisible');
      form.classList.add('visible');
    })
    cancelForm.addEventListener("click", () => {
      form.classList.add('invisible');
      form.classList.remove('visible');
    })
    title.addEventListener("input", () => {
      testText(title);
    })
    dueDate.addEventListener("input", () => {
      testDate(dueDate);
    })
    myList.addEventListener("input", () => {
      testSelect(myList);
    })
    addForm.addEventListener("click", (event) => {
      event.preventDefault();
      if (testForm(title, dueDate, myList) === true) {
        Save.start(title.value, desc.value, dueDate.value, myList.value);
        title.value = '';
        desc.value = '';
        dueDate.value = '';
        myList.value = '';
        form.classList.add('invisible');
        form.classList.remove('visible');
      }
    })
    if (localStorage.getItem('todo') && (saveArray.length === 0)) {
      saveArray = JSON.parse(localStorage.getItem('todo'));
      for (let obj = 0; obj < saveArray.length; obj++)
      {
        tabToday(saveArray[obj]);
      }
    }
  }
  return { start };
})();