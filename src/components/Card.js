export class Card {
  constructor (data, cardTemplateSelector, handleCardClick, handleDeleteClick, handleLikeClicked) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClicked = handleLikeClicked;
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.elements__groups')
  }
  //like
  isLiked() {
    this._userHasLikeCard = this._likes.find(user => user._id === this._userId)
    return this._userHasLikeCard
  }
  _likeCard() {
    this._elementsLike.classList.add('elements__like_active');
  }

  _deleteLikeCard() {
    this._elementsLike.classList.remove('elements__like_active')
  }
  setLikes(newLikes) {
    this._likes = newLikes
  this._likeCount.textContent = this._likes.length;

    if(this.isLiked()) {
      this._likeCard()
    } else {
      this._deleteLikeCard()
    }
  }
  //удаление карты
  deleteCard() {
    this._elementsClone.remove();
  };
  _setEventListeners() {
    this._elementsLike.addEventListener('click',() => this._handleLikeClicked(this._id));
    this._elementsImage.addEventListener('click',() => this._handleCardClick());
    this._elementsDelete.addEventListener('click',() => this._handleDeleteClick(this._id))
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
    this._likeCount = this._elementsClone.querySelector('.elements__like_count')
    
    

    this._fillCard();

    this._setEventListeners();
    this.setLikes(this._likes)

    if (this._ownerId !== this._userId) {
      this._elementsDelete.style.display = 'none'
    }

    return this._elementsClone;
  };
}



