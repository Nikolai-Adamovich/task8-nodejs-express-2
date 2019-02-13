'use strict';

//import slug from 'slug';

document.addEventListener('DOMContentLoaded', () => {
  /* document.querySelector('#getAll').addEventListener('click', async () => {
    const response = await fetch('/news', {
      method: 'GET'
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const err = await response.json();
      console.log(err);
    }
  });

  document.querySelector('#getOne').addEventListener('click', async () => {
    const response = await fetch('/news/some-url', {
      method: 'GET'
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const err = await response.json();
      console.log(err.message);
    }
  });

  document.querySelector('#post').addEventListener('click', async () => {
    const title = `Title ${Math.random() % 10}`;
    const response = await fetch('/news', {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify({
        author: `Author ${Math.random()}`,
        title: title,
        slug: slug(title, {
          symbols: true,
          lower: true
        }),
        content: `Content ${Math.random()}`,
        imgUrl: `Image URL ${Math.random()}`
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const err = await response.json();
      console.log(err);
    }
  });

  document.querySelector('#put').addEventListener('click', async () => {
    const response = await fetch('/news/some-id', {
      method: 'PUT',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify({
        a: 1234567890,
        b: '#-#-#-#-#-#-#-#-#'
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const err = await response.json();
      console.log(err);
    }
  });

  document.querySelector('#delete').addEventListener('click', async () => {
    const response = await fetch('/news/some-id', {
      method: 'DELETE'
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const err = await response.json();
      console.log(err);
    }
  }); */

  /* Register */
  const register = document.querySelector('#register');

  if (register) {
    register.addEventListener('click', async () => {
      const response = await fetch('/user', {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify({
          username: document.querySelector('#username').value,
          email: document.querySelector('#email').value,
          password: document.querySelector('#password').value,
          role: document.querySelector('#role').value === 'admin' ? 'admin' : 'user'
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        const err = await response.json();
        console.log(err);
      }
    });
  }

  /* Login */
  const loginButton = document.querySelector('#login_button');

  if (loginButton) {
    loginButton.addEventListener('click', async () => {
      const response = await fetch('/login', {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify({
          username: document.querySelector('#username').value,
          password: document.querySelector('#password').value
        })
      });

      if (response.ok) {
        window.location.assign('/');
      } else {
        const err = await response.json();
        console.log(err);
      }
    });
  }

  /* Header */

  const navButton = document.querySelector('.nav__button');
  const navMenu = document.querySelector('.nav__menu');

  if (navButton && navMenu) {
    navButton.addEventListener('click', () => {
      navMenu.classList.toggle('nav__menu--visible');
    });
  }

});