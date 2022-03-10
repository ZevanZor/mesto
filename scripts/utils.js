export function openPopup(modal) {
  modal.classList.add("popup_open");
  document.addEventListener('keydown', closePopupEscape);
  document.addEventListener('click', closePopupByClickOverlay);
};

export function closePopup(modal) {
  modal.classList.remove("popup_open");
  document.removeEventListener('click', closePopupByClickOverlay);
  document.removeEventListener('keydown', closePopupEscape);
};

export function closePopupEscape(evt) {
  if(evt.key === 'Escape')
  closePopup(document.querySelector('.popup_open'))
};

export function closePopupByClickOverlay(e) {
  if (e.target.classList.contains('popup')){
    closePopup(document.querySelector('.popup_open'))
  }
};