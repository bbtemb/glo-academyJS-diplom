const popupTransparency = () => {
  const popup = document.querySelector('.popup-transparency');
  const body = document.querySelector('body');
  const slides = popup.querySelectorAll('.popup-transparency-slider__slide');
  const blocks = body.querySelectorAll('.transparency-item');
  const slidesContainer = popup.querySelector('.popup-transparency-slider');
  const sliderCurrent = popup.querySelector('.slider-counter-content__current');
  const sliderTotal = popup.querySelector('.slider-counter-content__total');

  let popupTransparency = false;

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

  const getSlide = (container, uniqPrefix) => {
    let newSlide = container.querySelector(`#${uniqPrefix}-${currentSlide}`);
    container.prepend(newSlide);
  };

  const updateBlock = () => {
    blocks.forEach((item, i) => {
      if (i + 1 !== currentBlock) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
    });
  };

  let currentSlide = 1;
  let currentBlock = 1;
  sliderCurrent.innerText = currentSlide;
  let total = slides.length;
  let totalBlocks = blocks.length;
  sliderTotal.innerText = total;
  initSlides(slides, 'popup-transparency-slide');
  initSlides(blocks, 'transparency-item');

  if (screen.width < 1090) {
    updateBlock();
    body.addEventListener('click', (e) => {
      if (e.target.closest('#transparency-arrow_right')) {
        if (currentBlock < totalBlocks) {
          currentBlock++;
          updateBlock();
        }
      }
      if (e.target.closest('#transparency-arrow_left')) {
        if (currentBlock > 1) {
          currentBlock--;
          updateBlock();
        }
      }
    });
  }

  body.addEventListener('click', (e) => {
    if (e.target.closest('.transparency-item__img')) {
      popup.style.visibility = 'visible';
      popupTransparency = !popupTransparency;
      if (e.target.offsetParent.id === 'transparency-item-1') {
        currentSlide = 1;
      }
      if (e.target.offsetParent.id === 'transparency-item-2') {
        currentSlide = 2;
      }
      if (e.target.offsetParent.id === 'transparency-item-3') {
        currentSlide = 3;
      }
      sliderCurrent.innerText = currentSlide;
      getSlide(slidesContainer, 'popup-transparency-slide');
    }

    if (popupTransparency) {
      if (e.target.closest('#transparency_left')) {
        if (currentSlide > 1) {
          prevSlide(slidesContainer, 'popup-transparency-slide');
          currentSlide--;
          sliderCurrent.innerText = currentSlide;
        }
      }
      if (e.target.closest('#transparency_right')) {
        if (currentSlide < total) {
          nextSlide(slidesContainer, 'popup-transparency-slide');
          currentSlide++;
        }
      }
      sliderCurrent.innerText = currentSlide;
      if (
        e.target.closest('.close') ||
        e.target.className === 'popup popup-transparency'
      ) {
        popup.style.visibility = 'hidden';
        popupTransparency = !popupTransparency;
      }
    }
  });
};
export default popupTransparency;
