export class FormValidator  {
  constructor(settings, form) {
    this._form = form;
    this._inputSelector = settings.inputSelector;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorVisibleClass = settings.errorVisibleClass;
    this._buttonSelector = settings.buttonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass
  };
  

_showError (input){
  input.classList.add(this._inputErrorClass);
  this._errorContainer.classList.add(this._errorVisibleClass);
  this._errorContainer.textContent = input.validationMessage;
};


_hideError (input)  {
  input.classList.remove(this._inputErrorClass);
  this._errorContainer.classList.remove(this._errorVisibleClass);
  this._errorContainer.textContent = '';
};

_enableSubmitButton () {
  this._button.classList.add(this._inactiveButtonClass);
  this._button.disabled = true;
}

_disableSubmitButton () {
  this._button.classList.remove(this._inactiveButtonClass);
  this._button.disabled = false;
}


_toggleButton = () => {
 this._button = this._form.querySelector(this._buttonSelector);
  const isFormValid = this._form.checkValidity();

  if(isFormValid) {
    this._disableSubmitButton()
  } else {
    this._enableSubmitButton ()
  };
};

_validateInput (input) {
  this._errorContainer = this._form.querySelector(`#error-${input.id}`);

  if(input.validity.valid) {
    this._hideError(input, this._errorContainer);
  } else {
    this._showError(input, this._errorContainer);
  }
  this._toggleButton ();
};  

  enableValidation () {
      this._form.addEventListener('submit', this._submitForm);

      this._inputs = this._form.querySelectorAll(this._inputSelector);

      this._inputs.forEach(input => {
        input.addEventListener('input', () => {
          this._validateInput(input)
        });
      });
      this._toggleButton ();
    };

_submitForm (event) {
    event.preventDefault();
  };
  disableButton = () => {
    this._button.disabled = true;
    this._button.classList.add(this._inactiveButtonClass)
  };

}

export const disableButton = () => {
  this._button.disabled = true;
  this._button.classList.add(this._inactiveButtonClass)
};
