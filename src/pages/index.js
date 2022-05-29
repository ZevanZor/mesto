import { FormValidator } from "../components/FormValidator";
import { configs, profileOpenButton,
  popupName,
  popupInfo,
  formProfile,
  popupCardOpen,
  formCard,
  profileButtonAvatar,
  formProfileAvatar } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import {PopupWithImage} from '../components/PopupWithImage.js'
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo} from "../components/UserInfo.js";
import { api } from "../components/Api";

import './index.css';
import { data } from "autoprefixer";

let userId 
api.getProfile()
.then(res => {
  userInfo.setUserInfo(res.name , res.about)
  userInfo.setAvatar(res.avatar)
  userId = res._id
})

api.getInitialCards()
.then(cardList => {
  cardList.forEach(data => {
    const card = createCard({
      link: data.link,
      name: data.name,
      likes: data.likes,
      id: data._id,
      userId: userId,
      ownerId: data.owner._id
    })
    section.addItem(card)
  })
})


const validateCard = new FormValidator(configs, formCard);
const vallidateProfile = new FormValidator(configs, formProfile);
const vallidateProfileAvatar = new FormValidator(configs, formProfileAvatar);

vallidateProfile.enableValidation()
validateCard.enableValidation()
vallidateProfileAvatar.enableValidation()

profileOpenButton.addEventListener("click", function() {
  const {name, job} = userInfo.getUserInfo()
  popupName.value = name;
  popupInfo.value = job;
  editProfilePopup.open()
});

const changeInfoProfile = (data) => {
 const {name, info } = data;
 api.editProfile(name, info)
 .then(() => {
  userInfo.setUserInfo(name, info);
 }) 
  editProfilePopup.close()
};

const cardTemplateSelector = '.elements__template';

function createCard (data) {
  const card = new Card (
    data,
    cardTemplateSelector,
    () => {
      imagePopupe.open(data.name, data.link)
    },
    (id) => {
      confirmDelete.open()
      confirmDelete.changeSwitchCallBack(()=> {
        api.deleteCard(id)
        .then(res => {
          card.deleteCard()
          confirmDelete.close()
        })
      })
    },
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
        .catch(console.log)
      } else {
        api.addLike(id)
        .then(res => {
          card.setLikes(res.likes)
          }).catch(console.log)
    }
});
  return card.createCard();
}

 // аватар
const submitAvatarForm = (data) => {
api.changeAvatar(data.link)
.then(res => {
  console.log('resavatar', res)
  userInfo.setAvatar(res.avatar)
  popupAvatar.close()
})
.catch(console.log)
};

profileButtonAvatar.addEventListener('click', () => {
  popupAvatar.open()
  validateCard.toggleButton()
});





function renderPlaceCard (data, list) {
   const cardElement = createCard(data);
  section.addItem(cardElement)
}

popupCardOpen.addEventListener("click", function() {
  addCardPopup.open()
  
});

const newCardHandlerSubmit = (data) => {
 api.addCard(data.name, data.link)
 .then(res => {
   const card = createCard({
     link: res.link,
     name: res.name,
     likes: res.likes,
     id: res._id,
     userId: userId,
   })
   section.addItem(card);
   addCardPopup.close()
 })
   validateCard.toggleButton();
}


const section = new Section({
  items: [],
  renderer: renderPlaceCard,
}, '.elements');

section.renderItems()

const imagePopupe = new PopupWithImage('.popup_type_image');

imagePopupe.setEventListeners()

const editProfilePopup = new PopupWithForm(".popup_type_edit" , changeInfoProfile);
const addCardPopup = new PopupWithForm(".popup_type_add-card", newCardHandlerSubmit);
const confirmDelete = new PopupWithForm(".popup_type_delete");
const popupAvatar = new PopupWithForm(".popup_type_avatar", submitAvatarForm);


editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
confirmDelete.setEventListeners();
popupAvatar.setEventListeners()

const userInfo = new UserInfo ({
nameElementSelector: '.profile__title',
jobElementSelector: '.profile__subtitle',
avatarElementSelector: '.profile__avatar'
})