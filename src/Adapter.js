export default class Adapter {

  static getPoems(id) {
    return fetch(`http://localhost:3000/users/${id}/poems`).then(res => res.json())
  }

  static postPoem(poemTitle, poemBody) {
    const config = {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          title: poemTitle,
          body: poemBody,
          user_id:1
      })
    }
  return fetch(URL, config)
          .then( r=>r.json() )
  }

  static patchPoem(title, body, poem) {
    const config = {
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            title: title,
            body: body
        })
    }
  return fetch(`${URL}/${poem.id}`, config)
          .then( r=>r.json() )
  }

  static deletePoem(poem) {
  return fetch(`${URL}/${poem.id}`, {method:'DELETE'})
          .then( r=>r.json() )
  }

  static getFillerText(id) {
    return fetch(`${URL}/${id}`)
            .then( r=>r.json() )
  }

  static isLoggedIn() {
    return !!localStorage.getItem('token');
  }

}
