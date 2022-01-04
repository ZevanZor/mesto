const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

const popupSave = document.querySelector(".popup__save");
const popupName = document.querySelector(".popup__input_type_name");
const popupInfo = document.querySelector(".popup__input_type_info");
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formProfile = document.querySelector(".popup__profile")


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