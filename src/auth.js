const auth = () => {
  const name = document.querySelector('#name');
  const password = document.querySelector('#password');
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

  function authenticateUser(username, password) {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
  }
  const submitForm = () => {
    if (name.value && password.value) {
      fetchData().then((data) => {
        data.forEach((item) => {
          if (item.name === name.value && item.password === password.value) {
            console.log('Вход выполнен');
          } else if (
            item.name !== name.value &&
            item.password !== password.value
          ) {
            console.log('Неверное имя и пароль');
          } else if (item.name !== name.value) {
            console.log('Неверное имя');
          } else if (item.password !== password.value) {
            console.log('Неверное имя');
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
