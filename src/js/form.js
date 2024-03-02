import "../css/form.css";

export const Form = (function () {
  const form = document.querySelector('form');
  const fname = document.querySelector('#fname');
  const lname = document.querySelector('#lname');
  const email = document.querySelector('#email');
  const ferror = document.querySelector('#ferror');
  const lerror = document.querySelector('#lerror');
  const error = document.querySelector('#error');
  const nameRegExp = /^[a-zA-Z]+$/;

  const welcome = () => {
    document.addEventListener("DOMContentLoaded", () => {
      fname.textContent = '';
  lname.textContent = '';
  email.textContent = '';

  fname.addEventListener('input', () => {
    if ((fname.value.length !== 0) && (!checkNameRegExp(fname))) {
      fname.id = 'invalid';
      ferror.textContent = 'First name field should contain only alphabets - not spaces, special characters or digits.'
    } else if (fname.validity.valid) {
      fname.id = "valid";
      ferror.textContent = "";
    } else {
      checkFnError();
    };
  });
  lname.addEventListener('input', () => {
    if ((lname.value.length !== 0) && (!checkNameRegExp(lname))) {
      lname.id = 'invalid';
      lerror.textContent = 'Last name field should contain only alphabets - not spaces, special characters or digits.'
    } else if (lname.validity.valid) {
      lname.id = "valid";
      lerror.textContent = "";
    } else {
      checkLnError();
    };
  });
  email.addEventListener('input', () => {
    if (email.validity.valid) {
      email.id = "valid";
      error.textContent = "";
    } else {
      checkEmailError();
    };
  });
  form.addEventListener('submit', (event) => {
    if (!fname.validity.valid) {
      event.preventDefault();
      checkFnError();
    } else if (!email.validity.valid) {
      checkEmailError();
      event.preventDefault();
    } else if (!lname.validity.valid) {
      event.preventDefault()
      checkLnError();
    };
    saveValues();
  });
  const checkFnError = () => {
    if (fname.validity.valueMissing) {
      fname.id = 'invalid';
      ferror.textContent = 'Please fill in this field';
    } else if (fname.validity.tooShort) {
      fname.id = 'invalid';
      ferror.textContent = `This field requires at least ${fname.minLength} letters but received just ${fname.value.length}`;
    };
  };
  const checkLnError = () => {
    if (lname.validity.valueMissing) {
      lname.id = 'invalid';
      lerror.textContent = 'Please fill in this field';
    } else if (lname.validity.tooShort) {
      lname.id = 'invalid';
      lerror.textContent = `This field requires at least ${lname.minLength} letters but received just ${lname.value.length}`;
    };
  };
  const checkEmailError =  () => {
    if (email.validity.valueMissing) {
      email.id = 'invalid';
      error.textContent = 'Please fill in this field';
    } else if (email.validity.tooShort) {
      email.id = 'invalid';
      error.textContent = `This field requires at least ${email.minLength} letters but received just ${email.value.length}`;
    } else if (email.validity.typeMismatch) {
      email.id = 'invalid';
      error.textContent = "Doesn't match format of an email address";
    }
  };
  const checkNameRegExp = (name) => {
    const isValid = nameRegExp.test(name.value);
    return isValid;
  }
    });
  }
  const saveValues = () => {
    const first = fname.value;
    const second = lname.value;
    const third = email.value;
    const loginData = {'fname': first, 'lname': second, 'email': third};
    localStorage.removeItem('logins');
    localStorage.setItem('logins', JSON.stringify(loginData));
  }
  return { welcome };
})();
Form.welcome();
