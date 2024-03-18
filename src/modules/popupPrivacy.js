const popupPrivacy = () => {
  const popup = document.querySelector('.popup-privacy');
  const body = document.querySelector('body');
  let popupPrivacy = false;

  body.addEventListener('click', (e) => {
    if (e.target.closest('span.link-privacy')) {
      popup.style.visibility = 'visible';
      popupPrivacy = !popupPrivacy;
    }

    if (popupPrivacy) {
      if (
        e.target.closest('.close') ||
        e.target.className === 'popup popup-privacy'
      ) {
        popup.style.visibility = 'hidden';
        popupPrivacy = !popupPrivacy;
      }
    }
  });
};

export default popupPrivacy;
