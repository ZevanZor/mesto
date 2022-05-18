import { FormValidator } from "../components/FormValidator";
import {initialCards, configs} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import {PopupWithImage} from '../components/PopupWithImage.js'
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo} from "../components/UserInfo.js";

import './index.css';

const profileOpenButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_edit");
const popupName = document.querySelector(".popup__input_type_name");
const popupInfo = document.querySelector(".popup__input_type_info");
const formProfile = popupProfile.querySelector(".popup__form");
const popupCard = document.querySelector(".popup_type_add-card");
const popupCardOpen = document.querySelector(".profile__add-button");
const formCard = popupCard.querySelector(".popup__form");

const validateCard = new FormValidator(configs, formCard);
const vallidateProfile = new FormValidator(configs, formProfile);

vallidateProfile.enableValidation()
validateCard.enableValidation()

profileOpenButton.addEventListener("click", function() {
  const {name, job} = userInfo.getUserInfo()
  popupName.value = name;
  popupInfo.value = job;
  editProfilePopup.open()
});

const changeInfoProfile = (data) => {
 const {name, info } = data;
  userInfo.setUserInfo(name, info);
  editProfilePopup.close()
};

const cardTemplateSelector = '.elements__template';

function createCard (data) {
  const card = new Card (data, cardTemplateSelector,() => {
    imagePopupe.open(data.name, data.link)
  });
  return card.createCard();
}

function renderPlaceCard (data, list) {
   const cardElement = createCard(data);
  section.addItem(cardElement)
}

popupCardOpen.addEventListener("click", function() {
  addCardPopup.open()
  
});

const newCardHandlerSubmit = (data) => {
  const card = createCard({
    link: data.link,
    name: data.name
  })
   section.addItem(card);
   addCardPopup.close()
   validateCard.toggleButton();
}


const section = new Section({
  items: initialCards,
  renderer: renderPlaceCard,
}, '.elements');

section.renderItems()

const imagePopupe = new PopupWithImage('.popup_type_image');

imagePopupe.setEventListeners()

const editProfilePopup = new PopupWithForm(".popup_type_edit" , changeInfoProfile);
const addCardPopup = new PopupWithForm(".popup_type_add-card", newCardHandlerSubmit);

editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();

const userInfo = new UserInfo ({nameElementSelector: '.profile__title', jobElementSelector: '.profile__subtitle'})