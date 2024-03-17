import { render } from '/modules/admin/render';

export const serviceList = (services) => {
  const serviceList = document.querySelector('#typeItem');
  let serviceArr = [];

  const renderServiceList = (services) => {
    services.forEach((service) => {
      if (!(service.type in serviceArr)) {
        serviceArr[service.type] = [];
      }
      serviceArr[service.type].push(service);
    });

    Object.keys(serviceArr).forEach((key) => {
      const option = document.createElement('option');
      option.innerHTML = `${key}`;
      serviceList.appendChild(option);
    });
  };
  renderServiceList(services);

  serviceList.addEventListener('change', (e) => {
    const type = e.target.value;
    console.log(type);
    if (type === 'Все услуги') {
      render(services);
      return;
    }
    service.filterServices('type', type).then((fileterServices) => {
      render(fileterServices);
    });
  });
};
