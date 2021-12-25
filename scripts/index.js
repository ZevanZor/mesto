const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

const popupSave = document.querySelector(".popup__save");
const popupName = document.querySelector(".popup__name");
const popupInfo = document.querySelector(".popup__info");
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


function OpenButton() {
  popup.classList.add("popup_open");
  popupName.value = profileTitle.textContent;
  popupInfo.value = profileSubtitle.textContent; 
   
}

function CloseButton() {
  popup.classList.remove("popup_open");
}


popupOpenButton.addEventListener("click", OpenButton);
popupCloseButton.addEventListener("click", CloseButton);
popupSave.addEventListener('click', CloseButton);


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupInfo.value;  
}

popupSave.addEventListener('click', formSubmitHandler);
popupSave.addEventListener('submit', formSubmitHandler);
