const auth = () => {
  const name = document.querySelector('#name');
  const nameWarning = document.querySelector('#name-warning');
  const password = document.querySelector('#password');
  const passwordWarning = document.querySelector('#password-warning');
  const button = document.querySelector('.button-ui_firm');
  const form = document.querySelector('form');

  const fetchData = () => {
    return fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error('Произошла ошибка при загрузке данных:', error);
        return [];
      });
  };

  const submitForm = () => {
    if (name.value && password.value) {
      fetchData().then((data) => {
        data.forEach((item) => {
          nameWarning.classList.remove('active');
          passwordWarning.classList.remove('active');
          if (item.name === name.value && item.password === password.value) {
            document.cookie = 'auth=true';
            document.cookie = `name=${name.value}`;
            document.cookie = `password=${password.value}`;
            window.location.href = '/admin/table.html';
          } else if (
            item.name !== name.value &&
            item.password !== password.value
          ) {
            nameWarning.classList.add('active');
            passwordWarning.classList.add('active');
          } else if (item.name !== name.value) {
            nameWarning.classList.add('active');
          } else if (item.password !== password.value) {
            passwordWarning.classList.add('active');
          }
        });
      });
    }
  };

  button.addEventListener('click', (e) => {
    e.preventDefault();
    submitForm();
  });
};

auth();
