export class UserInfo {
  constructor({nameElementSelector, jobElementSelector}) {
    this._name = document.querySelector(nameElementSelector)
    this._job = document.querySelector(jobElementSelector)
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
}