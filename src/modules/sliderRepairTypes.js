const sliderRepairTypes = () => {
  const body = document.querySelector('body');
  const slider = document.querySelector('.repair-types-slider');
  let sliderBlock = document.querySelector(`.types-repair1`);
  let buttons = document.querySelectorAll('.repair-types-nav__item');
  let slides = sliderBlock.querySelectorAll('.repair-types-slider__slide');
  let countCurrent = document.querySelector('.slider-counter-content__current');
  let countTotal = document.querySelector('.slider-counter-content__total');
  let event = new Event('click');

  let currentSlider = 1;
  let currentSlide = 1;
  let total = slides.length;

  const initSlides = (arr, uniqPrefix) => {
    arr.forEach((item, index) => {
      item.setAttribute('id', `${uniqPrefix}-${index + 1}`);
    });
  };

  const prevSlide = (container, uniqPrefix) => {
    let newSlide = container.querySelector(
      `#${uniqPrefix}-${currentSlide - 1}`
    );
    container.prepend(newSlide);
  };

  const nextSlide = (container, uniqPrefix) => {
    let newSlide = container.querySelector(
      `#${uniqPrefix}-${currentSlide + 1}`
    );
    container.prepend(newSlide);
  };

  initSlides(slides, 'repair-types-slider__slide');

  buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
      buttons.forEach((item) => {
        item.classList.remove('active');
      });
      item.classList.add('active');
      currentSlider = e.target.getAttribute('id').substr(-1);
      sliderBlock = document.querySelector(`.types-repair${currentSlider}`);
      slides = sliderBlock.querySelectorAll('.repair-types-slider__slide');
      initSlides(slides, 'repair-types-slider__slide');
      slider.prepend(sliderBlock);
      total = slides.length;
      countTotal.innerText = total;
      currentSlide = 1;
      countCurrent.innerText = currentSlide;
    });
  });

  body.addEventListener('click', (e) => {
    if (e.target.closest('#repair-types-arrow_right')) {
      if (currentSlide < total) {
        nextSlide(sliderBlock, 'repair-types-slider__slide');
        currentSlide++;
        countCurrent.innerText = currentSlide;
      }
    }
    if (e.target.closest('#repair-types-arrow_left')) {
      if (currentSlide > 1) {
        prevSlide(sliderBlock, 'repair-types-slider__slide');
        currentSlide--;
        countCurrent.innerText = currentSlide;
      }
    }
  });

  if (screen.width < 1025) {
    const container = document.querySelector('.repair-types-nav');
    let button = document.querySelector(`#repair-slider-${currentSlider}`);
    let scrollPosition = 0;
    let scrollWidth = container.scrollWidth - container.clientWidth;

    body.addEventListener('click', (e) => {
      if (e.target.closest('#nav-arrow-repair-left_base')) {
        if (currentSlider > 1) {
          currentSlider--;
          button = document.querySelector(`#repair-slider-${currentSlider}`);
          document
            .querySelector(`#repair-slider-${currentSlider}`)
            .dispatchEvent(event);
          container.scrollLeft -= button.offsetWidth;
          if (scrollPosition < 0) scrollPosition = 0;
        }
      }
      if (e.target.closest('#nav-arrow-repair-right_base')) {
        if (currentSlider < 5) {
          currentSlider++;
          button = document.querySelector(`#repair-slider-${currentSlider}`);
          document
            .querySelector(`#repair-slider-${currentSlider}`)
            .dispatchEvent(event);
          container.scrollLeft += button.offsetWidth;
          if (scrollPosition > scrollWidth) scrollPosition = scrollWidth;
        }
      }
    });
  }

  countTotal.innerText = total;
};
export default sliderRepairTypes;
