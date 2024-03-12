const sendForm = (formId) => {
  const form = document.getElementById(formId);
  const checkbox = form.querySelector('.checkbox__input');
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.innerHTML = '<p>Ознакомьтесь с политикой конфиденциальности</p>';

  const sendData = (data) =>
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json());

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((value, key) => {
      formBody[key] = value;
    });
    console.log(formBody);

    sendData(formBody);
  };

  try {
    if (!form) {
      throw new Error('Форма не найдена');
    }
    checkbox.addEventListener('change', () => {
      errorMessage.classList.add('hide');
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (checkbox.checked) {
        submitForm();
        form.reset();
      } else {
        form.append(errorMessage);
        errorMessage.classList.remove('hide');
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
