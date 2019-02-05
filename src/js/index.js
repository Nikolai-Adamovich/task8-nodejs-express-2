'use strict';

document.addEventListener('DOMContentLoaded', () => {  
  document.querySelector('#getAll').addEventListener('click', () => {
    fetch('/news', { method: 'GET' });
  });
  
  document.querySelector('#getOne').addEventListener('click', () => {
    fetch('/news/some-url', { method: 'GET' });
  });
  
  document.querySelector('#post').addEventListener('click', () => {
    fetch('/news', { method: 'POST' });
  });
  
  document.querySelector('#put').addEventListener('click', () => {
    fetch('/news/some-id', { method: 'PUT' });
  });
  
  document.querySelector('#delete').addEventListener('click', () => {
    fetch('/news/some-id', { method: 'DELETE' });
  });
});