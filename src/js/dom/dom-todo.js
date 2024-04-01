import image from '../../images/menu-down.svg';
import image2 from '../../images/menu-up.svg';
import image3 from '../../images/circle-outline.svg'
import image4 from '../../images/circle.svg';
import { Time } from '../utils/time';
import { Save } from '../utils/save_value';
export function tabToday (obj) {
  const divParent = document.querySelector('#today-todo');
  const taskDrop = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const divChild = document.createElement('div');
  const header = document.createElement('h4');
  const svgImage = new Image();
  const doneImage = new Image;

  taskDrop.id = 'task-drop';
  p1.classList.add('identify');
  p1.textContent = `My lists > ${obj.list}`;
  if (obj.done === false) {
    doneImage.src = image3;
    divChild.className = 'divChild';
  } else {
    doneImage.src = image4;
    divChild.className = 'done';
  }
  header.textContent = obj.title;
  taskDrop.appendChild(p1);
  svgImage.src = image;
  svgImage.className = 'svgImage';
  divChild.appendChild(svgImage);
  divChild.appendChild(header);
  doneImage.className = 'doneImage';
  divChild.appendChild(doneImage);
  taskDrop.appendChild(divChild);
  p2.className = 'timer';
  if (Time.timeDifference(obj.due) !== 'less') {
    p2.textContent = obj.dueDate;
    doneImage.src = image3;
    divChild.className = 'divChild';
  } else {
    p2.textContent = 'Overdue';
    doneImage.src = image4;
    divChild.className = 'done';
  }
  taskDrop.appendChild(p2);
  divParent.prepend(taskDrop);

  svgImage.addEventListener("click", () => {
    if (svgImage.src === image) {
      p3.textContent = obj.desc;
      taskDrop.removeChild(p2);
      p3.className = 'p3';
      svgImage.src = image2;
      taskDrop.appendChild(p3);
      taskDrop.appendChild(p2);
    } else {
      svgImage.src = image;
      p3.textContent = '';
      p3.className = '';
      taskDrop.removeChild(p3);
    }
  });
  doneImage.addEventListener("click", () => {
    if (doneImage.src === image3) {
      doneImage.src = image4;
      divChild.className = 'done';
      Save.update(obj.title, true);
    } else {
      if (p2.textContent !== 'Overdue') {
        doneImage.src = image3;
        divChild.className = 'divChild'
        Save.update(obj.title, false);
      }
    }
  })
}
export function onlyToday (obj) {
  const divParent = document.querySelector('#next-first');
  const taskDrop = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const divChild = document.createElement('div');
  const header = document.createElement('h4');
  const svgImage = new Image();
  const doneImage = new Image;

  taskDrop.id = 'task-drop';
  p1.classList.add('identify');
  p1.textContent = `My lists > ${obj.list}`;
  if (obj.done === false) {
    doneImage.src = image3;
    divChild.className = 'divChild';
  } else {
    doneImage.src = image4;
    divChild.className = 'done';
  }
  header.textContent = obj.title;
  taskDrop.appendChild(p1);
  svgImage.src = image;
  svgImage.className = 'svgImage';
  divChild.appendChild(svgImage);
  divChild.appendChild(header);
  doneImage.className = 'doneImage';
  divChild.appendChild(doneImage);
  taskDrop.appendChild(divChild);
  p2.className = 'timer';
  p2.textContent = obj.dueDate;
  doneImage.src = image3;
  divChild.className = 'divChild';
  taskDrop.appendChild(p2);
  divParent.prepend(taskDrop);

  svgImage.addEventListener("click", () => {
    if (svgImage.src === image) {
      p3.textContent = obj.desc;
      taskDrop.removeChild(p2);
      p3.className = 'p3';
      svgImage.src = image2;
      taskDrop.appendChild(p3);
      taskDrop.appendChild(p2);
    } else {
      svgImage.src = image;
      p3.textContent = '';
      p3.className = '';
      taskDrop.removeChild(p3);
    }
  });
  doneImage.addEventListener("click", () => {
    if (doneImage.src === image3) {
      doneImage.src = image4;
      divChild.className = 'done';
      Save.update(obj.title, true);
    } else {
      if (p2.textContent !== 'Overdue') {
        doneImage.src = image3;
        divChild.className = 'divChild'
        Save.update(obj.title, false);
      }
    }
  })
}