'use strict';


setInterval(() => {
  const protsent = document.querySelector('.protsent');
  const box = document.querySelector('.box');
  const scrol = document.querySelector('.scrol');

  const scrolProtsent = (box.scrollTop / (box.scrollHeight - box.clientHeight)) * 100;

  scrol.style.width = scrolProtsent + '%';
  protsent.innerHTML = Math.floor(scrolProtsent) + '%';
}, 10);
