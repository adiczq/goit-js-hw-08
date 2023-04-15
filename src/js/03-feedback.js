import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const info = {};

fillForm();

function onFormSubmit(e) {
  e.preventDefault();
  info.email = formEl.elements.email.value;
  info.message = formEl.elements.message.value;

  console.log(info);

  formEl.reset();
  localStorage.removeItem('feedback-form-state');
}

function getInfo(e) {
  info[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(info));
}

function fillForm() {
  const savedForm = localStorage.getItem('feedback-form-state');
  if (savedForm) {
    const setForm = JSON.parse(savedForm);
    Object.keys(setForm).forEach(prop => {
      formEl.elements[prop].value = setForm[prop];
      info[prop] = setForm[prop];
    });
  }
}

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(getInfo, 500));
