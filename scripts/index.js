const popupOpenButton = document.querySelector(".profile__edit-button");

const popupProfile = document.querySelector(".popup_type_edit");
const popupCloseButton = popupProfile.querySelector(".popup__close");

const popupSave = popupProfile.querySelector(".popup__save");
const popupName = document.querySelector(".popup__input_type_name");
const popupInfo = document.querySelector(".popup__input_type_info");
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formProfile = popupProfile.querySelector(".popup__profile");

const elements = document.querySelector(".elements");
const elementsTemplate = document.querySelector(".elements__template").content;

const popupCard = document.querySelector(".popup_type_add-card");
const popupCardOpen = document.querySelector(".profile__add-button");
const popupCardClose  = popupCard.querySelector(".popup__close");
const formCard = popupCard.querySelector(".popup__profile");
const inputNameCard = document.querySelector(".popup__input_type_card-name");
const inputLinkCard = document.querySelector(".popup__input_type_card-link");
const popupCardSave = popupCard.querySelector(".popup__save");

const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupImageCard = document.querySelector('.popup__image-card');
const popupImagClose  = popupTypeImage.querySelector(".popup__close");
const popupimageTitle  = popupTypeImage.querySelector(".popup__image-title");

function openPopup(modal) {
  modal.classList.add("popup_open");
};

function closePopup(modal) {
  modal.classList.remove("popup_open");
};

popupOpenButton.addEventListener("click", function() {
  openPopup(popupProfile)
  popupName.value = profileTitle.textContent;
  popupInfo.value = profileSubtitle.textContent;
});

popupCloseButton.addEventListener("click", function() {
  closePopup(popupProfile)
});

function changeInfoProfile (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupInfo.value;
  closePopup(popupProfile)
};

formProfile.addEventListener ('submit', changeInfoProfile);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function deliteCard (evt) {
  evt.target.closest(".elements__groups").remove();
};

function createCard(cardData) {
  
  const elementsClone = elementsTemplate.cloneNode(true)
  const elementsImage = elementsClone.querySelector(".elements__image");
  const elementsTitle = elementsClone.querySelector(".elements__title");
  const elementsDelete = elementsClone.querySelector(".elements__delete");
  const elementsLike = elementsClone.querySelector(".elements__like");

  elementsDelete.addEventListener("click", deliteCard);

  elementsLike.addEventListener('click', () => {
    elementsLike.classList.toggle('elements__like_active');
  })

  elementsImage.style.backgroundImage = `url(${cardData.link})`
  elementsTitle.textContent = cardData.name;

  elementsImage.addEventListener('click', () => {
    openPopup(popupTypeImage)
    popupImageCard.src = cardData.link
    popupimageTitle.textContent = cardData.name
    popupImageCard.alt = elementsTitle.textContent
  });
  
  return elementsClone;
};

popupImagClose.addEventListener("click", function() {closePopup(popupTypeImage)});

initialCards.forEach(renderPlaceCard);

function renderPlaceCard (item) {
  const cardElement = createCard(item)
  elements.prepend(cardElement);
}

popupCardOpen.addEventListener("click", function() {
  openPopup(popupCard)
});

popupCardClose.addEventListener("click", function() {
  closePopup(popupCard)
});

formCard.addEventListener("submit", (evt) => {
  evt.preventDefault()
  const nameValue = inputNameCard.value;
  const linkValue = inputLinkCard.value;
  renderPlaceCard ({
   name: nameValue,
   link: linkValue
 });
 formCard.reset();
 closePopup(popupCard)
});