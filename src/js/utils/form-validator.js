export function testText(fname) {
  if (fname.validity.valid) {
    fname.id = "valid";
  } else {
    checkFnError(fname);
  };
}
const checkFnError = (fname) => {
  if (fname.validity.valueMissing) {
    fname.id = 'invalid';
  } else if (fname.validity.tooLong) {
    fname.id = 'invalid';
  }
};

export function testDate(date) {
  if (date.value === '') {
    date.id = 'invalid';
    return false;
  } else if ((new Date(date) < new Date())) {
    date.id = 'invalid';
    return false;
  } else {
    date.id = 'valid';
    return true;
  }
}

export function testSelect(option) {
  if (option.value === 'Select list') {
    option.id = 'invalid';
    return false;
  } else {
    option.id = 'valid';
    return true;
  }
}

export function testForm (title, date, option) {
  if (!title.validity.valid) {
    checkFnError(title);
    return false;
  } else if ((testDate(date) === false)) {
    testDate(date);
    return false;
  } else if ((testSelect(option) === false)) {
    testSelect(option);
    return false;
  };
  return true;
}