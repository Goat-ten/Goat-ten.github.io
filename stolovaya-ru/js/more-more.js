document.addEventListener('DOMContentLoaded', () => {

  const more = document.querySelector('.more__more');
  const text = document.querySelector('.subtext__add');
  const moreWrapper = document.querySelector('.more__wrapper')
  more.addEventListener('click', function () {
    text.classList.toggle('more__more-active');

    if (text.classList.contains('more__more-active')) {
      more.innerHTML = "–";
      moreWrapper.style.display = 'block';
    }
    else {
      more.innerHTML = "+"
      moreWrapper.style.display = 'none';
    }
  });

});