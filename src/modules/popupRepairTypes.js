const popupRepairTypes = () => {
  const popup = document.querySelector('.popup-repair-types');
  const body = document.querySelector('body');
  const navList = document.querySelector('.nav-list-popup-repair');
  const tableContainer = document.querySelector(
    '.popup-repair-types-content-table'
  );
  let newArrays = {};
  let dataArr = [];
  let popupRepairTypesActive = false;

  const fetchData = () => {
    return fetch('http://localhost:3000/services')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error('Произошла ошибка при загрузке данных:', error);
        return [];
      });
  };

  const sortData = () => {
    dataArr.forEach((item) => {
      if (!(item.type in newArrays)) {
        newArrays[item.type] = [];
      }
      newArrays[item.type].push(item);
    });
    return newArrays;
  };

  const renderBlocks = (newArrays) => {
    Object.keys(newArrays).forEach((key) => {
      const button = document.createElement('button');
      button.classList.add('button_o', 'popup-repair-types-nav__item');
      button.innerHTML = `${key}`;
      navList.appendChild(button);

      const table = document.createElement('table');
      const tbody = document.createElement('tbody');
      table.classList.add('popup-repair-types-content-table__list');
      table.setAttribute('id', `${key}`);
      tableContainer.appendChild(table);
      table.appendChild(tbody);

      newArrays[key].forEach((item) => {
        const row = document.createElement('tr');
        row.classList.add('mobile-row');
        row.innerHTML = `<tr class="mobile-row">
        <td class="repair-types-name">
          ${item.name}
        </td>
        <td class="mobile-col-title tablet-hide desktop-hide">
          Ед.измерения
        </td>
        <td class="mobile-col-title tablet-hide desktop-hide">
          Цена за ед.
        </td>
        <td class="repair-types-value">${item.units}</td>
        <td class="repair-types-value">${item.cost} руб.</td>
      </tr>`;
        tbody.appendChild(row);
      });
    });
  };

  body.addEventListener('click', (e) => {
    if (e.target.closest('.link-price')) {
      popup.style.visibility = 'visible';
      popupRepairTypesActive = !popupRepairTypesActive;
    }

    if (popupRepairTypesActive) {
      if (
        e.target.closest('.close') ||
        e.target.className === 'popup popup-repair-types'
      ) {
        popup.style.visibility = 'hidden';
        popupRepairTypesActive = !popupRepairTypesActive;
        console.log(popupRepairTypesActive);
      }
    }
  });

  fetchData().then((data) => {
    dataArr = data;
    sortData();
    renderBlocks(newArrays);

    const buttons = document.querySelectorAll('.popup-repair-types-nav__item');
    const tables = document.querySelectorAll(
      '.popup-repair-types-content-table__list'
    );
    const title = document.querySelector('#switch-inner');

    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        buttons.forEach((item) => {
          item.classList.remove('active');
        });
        tables.forEach((table) => {
          if (table.id === e.target.textContent) {
            table.classList.remove('hidden');
          } else {
            table.classList.add('hidden');
          }
        });
        e.target.classList.add('active');
        title.textContent = e.target.textContent;
      });
    });
  });
};

export default popupRepairTypes;
