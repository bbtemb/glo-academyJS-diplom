const popupConsultation = () => {
  const popup = document.querySelector('.popup-consultation');
  const body = document.querySelector('body');
  let popupConsultation = false;

  body.addEventListener('click', (e) => {
    if (e.target.closest('button.consultation')) {
      popup.style.visibility = 'visible';
      popupConsultation = true;
    }

    if (popupConsultation) {
      if (
        e.target.closest('.close') ||
        e.target.className === 'popup popup-consultation'
      ) {
        popup.style.visibility = 'hidden';
        popupConsultation = false;
      }
    }
  });
};

export default popupConsultation;
