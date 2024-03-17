export class Service {
  getServices() {
    return fetch('http://localhost:3000/services').then((res) => res.json());
  }

  addService(user) {
    return fetch('http://localhost:3000/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  }

  removeService(id) {
    return fetch(`http://localhost:3000/services/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }

  changeService(id, data) {
    return fetch(`http://localhost:3000/services/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }

  getService(id) {
    return fetch(`http://localhost:3000/services/${id}`).then((res) =>
      res.json()
    );
  }

  editService(id, service) {
    return fetch(`http://localhost:3000/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(service),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }

  filterServices(filterOption, value) {
    return fetch(
      `http://localhost:3000/services?${filterOption}=${value}`
    ).then((res) => res.json());
  }

  getSortServices(sortOption) {
    return fetch(
      `http://localhost:3000/services?_sort=${sortOption.name}&_order=${sortOption.value}`
    ).then((res) => res.json());
  }
  getSearchServices(str) {
    return fetch(`http://localhost:3000/services?name_like=${str}`).then(
      (res) => res.json()
    );
  }
}
