document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('.icon__menu-button');
  const click = document.querySelector('.icons__menu--body');
  const arrow = document.querySelector('.arrow')
  button.addEventListener('click', function () {
    click.classList.toggle('icon__menu-button-active');
    arrow.classList.toggle('active-arrow');
  });


  const opens = document.querySelectorAll('.test');
  for (let i = 0; i < opens.length; i++) {
    const open = opens[i];
    open.addEventListener('click', toggle1);
  }
  function toggle1() {
    const menu = document.querySelector('.modal__menu-body');
    menu.classList.add('modal__menu-body--active');

    if (menu.classList.contains('modal__menu-body--active')) {
      click.classList.remove('icon__menu-button-active');
      arrow.classList.remove('active-arrow');
    }
  }


  const menu = document.querySelector('.modal__menu-body');
  const close = document.querySelector('.krest');
  close.addEventListener('click', function () {
    menu.classList.remove('modal__menu-body--active');
  });

  /* const closes = document.querySelectorAll('.krest2');
   for (let i = 0; i < closes.length; i++) {
     const close2 = closes[i];
     const menus = document.querySelectorAll('.menu__subtype')
     for (let i = 0; i < menus.length; i++) {
       const menu2 = menus[i];
       close2.addEventListener('click', function () {
         menu2.classList.add('menu__subtype--close');
         console.log(close2)
       });
     }
 
 
   }*/

});