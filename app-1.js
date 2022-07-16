const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');
const upArrow = document.querySelector('.up-arrow');
const downArrow = document.querySelector('.down-arrow');
const totalSlides = document.querySelectorAll('.left-inner-container').length - 1;

let activeSlide = 0;

const changeSlide = function(direction) {

  if(direction === 'up') activeSlide < totalSlides ? activeSlide++ : activeSlide = 0;
  else activeSlide > 0 ? activeSlide-- : activeSlide = totalSlides;

  leftContainer.style.transform = `translateY(-${activeSlide * 100}%)`;
  rightContainer.style.transform = `translateY(${activeSlide * 100}%)`;
}

downArrow.addEventListener('click' , () => changeSlide('down'));
upArrow.addEventListener('click', () => changeSlide('up'));

