const upArrow = document.querySelector('.up-arrow');
const downArrow = document.querySelector('.down-arrow');
const totalSlides = document.querySelectorAll('.left-inner-container').length;

let activeSlide = 0;

downArrow.addEventListener('click', () => {
  if(activeSlide < totalSlides - 1) activeSlide++;
  document.querySelector(`#container-${activeSlide}`).style.transform = `translateY(-${activeSlide * 100}%)`;
  document.querySelector(`#container-${activeSlide + 1}`).style.transform = `translateY(-${activeSlide * 100}%)`; 
  document.querySelector(`#img-${activeSlide}`).style.transform = `translateY(${activeSlide * 100}%)`;
  document.querySelector(`#img-${activeSlide + 1}`).style.transform = `translateY(${activeSlide * 100}%)`;
});

upArrow.addEventListener('click', () => {
  if(activeSlide >= 1) activeSlide--;
  document.querySelector(`#container-${activeSlide + 1}`).style.transform = `translateY(-${activeSlide * 100}%)`; 
  document.querySelector(`#container-${activeSlide + 2}`).style.transform = `translateY(-${activeSlide * 100}%)`;
  document.querySelector(`#img-${activeSlide + 1}`).style.transform = `translateY(${activeSlide * 100}%)`;
  document.querySelector(`#img-${activeSlide + 2}`).style.transform = `translateY(${activeSlide * 100}%)`;
});