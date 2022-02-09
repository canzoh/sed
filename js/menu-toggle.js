const header = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__toggle');

header.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function() {
  if (header.classList.contains('header__nav--closed')) {
    header.classList.remove('header__nav--closed');
    header.classList.add('header__nav--opened');
  } else {
    header.classList.add('header__nav--closed');
    header.classList.remove('header__nav--opened');
  }
});
