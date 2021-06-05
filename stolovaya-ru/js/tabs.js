document.addEventListener('DOMContentLoaded', () => {


  const items = document.querySelectorAll('.footer__title');
  const content = document.querySelectorAll('.footer__list');
  const plusiki = document.querySelectorAll('.plus');
  for (let i = 0; i < plusiki.length; i++) {
    for (let i = 0; i < content.length; i++) {
      var cont = content[i];

      for (let i = 0; i < items.length; i++) {
        var item = items[i];
        item.addEventListener('click', function () {
          content[i].classList.toggle('footer__list-active');

          const plus = plusiki[i];
          if (content[i].classList.contains('footer__list-active')) {
            plus.innerHTML = '–'
          }
          else {
            plus.innerHTML = '+'
          }

        });
      }
    }

  }

});