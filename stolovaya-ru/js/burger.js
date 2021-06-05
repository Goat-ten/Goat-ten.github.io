const burger = document.querySelector('.menu__burger');
const nav = document.querySelector('nav.nav')
const line = document.querySelector('.burger__line')
burger.addEventListener('click', function () {
  nav.classList.toggle('nav__active');
  line.classList.toggle('burger__line--active')
  console.log(nav)
});