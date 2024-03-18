import { showPopup } from './helpers';

const sliderPortfolio = () => {
  const body = document.querySelector('body');
  const gallery = document.querySelector('.portfolio-slider');
  const prevBtn = document.querySelector('#portfolio-arrow_left');
  const nextBtn = document.querySelector('#portfolio-arrow_right');
  const galleryItems = document.querySelectorAll('.portfolio-slider__slide');
  const popup = document.querySelector('.popup-dialog-portfolio');
  const popupLayout = body.querySelector('.popup.popup-portfolio');
  const popupSlidesBlock = popup.querySelector('.popup-portfolio-slider');
  const popupContentBlock = popup.querySelector('.popup-portfolio-text-slider');
  const popupArrow = popup.querySelectorAll('.popup-arrow');
  const sliderCounter = popup.querySelector('#popup-portfolio-counter');
  const sliderCounterCurrent = popup.querySelector(
    '.slider-counter-content__current'
  );
  const sliderCounterTotal = popup.querySelector(
    '.slider-counter-content__total'
  );
  const close = document.querySelector('.popup-portfolio>.close');

  let popupSlides = popup.querySelectorAll('.popup-portfolio-slider__slide');
  let popupSlidesText = popup.querySelectorAll('.popup-portfolio-text');

  const galleryItemWidth = galleryItems[0].offsetWidth;

  let currentSlide = 1;
  sliderCounterCurrent.innerText = currentSlide;
  let total = popupSlides.length;
  sliderCounterTotal.innerText = total;

  prevBtn.addEventListener('click', (e) => {
    gallery.style.scrollBehavior = 'smooth';
    gallery.scrollLeft -= galleryItemWidth;
  });

  nextBtn.addEventListener('click', (e) => {
    gallery.style.scrollBehavior = 'smooth';
    gallery.scrollLeft += galleryItemWidth;
  });

  const handleScrollButtons = () => {
    if (gallery.scrollLeft === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'flex';
    }
    if (gallery.scrollLeft + gallery.clientWidth === gallery.scrollWidth) {
      nextBtn.style.display = 'none';
    } else {
      nextBtn.style.display = 'flex';
    }
  };

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

  gallery.addEventListener('scroll', () => {
    handleScrollButtons();
  });

  galleryItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      popup.style.visibility = 'visible';
      popupLayout.style.visibility = 'visible';
      popupSlidesText.forEach((item, i) => {
        item.style.display = 'block';
      });
      // popupArrow.forEach((item) => {
      //   item.style.top = '5%';
      // });
      // sliderCounter.style.marginLeft = '0';
      // sliderCounter.style.bottom = '90.4%';
      close.style.visibility = 'visible';
    });

    initSlides(popupSlides, 'popup-slides');
    initSlides(popupSlidesText, 'popup-slides-text');
  });

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('.close') ||
      e.target.className === 'popup popup-portfolio'
    ) {
      popup.style.visibility = 'hidden';
      popupLayout.style.visibility = 'hidden';
      close.style.visibility = 'hidden';
    }
  });

  popupArrow.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
      if (e.target.closest('.popup-arrow_left')) {
        if (currentSlide > 1) {
          prevSlide(popupSlidesBlock, 'popup-slides');
          prevSlide(popupContentBlock, 'popup-slides-text');
          currentSlide--;
          sliderCounterCurrent.innerText = currentSlide;
        }
      }
      if (e.target.closest('.popup-arrow_right')) {
        if (currentSlide < total) {
          nextSlide(popupSlidesBlock, 'popup-slides');
          nextSlide(popupContentBlock, 'popup-slides-text');
          currentSlide++;
          sliderCounterCurrent.innerText = currentSlide;
        }
      }
    });
  });

  if (screen.width < 1024) {
    const container = document.querySelector('.portfolio-slider-mobile');
    const slides = container.querySelectorAll('.portfolio-slider__slide-frame');
    const body = document.querySelector('body');
    const mobileTotalCount = body.querySelector('#mobile-counter__total');
    const mobileCurrentCount = body.querySelector('#mobile-counter__current');

    let currentSlide = 1;
    let totalSlides = slides.length;
    mobileTotalCount.innerText = totalSlides;

    const updateSlides = () => {
      slides.forEach((item, i) => {
        if (i + 1 !== currentSlide) {
          item.classList.add('hidden');
        } else {
          item.classList.remove('hidden');
        }
      });
      mobileCurrentCount.innerText = currentSlide;
    };

    body.addEventListener('click', (e) => {
      if (e.target.closest('#portfolio-arrow-mobile_right')) {
        if (currentSlide < totalSlides) {
          currentSlide++;
          updateSlides();
        } else {
          currentSlide = 1;
          updateSlides();
        }
      }
      if (e.target.closest('#portfolio-arrow-mobile_left')) {
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
export default sliderPortfolio;
