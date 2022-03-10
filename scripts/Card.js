import { openPopup } from "./utils.js";
import { popupImageCard, popupimageTitle, popupTypeImage } from "./constants.js"

export class Card {
  constructor (data, cardTemplateSelector) {
   // this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.elements__groups')
  }
  //like
  _likeActive() {
    this._elementsLike.classList.toggle('elements__like_active');
  }
  //удаление карты
  _deleteCard() {
    this._elementsClone.remove();
  };
  //открытие модалки
  _imagePopupOpen() {
    openPopup(popupTypeImage);
    popupImageCard.src = this._link;
    popupimageTitle.textContent = this._name;
    popupImageCard.alt = this._elementsTitle.textContent;
  }
 // обработчики 
  _setEventListeners() {
    this._elementsDelete.addEventListener('click',() => this._deleteCard());
    this._elementsLike.addEventListener('click',() => this._likeActive());
    this._elementsImage.addEventListener('click',() => this._imagePopupOpen());
  }

  _fillCard() {
    this._elementsImage.src = this._link;
    this._elementsTitle.textContent = this._name;
    this._elementsImage.alt = this._elementsTitle.textContent;
  }
  //создание карточки
  createCard () {
    this._elementsClone = this._template.cloneNode(true)
    this._elementsImage = this._elementsClone.querySelector(".elements__image");
    this._elementsTitle = this._elementsClone.querySelector(".elements__title");
    this._elementsDelete = this._elementsClone.querySelector(".elements__delete");
    this._elementsLike = this._elementsClone.querySelector(".elements__like");
    
  
    this._fillCard();
    
    this._setEventListeners();
    return this._elementsClone;
  };
}


