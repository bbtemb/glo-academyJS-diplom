const sliderRepairTypes = () => {
  const slider1 = document.querySelector('.types-repair1');
  const slider2 = document.querySelector('.types-repair2');
  const slider3 = document.querySelector('.types-repair3');
  const slider4 = document.querySelector('.types-repair4');
  const slider5 = document.querySelector('.types-repair5');

  let sliderBlock = document.querySelector(`.types-repair1`);
  let arrowRight = document.getElementById('repair-types-arrow_right');
  let arrowLeft = document.getElementById('repair-types-arrow_left');
  let slides = sliderBlock.querySelectorAll('.repair-types-slider__slide');
  let countCurrent = document.querySelector('.slider-counter-content__current');
  let currentSlider = 1;
  let total = 0;

  let obj = {
    curSlide1: 0,
    curSlide2: 0,
    curSlide3: 0,
    curSlide4: 0,
    curSlide5: 0,
  };

  const updateSlider = (id) => {
    sliderBlock = document.querySelector(`.types-repair${id}`);
    countCurrent = document.querySelector('.slider-counter-content__current');
    const countTotal = document.querySelector('.slider-counter-content__total');
    slides = sliderBlock.querySelectorAll('.repair-types-slider__slide');
    countCurrent.innerHTML = obj[`curSlide${id}`] + 1;
    total = slides.length - 1;
    countTotal.innerHTML = slides.length;
    arrowRight = document.getElementById('repair-types-arrow_right');
    arrowLeft = document.getElementById('repair-types-arrow_left');
  };

  const nextSlide = (id) => {
    console.log(obj[`curSlide${id}`]);
    if (obj[`curSlide${id}`] < total) {
      sliderBlock.prepend(slides[obj[`curSlide${id}`] + 1]);
      obj[`curSlide${id}`] = obj[`curSlide${id}`] + 1;
      slides = sliderBlock.querySelectorAll('.repair-types-slider__slide');
      countCurrent.innerHTML = obj[`curSlide${id}`] + 1;
    }
  };
  const prevSlide = (id) => {
    if (obj[`curSlide${id}`] > 0) {
      sliderBlock.append(slides[0]);
      obj[`curSlide${id}`] = obj[`curSlide${id}`] - 1;
      slides = sliderBlock.querySelectorAll('.repair-types-slider__slide');
      countCurrent.innerHTML = countCurrent.innerHTML - 1;
    }
  };

  const sliderSwitch = () => {
    const sliderTypesBlock = document.querySelector('.repair-types-slider');
    let sliderTypesList = sliderTypesBlock.querySelectorAll(
      '.repair-types-slider>div'
    );
    const repairList = document.querySelectorAll('.repair-types-nav__item');
    let sliderId = '';
    sliderTypesList.forEach((item, index) => {
      item.getAttribute(`id` + index + 1);
    });

    repairList.forEach((item) => {
      item.addEventListener('click', (e) => {
        repairList.forEach((item) => {
          item.classList.remove('active');
        });
        e.target.classList.add('active');
        if (item.classList.contains('active')) {
          sliderId = e.target.getAttribute('id');
        }
        currentSlider = sliderId.toString().slice(-1);

        updateSlider(currentSlider);

        sliderTypesBlock.prepend(sliderBlock);
        sliderTypesList = sliderTypesBlock.querySelectorAll(
          '.repair-types-slider>div'
        );
        console.log(sliderTypesList);
      });
    });
  };

  sliderSwitch();
  updateSlider(currentSlider);

  arrowLeft.addEventListener('click', (e) => {
    prevSlide(currentSlider);
    console.log(obj);
  });
  arrowRight.addEventListener('click', (e) => {
    nextSlide(currentSlider);
    console.log(obj);
  });
};
export default sliderRepairTypes;
