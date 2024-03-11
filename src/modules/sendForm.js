const sendForm = ({ formId, someElem = [] }) => {
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

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });
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
