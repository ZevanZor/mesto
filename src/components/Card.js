export class Card {
  constructor (data, cardTemplateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.elements__groups')
  }
  //like
  _likeCard() {
    this._elementsLike.classList.toggle('elements__like_active');
  }
  //удаление карты
  _deleteCard() {
    this._elementsClone.remove();
  };
  _setEventListeners() {
    this._elementsDelete.addEventListener('click',() => this._deleteCard());
    this._elementsLike.addEventListener('click',() => this. _likeCard());
    this._elementsImage.addEventListener('click',() => this._handleCardClick());
  }

  _fillCard() {
    this._elementsImage.src = this._link;
    this._elementsTitle.textContent = this._name;
    this._elementsImage.alt = this._name;
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



