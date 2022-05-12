import {Popup} from "./Popup.js"

export class PopupWithImage extends Popup{
 open(text, link) {
  this._image = this._popup.querySelector('.popup__image-card');
  this._title = this._popup.querySelector('.popup__image-title')
  this._image.src = link;
  this._title.textContent = text;
  this._image.alt = text;
  super.open(text, link)
 }
}