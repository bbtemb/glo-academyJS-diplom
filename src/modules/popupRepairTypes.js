const popupRepairTypes = () => {
  const popup = document.querySelector('.popup-repair-types');
  const body = document.querySelector('body');
  let popupRepairTypesActive = false;

  body.addEventListener('click', (e) => {
    if (e.target.closest('.link-price')) {
      popup.style.visibility = 'visible';
      popupRepairTypesActive = !popupRepairTypesActive;
      console.log(popupRepairTypesActive);
    }

    if (popupRepairTypesActive) {
      console.dir(e.target);
      if (
        e.target.closest('.close') ||
        e.target.className === 'popup popup-repair-types'
      ) {
        popup.style.visibility = 'hidden';
        popupRepairTypesActive = !popupRepairTypesActive;
        console.log(popupRepairTypesActive);
      }
    }
  });
};

export default popupRepairTypes;
