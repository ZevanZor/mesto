class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl
    this._headers = headers
}


getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
    }).then((res) =>
        this._checkServerResponce(res)
    )
    .catch(console.log())
}

getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
    }).then((res) =>
        this._checkServerResponce(res)
    )
    .catch(console.log())
  }
 // Редактирование профиля
editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: 
            this._headers,
          body: JSON.stringify({
            name,
            about
          })
    }).then((res) =>
        this._checkServerResponce(res)
    )
    .catch(console.log())
}

//Добавление новой карточки
addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
            name,
            link
        })
    }).then((res) =>
        this._checkServerResponce(res)
    )
    .catch(console.log())
}
deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
        method: "DELETE",
        headers: this._headers,
    }).then((res) =>
        this._checkServerResponce(res)
    )
    .catch(console.log())
}

// проверка ответа от сервера
_checkServerResponce(res) {
   if (res.ok) {
        return res.json()
    } else {
        return Promise.reject(res.status)
    }
}
// добавлние и удаление лайка
addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: "PUT",
        headers: this._headers
    }).then((res) =>
        this._checkServerResponce(res)
    )
    .catch(console.log())
}

deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers
    }).then((res) =>
        this._checkServerResponce(res)
    )
    .catch(console.log())
}

changeAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            avatar
        })
    }).then((res) =>
        this._checkServerResponce(res)
    )
    .catch(console.log())
}
}


export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
      authorization: '57597d03-01ed-4c54-8c6a-04895c17a822',
      'Content-Type': 'application/json'
  }
}); 