export const Time = (function () {
  const todayTime = (userTime) => {
    const now = new Date().getHours();
    if ((now >= 5) && (now < 12)) {
      userTime.textContent = 'Good Morning, ';
    } else if ((now >= 12) && (now < 18)) {
      userTime.textContent = 'Good Afternoon, ';
    } else if ((now >= 18) && (now <= 23)) {
      userTime.textContent = 'Good Night, ';
    } else if ((now >= 0) && (now < 5)) {
      userTime.textContent = 'Good Night, ';
    } 
  }
  return { todayTime }
})();