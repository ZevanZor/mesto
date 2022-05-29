export const configs = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorSelector: '.error-message',
  errorVisibleClass: 'error-message_visible',
  inputErrorClass: 'popup__input_type_error',
  buttonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
};

export const initialCards = [
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
export const popupTypeImage = document.querySelector(".popup_type_image");
export const popupImageCard = document.querySelector('.popup__image-card');
export const popupimageTitle  = popupTypeImage.querySelector(".popup__image-title");

const profileOpenButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_edit");
const popupName = document.querySelector(".popup__input_type_name");
const popupInfo = document.querySelector(".popup__input_type_info");
const formProfile = popupProfile.querySelector(".popup__form");
const popupCard = document.querySelector(".popup_type_add-card");
const popupCardOpen = document.querySelector(".profile__add-button");
const formCard = popupCard.querySelector(".popup__form");
const profileButtonAvatar = document.querySelector('.profile__button-avatar');
const popupTupeAvatar = document.querySelector('.popup_type_avatar')
const formProfileAvatar = popupTupeAvatar.querySelector(".popup__form");

export { profileOpenButton,
  popupProfile,
  popupName,
  popupInfo,
  formProfile,
  popupCard,
  popupCardOpen,
  formCard,
  profileButtonAvatar,
  popupTupeAvatar,
  formProfileAvatar,
}
