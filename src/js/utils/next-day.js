import { onlyToday } from "../dom/dom-todo";
import { Time } from "./time";

export const firstSevenDays = (function () {
  let saveArray = [];
  const start = () => {
    if (localStorage.getItem('todo') && (saveArray.length === 0)) {
      saveArray = JSON.parse(localStorage.getItem('todo'));
      saveArray.forEach(element => {
        if (Time.timeDifference(element.due) === "equal") {
          onlyToday(element);
        }
      });
    }
  }
  return ( start )
})();