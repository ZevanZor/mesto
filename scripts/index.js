const popupOpenButton = document.querySelector(".profile__edit-button");

const popup = document.querySelector(".popup_type_edit");
const popupCloseButton = popup.querySelector(".popup__close");

const popupSave = popup.querySelector(".popup__save");
const popupName = document.querySelector(".popup__input_type_name");
const popupInfo = document.querySelector(".popup__input_type_info");
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formProfile = popup.querySelector(".popup__profile");

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

//пр1

function openButton() {
  popup.classList.add("popup_open");
  popupName.value = profileTitle.textContent;
  popupInfo.value = profileSubtitle.textContent;
}

function сloseButton() {
  popup.classList.remove("popup_open");
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupInfo.value;
  сloseButton()  
}

formProfile.addEventListener ('submit', formSubmitHandler)

popupOpenButton.addEventListener("click", openButton);
popupCloseButton.addEventListener("click", сloseButton);

//пр2

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
}

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

 
  elements.prepend(elementsClone);

  popupImagClose.addEventListener("click", function() {popupCardToggle(popupTypeImage)});
  

  elementsImage.addEventListener('click', () => {
    popupCardToggle(popupTypeImage)
    popupImageCard.src = cardData.link
    popupimageTitle.textContent = cardData.name
    popupImageCard.alt = elementsTitle.textContent
  });
}

initialCards.forEach(createCard);


function popupCardToggle(modal) {
  modal.classList.toggle("popup_open");
};

popupCardOpen.addEventListener("click", function() {
  popupCardToggle(popupCard)
});

popupCardClose.addEventListener("click", function() {
  popupCardToggle(popupCard)
});

formCard.addEventListener("submit", (evt) => {
  evt.preventDefault()
  const nameValue = inputNameCard.value;
  const linkValue = inputLinkCard.value;
 createCard ({
   name: nameValue,
   link: linkValue
 });
 popupCardToggle(popupCard)
})