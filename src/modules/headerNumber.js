const headerNumber = () => {
  const phoneAccord = document.querySelector(
    '.header-contacts__phone-number-accord .header-contacts__phone-number'
  );
  const messagers = document.querySelector('.header-contacts__messagers');
  const phoneArrow = document.querySelector('.header-contacts__arrow');

  phoneArrow.addEventListener('click', () => {
    phoneAccord.classList.toggle('active');
    messagers.classList.toggle('active');
    phoneArrow.classList.toggle('active');
  });
};
export default headerNumber;
