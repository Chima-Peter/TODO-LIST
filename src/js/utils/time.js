export const Time = (function () {
  const displayTime = (userTime) => {
    const now = new Date().getHours();
    if ((now >= 5) && (now < 12)) {
      userTime.textContent = 'Good Morning, ';
    } else if ((now >= 12) && (now < 17)) {
      userTime.textContent = 'Good Afternoon, ';
    } else if ((now >= 17) && (now < 20)) {
      userTime.textContent = 'Good Evening, ';
    } else if ((now >= 20) && (now <= 23)) {
      userTime.textContent = 'Good Night, ';
    } else if ((now >= 0) && (now < 5)) {
      userTime.textContent = 'Good Night, ';
    }
  }
  const timeDifference = (time1) => {
    time1 = new Date(time1);
    const time2 = new Date();
    if (time1 > time2) {
      return 'greater';
    } else if (time1.toDateString() === time2.toDateString()) {
      return 'equal';
    }
    return 'less';
  }
  return { displayTime, timeDifference }
})();