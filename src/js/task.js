import '../css/task.css';
import { Today } from './utils/today';
import { firstSevenDays } from './utils/next-day';
import { Clear, Active } from './dom/clear';

const Task = (function () {
  let loginData = localStorage.getItem('logins');
  loginData = JSON.parse(loginData);
  const fname = loginData.fname;
  const lname = loginData.lname;
  const email = loginData.email;
  const user = document.querySelector('#user-name');
  const today = document.querySelector('#link1');
  const todayTab = document.querySelector('#today');
  const sevenDays = document.querySelector('#link2');
  const sevenDaysTab = document.querySelector('#next-days');

  const start = () => {
    document.addEventListener("DOMContentLoaded", () => {
      Clear(todayTab, sevenDaysTab);
      Active(today, sevenDays);
      user.textContent = `${fname}`
      Today.start(fname);
      today.addEventListener('click', () => {
        Clear(todayTab, sevenDaysTab);
        Active(today, sevenDays);
        Today.start(fname);
      })
      sevenDays.addEventListener('click', () => {
        Clear(sevenDaysTab, todayTab);
        Active(sevenDays, today);
        firstSevenDays();
      })
    })
  }
  return { start };
})();
Task.start();