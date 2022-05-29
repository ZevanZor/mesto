import {Popup} from './Popup.js'

export class PopupWithForm extends Popup{
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = [...this._form.querySelectorAll('.popup__input')];
    this._popupSave = this._form.querySelector('.popup__save')
  }

_saveLoading () {
  this._popupSave.textContent = 'Сохранение...'
}
  _getInputValues() {
    this._values = {};
    this._inputs.forEach((input) => {this._values[input.name] = input.value})
    return this._values
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._callbackSubmitForm(this._getInputValues())
      this._saveLoading()
    })
  }
  close() {
    super.close()
    this._form.reset()
  }
}