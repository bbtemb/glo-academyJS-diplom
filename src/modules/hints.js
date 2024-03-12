const hints = () => {
  const formulaItems = document.querySelectorAll('.formula-item');
  formulaItems.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      const popup = item.querySelector('.formula-item-popup');
      popup.classList.add('active');
    });
    item.addEventListener('mouseleave', (e) => {
      const popup = item.querySelector('.formula-item-popup');
      popup.classList.remove('active');
    });
  });

  // const popup1 = item.querySelector('.formula-item-popup-01');

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    var threshold = 0.7;

    return !(
      rect.bottom < 0 ||
      rect.top > viewHeight ||
      rect.height * threshold > viewHeight
    );
  }

  function addClassIfInView(element, classToAdd) {
    if (isElementInViewport(element)) {
      element.classList.remove(classToAdd);
    } else {
      element.classList.add(classToAdd);
    }
  }

  // Пример использования
  var element = document.querySelector('.formula-item-popup-01');

  window.addEventListener('scroll', function () {
    addClassIfInView(element, 'moved');
  });
};

export default hints;
