//mobile view

const burgerIcon = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('#navbarBasicExample');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
  burgerIcon.classList.toggle('is-active');
})
