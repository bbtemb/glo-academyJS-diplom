const hints = () => {
  const formulaItems = document.querySelectorAll('.formula-item');
  const popups = document.querySelectorAll('.formula-item-popup');
  const formulaTitle = document.querySelector('.formula-title');
  formulaItems.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      const popup = item.querySelector('.formula-item-popup');
      popup.classList.add('active');
    });
    item.addEventListener('mouseleave', (e) => {
      const popup = item.querySelector('.formula-item-popup');
      popup.classList.remove('active');
    });

    window.addEventListener('scroll', (e) => {
      formulaItems.forEach((item, i) => {
        if (item.getBoundingClientRect().y < popups[i].offsetHeight - 20) {
          popups[i].classList.add('moved');
        } else {
          popups[i].classList.remove('moved');
        }
      });
    });
  });

  if (screen.width < 1025) {
    const container = document.querySelector('.formula-slider');
    const slides = container.querySelectorAll('.formula-slider__slide');
    const body = document.querySelector('body');
    let currentSlide = 1;
    let totalSlides = slides.length;

    const updateSlides = () => {
      slides.forEach((item, i) => {
        if (i + 1 === currentSlide) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    body.addEventListener('click', (e) => {
      if (e.target.closest('#formula-arrow_right')) {
        if (currentSlide < totalSlides) {
          currentSlide++;
          updateSlides();
        } else {
          currentSlide = 1;
          updateSlides();
        }
      }
      if (e.target.closest('#formula-arrow_left')) {
        if (currentSlide > 1) {
          currentSlide--;
          updateSlides();
        } else {
          currentSlide = totalSlides;
          updateSlides();
        }
      }
    });
  }
};

export default hints;
