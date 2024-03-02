import { Time } from "./time";
import { changeQuote } from "../dom/quote";
export const Today = (function () {
  const userName = document.querySelector('#fname');
  const userTime = document.querySelector('#timer');
  const userQuote = document.querySelector('#quote');
  const start = (fname) => {
    userName.textContent = fname;
    Time.todayTime(userTime)
    changeQuote(userQuote);
  }
  return { start };
})();