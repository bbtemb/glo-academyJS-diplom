const sendForm = (formId) => {
  const sendData = (data) =>
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json());

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;

    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    sendData(formBody);
  };

  try {
    if (!form) {
      throw new Error('Форма не найдена');
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
