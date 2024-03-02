import '../css/task.css';
import { Today } from './utils/today';

const Task = (function () {
  let loginData = localStorage.getItem('logins');
  loginData = JSON.parse(loginData);
  const fname = loginData.fname;
  const lname = loginData.lname;
  const email = loginData.email;
  const user = document.querySelector('#user-name');
  const today = document.querySelector('#link1');

  const start = () => {
    document.addEventListener("DOMContentLoaded", () => {
      user.textContent = fname + ' ' + lname;
      Today.start(fname);
      link1.addEventListener('click', () => {
        Today.start(fname);
      })
    })
  }
  return { start };
})();
Task.start();