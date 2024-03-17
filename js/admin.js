(()=>{"use strict";const e=e=>{const t=document.querySelector("#tbody");t.innerHTML="",e.forEach((e=>{t.insertAdjacentHTML("beforeend",`\n    <tr class="table__row">\n    <td class="table__id table__cell">${e.id}</td>\n    <td class="table-type table__cell">\n     ${e.type}\n    </td>\n    <td class="table-name table__cell">\n      ${e.name}\n    </td>\n    <td class="table-units table__cell">${e.units}</td>\n    <td class="table-cost table__cell">${e.cost} руб</td>\n    <td>\n      <div class="table__actions table__cell">\n        <button class="button action-change">\n          <span class="svg_ui"\n            ><svg class="action-icon_change">\n              <use\n                xlink:href="./img/sprite.svg#change"\n              ></use></svg></span\n          ><span>Изменить</span>\n        </button>\n        <button class="button action-remove">\n          <span class="svg_ui"\n            ><svg class="action-icon_remove">\n              <use\n                xlink:href="./img/sprite.svg#remove"\n              ></use></svg></span\n          ><span>Удалить</span>\n        </button>\n      </div>\n    </td>\n  </tr>\n`)}))};window.service=new class{getServices(){return fetch("http://localhost:3000/services").then((e=>e.json()))}addService(e){return fetch("http://localhost:3000/services",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json()))}removeService(e){return fetch(`http://localhost:3000/services/${e}`,{method:"DELETE"}).then((e=>e.json()))}changeService(e,t){return fetch(`http://localhost:3000/services/${e}`,{method:"PATCH",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}getService(e){return fetch(`http://localhost:3000/services/${e}`).then((e=>e.json()))}editService(e,t){return fetch(`http://localhost:3000/services/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}filterServices(e,t){return fetch(`http://localhost:3000/services?${e}=${t}`).then((e=>e.json()))}getSortServices(e){return fetch(`http://localhost:3000/services?_sort=${e.name}&_order=${e.value}`).then((e=>e.json()))}getSearchServices(e){return fetch(`http://localhost:3000/services?name_like=${e}`).then((e=>e.json()))}},"true"===function(e){const t=document.cookie.split(";");for(let n=0;n<t.length;n++){let c=t[n].trim();if(c.startsWith(`${e}=`))return c.substring(5)}return""}("auth")||(window.location.href=window.location.origin+"/admin/"),service.getServices().then((t=>{e(t),(t=>{const n=document.querySelector("#typeItem");let c=[];(e=>{e.forEach((e=>{e.type in c||(c[e.type]=[]),c[e.type].push(e)})),Object.keys(c).forEach((e=>{const t=document.createElement("option");t.innerHTML=`${e}`,n.appendChild(t)}))})(t),n.addEventListener("change",(n=>{const c=n.target.value;"Все услуги"!==c?service.filterServices("type",c).then((t=>{e(t)})):e(t)}))})(t)})),(()=>{const t=document.querySelector("body"),n=(document.querySelector(".btn-addItem"),document.querySelector("#modal")),c=n.querySelector(".modal__header"),s=document.querySelector(".modal>form"),r=document.querySelector("#type"),o=document.querySelector("#name"),a=document.querySelector("#units"),l=document.querySelector("#cost");let i=!1;t.addEventListener("click",(e=>{e.target.closest(".btn-addItem")&&(s.reset(),n.classList.add("active"),i=!0,c.innerHTML="Добавление новой услуги"),(e.target===n||e.target.closest(".button__close")||e.target.closest(".cancel-button"))&&(e.preventDefault(),n.classList.remove("active"),s.reset())})),n.addEventListener("click",(t=>{if(i&&t.target.closest(".button-ui_firm")){if(t.preventDefault(),!s.dataset.method){const t={id:Math.floor(1e10*Math.random()).toString(),type:r.value,name:o.value,units:a.value,cost:l.value};service.addService(t).then((()=>{service.getServices().then((t=>{e(t),s.reset()}))}))}n.classList.remove("active"),i=!1}}))})(),(()=>{document.querySelector("body"),document.querySelector(".table__wrapper"),document.querySelector(".action-change");const t=document.querySelector("#modal"),n=t.querySelector(".modal__header"),c=document.querySelector(".modal>form"),s=document.querySelector("#type"),r=document.querySelector("#name"),o=document.querySelector("#units"),a=document.querySelector("#cost");let l=0,i=!1;tbody.addEventListener("click",(e=>{if(e.target.closest(".action-change")){t.classList.add("active"),i=!0,n.innerHTML="Редактирование услуги";const c=e.target.closest("tr");l=c.querySelector(".table__id").innerText,service.getService(l).then((e=>{r.value=e.name,s.value=e.type,o.value=e.units,a.value=e.cost}))}})),t.addEventListener("click",(n=>{if(i&&n.target.closest(".button-ui_firm")){n.preventDefault();const u={type:s.value,name:r.value,units:o.value,cost:a.value};service.editService(l,u).then((()=>{service.getServices().then((t=>{e(t),c.reset(),c.removeAttribute("data-method")}))})),t.classList.remove("active"),i=!1}}))})(),(()=>{const t=document.querySelector("#tbody");let n=0;t.addEventListener("click",(t=>{if(t.target.closest(".action-remove")){const c=t.target.closest("tr");n=c.querySelector(".table__id").innerText,service.removeService(n).then((t=>{service.getServices().then((t=>{e(t)}))}))}}))})()})();