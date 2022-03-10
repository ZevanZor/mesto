const configs = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorSelector: '.error-message',
  errorVisibleClass: 'error-message_visible',
  inputErrorClass: 'popup__input_type_error',
  buttonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
};


const showError = (input, errorContainer, configs) => {
  input.classList.add(configs.inputErrorClass);
  errorContainer.classList.add(configs.errorVisibleClass);
  errorContainer.textContent = input.validationMessage;
};

const hideError = (input, errorContainer, configs) => {
  input.classList.remove(configs.inputErrorClass);
  errorContainer.classList.remove(configs.errorVisibleClass);
  errorContainer.textContent = '';
};

const enableValidation = (configs) => {
  const forms = document.querySelectorAll(configs.formSelector);
  
  forms.forEach(form =>{
    form.addEventListener('submit', submitForm);
    const inputs = form.querySelectorAll(configs.inputSelector);
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        validateInput(form, input, configs)
      });
    });
    toggleButton (form, configs);
  });
  };

  const validateInput =(form, input, classes) => {
    const errorContainer = form.querySelector(`#error-${input.id}`);
  
    if(input.validity.valid) {
      hideError(input, errorContainer, classes);
    } else {
      showError(input, errorContainer, classes);
    }
    toggleButton (form, classes);
  };  

function submitForm (event) {
  event.preventDefault();
};

const toggleButton = (form, { buttonSelector, inactiveButtonClass }) => {
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

const disableButton = (button) => {
  button.disabled = true;
  button.classList.add(configs.inactiveButtonClass)
};

enableValidation(configs)