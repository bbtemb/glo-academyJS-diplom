const showMenu = () => {
  const popup = document.querySelector('.popup-menu');
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('.popup-dialog-menu');
  const closeMenu = document.querySelector('.close-menu');
  const body = document.querySelector('body');
  const menuNavList = document.querySelector('.popup-menu-nav__item');
  const buttonFooter = document.querySelector('.button-footer');
  let activeMenu = false;

  const handleMenu = () => {
    popup.classList.toggle('active');
    menu.classList.toggle('active');
    activeMenu = !activeMenu;
  };

  const smoothScroll = (item) => {
    const itemHref = item.getAttribute('href').substr(1);

    document.getElementById(itemHref).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  body.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      handleMenu();
    }

    if (activeMenu && !e.target.closest('.menu')) {
      if (e.target === closeMenu || !e.target.closest('.popup-dialog-menu')) {
        handleMenu();
      }
    }

    if (e.target.closest('.popup-menu-nav__item')) {
      e.preventDefault();
      handleMenu();
      if (e.target.closest('.menu-link')) {
        smoothScroll(e.target);
      } else {
        smoothScroll(e.target.firstElementChild);
      }
    }

    if (e.target.closest('.button-footer')) {
      e.preventDefault();
      smoothScroll(body.querySelector('.button-footer a'));
    }
  });
};

export default showMenu;
