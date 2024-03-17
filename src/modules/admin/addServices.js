import { render } from './render';

export const addServices = () => {
  const body = document.querySelector('body');
  const button = document.querySelector('.btn-addItem');
  const modal = document.querySelector('#modal');
  const modalHeader = modal.querySelector('.modal__header');

  const form = document.querySelector('.modal>form');
  const typeInput = document.querySelector('#type');
  const nameInput = document.querySelector('#name');
  const unitsInput = document.querySelector('#units');
  const costInput = document.querySelector('#cost');
  let add = false;

  body.addEventListener('click', (e) => {
    if (e.target.closest('.btn-addItem')) {
      form.reset();
      modal.classList.add('active');
      add = true;
      modalHeader.innerHTML = 'Добавление новой услуги';
    }

    if (
      e.target === modal ||
      e.target.closest('.button__close') ||
      e.target.closest('.cancel-button')
    ) {
      e.preventDefault();
      modal.classList.remove('active');
      form.reset();
    }
  });

  modal.addEventListener('click', (e) => {
    if (add) {
      if (e.target.closest('.button-ui_firm')) {
        e.preventDefault();
        if (!form.dataset.method) {
          const newService = {
            id: Math.floor(Math.random() * 10000000000).toString(),
            type: typeInput.value,
            name: nameInput.value,
            units: unitsInput.value,
            cost: costInput.value,
          };
          service.addService(newService).then(() => {
            service.getServices().then((services) => {
              render(services);
              form.reset();
            });
          });
        }
        modal.classList.remove('active');
        add = false;
      }
    }
  });
};
