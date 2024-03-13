const sliderReviews = () => {
  const container = document.querySelector('.reviews-slider');
  const slides = container.querySelectorAll('.reviews-slider__slide');
  const body = document.querySelector('body');
  let currentSlide = 1;
  let totalSlides = slides.length;

  const updateSlides = () => {
    slides.forEach((item, i) => {
      if (i + 1 !== currentSlide) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
    });
  };

  body.addEventListener('click', (e) => {
    if (e.target.closest('#reviews-arrow_right')) {
      if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlides();
      } else {
        currentSlide = 1;
        updateSlides();
      }
    }
    if (e.target.closest('#reviews-arrow_left')) {
      if (currentSlide > 1) {
        currentSlide--;
        updateSlides();
      } else {
        currentSlide = totalSlides;
        updateSlides();
      }
    }
  });

  updateSlides();
};
export default sliderReviews;
