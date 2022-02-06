function submitForm (event) {
  event.preventDefault();
};

function showError (input, errorContainer, { inputErrorClass, errorVisibleClass }) {
  input.classList.add(inputErrorClass);
  errorContainer.classList.add(errorVisibleClass);
  errorContainer.textContent = input.validationMessage;
};

function hideError (input, errorContainer, { inputErrorClass, errorVisibleClass }) {
  input.classList.remove(inputErrorClass);
  errorContainer.classList.remove(errorVisibleClass);
  errorContainer.textContent = '';
};

function toggleButton (form, { buttonSelector, inactiveButtonClass }) {
  const button = form.querySelector(buttonSelector);
  const isFormValid = form.checkValidity();

  if(isFormValid) {
    button.classList.remove(inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(inactiveButtonClass);
    button.disabled = true;
  };
};

function validateInput(form, input, classes) {
  const errorContainer = form.querySelector(`#error-${input.id}`);

  if(input.validity.valid) {
    hideError(input, errorContainer, classes);
  } else {
    showError(input, errorContainer, classes);
  }
  toggleButton (form, classes);
};

function enableValidation ({formSelector, inputSelector, ...rest}) {
const forms = document.querySelectorAll(formSelector);

forms.forEach(form =>{
  form.addEventListener('submit', submitForm);

  const inputs = form.querySelectorAll(inputSelector);

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      validateInput(form, input, rest)
    });
  });
  toggleButton (form, rest);
});
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorSelector: '.error-message',
  errorVisibleClass: 'error-message_visible',
  inputErrorClass: 'popup__input_type_error',
  buttonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled'
});