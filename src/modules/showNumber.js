const showNumber = () => {
  const phoneAccord = document.querySelector(
    '.header-contacts__phone-number-accord .header-contacts__phone-number'
  );
  const messagers = document.querySelector('.header-contacts__messagers');
  const pnoneArrow = document.querySelector('.header-contacts__arrow');

  pnoneArrow.addEventListener('click', () => {
    phoneAccord.classList.toggle('active');
    messagers.classList.toggle('active');
    pnoneArrow.classList.toggle('active');
  });
};
export default showNumber;
