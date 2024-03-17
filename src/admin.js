import { render } from './modules/admin/render';
import { Service } from './modules/admin/service';
import { serviceList } from './modules/admin/serviceList';
import { addServices } from './modules/admin/addServices';
import { editServices } from './modules/admin/editServices';
import { deleteServices } from './modules/admin/deleteServices';
import { checkAuth } from './modules/admin/checkAuth';

window.service = new Service();

checkAuth();

service.getServices().then((data) => {
  render(data);
  serviceList(data);
});

addServices();
editServices();
deleteServices();
