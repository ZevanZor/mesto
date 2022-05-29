export class UserInfo {
  constructor({nameElementSelector, jobElementSelector, avatarElementSelector}) {
    this._name = document.querySelector(nameElementSelector)
    this._job = document.querySelector(jobElementSelector)
    this._avatar = document.querySelector(avatarElementSelector)
  }
  getUserInfo( ) {
   return {
    name: this._name.textContent,
    job: this._job.textContent
    }
  }
  setUserInfo (name, job) {
    this._name.textContent = name,
    this._job.textContent = job
  }
  setAvatar (avatar) {
    this._avatar.src = avatar
  }
}