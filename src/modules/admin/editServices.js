import { render } from './render';

export const editServices = () => {
  const body = document.querySelector('body');
  const table = document.querySelector('.table__wrapper');
  const button = document.querySelector('.action-change');
  const modal = document.querySelector('#modal');
  const modalHeader = modal.querySelector('.modal__header');
  const form = document.querySelector('.modal>form');
  const typeInput = document.querySelector('#type');
  const nameInput = document.querySelector('#name');
  const unitsInput = document.querySelector('#units');
  const costInput = document.querySelector('#cost');

  let id = 0;
  let change = false;

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('.action-change')) {
      modal.classList.add('active');
      change = true;
      modalHeader.innerHTML = 'Редактирование услуги';
      const tr = e.target.closest('tr');
      id = tr.querySelector('.table__id').innerText;

      service.getService(id).then((item) => {
        nameInput.value = item.name;
        typeInput.value = item.type;
        unitsInput.value = item.units;
        costInput.value = item.cost;
      });
    }
  });

  modal.addEventListener('click', (e) => {
    if (change) {
      if (e.target.closest('.button-ui_firm')) {
        e.preventDefault();

        const editedService = {
          type: typeInput.value,
          name: nameInput.value,
          units: unitsInput.value,
          cost: costInput.value,
        };
        service.editService(id, editedService).then(() => {
          service.getServices().then((services) => {
            render(services);
            form.reset();
            form.removeAttribute('data-method');
          });
        });
        modal.classList.remove('active');
        change = false;
      }
    }
  });
};
