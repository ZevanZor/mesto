import {Popup} from './Popup.js'

export class PopupWithDelete extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm
    this._form = this._popup.querySelector('.popup__form');
    this._popupSave = this._form.querySelector('.popup__save')
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('click', (event) => {
      event.preventDefault();
      this._callbackSubmitForm()
    })
  }
  changeSwitchCallBack(newCallBack){
    this._callbackSubmitForm = newCallBack;
  }
  close() {
    super.close()
    this._form.reset()
  }
}

