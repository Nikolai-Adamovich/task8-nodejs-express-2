'use strict';

document.addEventListener('DOMContentLoaded', () => {  
  document.querySelector('#getAll').addEventListener('click', async () => {
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
    fetch('/news', { method: 'POST' });
  });
  
  document.querySelector('#put').addEventListener('click', async () => {
    fetch('/news/some-id', { method: 'PUT' });
  });
  
  document.querySelector('#delete').addEventListener('click', async () => {
    fetch('/news/some-id', { method: 'DELETE' });
  });
});