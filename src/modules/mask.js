const mask = () => {
  const phoneInputs = document.querySelectorAll(
    '#feedback-input1, #feedback-input2, #feedback-input3, #feedback-input4, #feedback-input5, #feedback-input6'
  );

  const prefixNumber = (str) => {
    if (str === '7') {
      return '+7 (';
    }
    if (str === '9') {
      return '+7 (9';
    }
    return '+7 (';
  };

  phoneInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      const value = input.value.replace(/\D+/g, '');
      const numberLength = 11;

      let result = '';

      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[i];
      }

      input.value = result;
    });
  });
};

export default mask;
