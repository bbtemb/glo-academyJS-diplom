export const checkAuth = () => {
  function getCookieValue(cookieName) {
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.startsWith(`${cookieName}=`)) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    return '';
  }

  if (getCookieValue('auth') === 'true') {
  } else {
    window.location.href = window.location.origin + '/admin/';
  }
};
