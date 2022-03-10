import { FormValidator } from "./FormValidator.js";
import {initialCards, configs, popupTypeImage} from "./constants.js";
import { openPopup, closePopup } from "./utils.js";
import { Card } from "./Card.js";

const popup = document.querySelector('.popup');

const popupOpenButton = document.querySelector(".profile__edit-button");

const popupProfile = document.querySelector(".popup_type_edit");
const popupCloseButton = popupProfile.querySelector(".popup__close");

const popupSave = popupProfile.querySelector(".popup__save");
const popupName = document.querySelector(".popup__input_type_name");
const popupInfo = document.querySelector(".popup__input_type_info");
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formProfile = popupProfile.querySelector(".popup__form");

const elements = document.querySelector(".elements");
const elementsTemplate = document.querySelector(".elements__template").content;

const popupCard = document.querySelector(".popup_type_add-card");
const popupCardOpen = document.querySelector(".profile__add-button");
const popupCardClose  = popupCard.querySelector(".popup__close");
const formCard = popupCard.querySelector(".popup__form");
const inputNameCard = document.querySelector(".popup__input_type_card-name");
const inputLinkCard = document.querySelector(".popup__input_type_card-link");
const popupCardSave = popupCard.querySelector(".popup__save");

//const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupImageCard = document.querySelector('.popup__image-card');
const popupImagClose  = popupTypeImage.querySelector(".popup__close");
const popupimageTitle  = popupTypeImage.querySelector(".popup__image-title");

const validateCard = new FormValidator(configs, formCard);
const vallidateProfile = new FormValidator(configs, formProfile);

vallidateProfile.enableValidation()
validateCard.enableValidation()

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

const cardTemplateSelector = '.elements__template';

popupImagClose.addEventListener("click", function() {closePopup(popupTypeImage)});

initialCards.forEach((data) =>{
  renderPlaceCard(data, elements)
});

function renderPlaceCard (data, list) {
  const card = new Card (data, cardTemplateSelector);
   const cardElement = card.createCard();
   list.prepend(cardElement)
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
 }, elements);
 formCard.reset();
 closePopup(popupCard);
 validateCard._toggleButton();

});
