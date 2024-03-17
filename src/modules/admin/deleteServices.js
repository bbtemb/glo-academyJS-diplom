import { render } from './render';

export const deleteServices = () => {
  const tbody = document.querySelector('#tbody');
  let id = 0;

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('.action-remove')) {
      const tr = e.target.closest('tr');
      id = tr.querySelector('.table__id').innerText;
      service.removeService(id).then((res) => {
        service.getServices().then((services) => {
          render(services);
        });
      });
    }
  });
};
