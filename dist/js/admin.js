/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_admin_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/admin/render */ \"./modules/admin/render.js\");\n/* harmony import */ var _modules_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/admin/service */ \"./modules/admin/service.js\");\n/* harmony import */ var _modules_admin_serviceList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/admin/serviceList */ \"./modules/admin/serviceList.js\");\n/* harmony import */ var _modules_admin_addServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/admin/addServices */ \"./modules/admin/addServices.js\");\n/* harmony import */ var _modules_admin_editServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/admin/editServices */ \"./modules/admin/editServices.js\");\n/* harmony import */ var _modules_admin_deleteServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/admin/deleteServices */ \"./modules/admin/deleteServices.js\");\n\n\n\n\n\n\n\nwindow.service = new _modules_admin_service__WEBPACK_IMPORTED_MODULE_1__.Service();\n\nservice.getServices().then((data) => {\n  (0,_modules_admin_render__WEBPACK_IMPORTED_MODULE_0__.render)(data);\n  (0,_modules_admin_serviceList__WEBPACK_IMPORTED_MODULE_2__.serviceList)(data);\n});\n\n(0,_modules_admin_addServices__WEBPACK_IMPORTED_MODULE_3__.addServices)();\n(0,_modules_admin_editServices__WEBPACK_IMPORTED_MODULE_4__.editServices)();\n(0,_modules_admin_deleteServices__WEBPACK_IMPORTED_MODULE_5__.deleteServices)();\n\n\n//# sourceURL=webpack:///./admin.js?");

/***/ }),

/***/ "./modules/admin/addServices.js":
/*!**************************************!*\
  !*** ./modules/admin/addServices.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addServices: () => (/* binding */ addServices)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/admin/render.js\");\n\n\nconst addServices = () => {\n  const body = document.querySelector('body');\n  const button = document.querySelector('.btn-addItem');\n  const modal = document.querySelector('#modal');\n  const modalHeader = modal.querySelector('.modal__header');\n\n  const form = document.querySelector('.modal>form');\n  const typeInput = document.querySelector('#type');\n  const nameInput = document.querySelector('#name');\n  const unitsInput = document.querySelector('#units');\n  const costInput = document.querySelector('#cost');\n  let add = false;\n\n  console.log(form);\n\n  body.addEventListener('click', (e) => {\n    if (e.target.closest('.btn-addItem')) {\n      form.reset();\n      modal.classList.add('active');\n      add = true;\n      modalHeader.innerHTML = 'Добавление новой услуги';\n    }\n\n    if (\n      e.target === modal ||\n      e.target.closest('.button__close') ||\n      e.target.closest('.cancel-button')\n    ) {\n      e.preventDefault();\n      modal.classList.remove('active');\n      form.reset();\n    }\n  });\n\n  modal.addEventListener('click', (e) => {\n    if (add) {\n      if (e.target.closest('.button-ui_firm')) {\n        e.preventDefault();\n        if (!form.dataset.method) {\n          const newService = {\n            id: Math.floor(Math.random() * 10000000000).toString(),\n            type: typeInput.value,\n            name: nameInput.value,\n            units: unitsInput.value,\n            cost: costInput.value,\n          };\n          service.addService(newService).then(() => {\n            service.getServices().then((services) => {\n              (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(services);\n              form.reset();\n            });\n          });\n        }\n        modal.classList.remove('active');\n      }\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/admin/addServices.js?");

/***/ }),

/***/ "./modules/admin/deleteServices.js":
/*!*****************************************!*\
  !*** ./modules/admin/deleteServices.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteServices: () => (/* binding */ deleteServices)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/admin/render.js\");\n\n\nconst deleteServices = () => {\n  const tbody = document.querySelector('#tbody');\n  let id = 0;\n\n  tbody.addEventListener('click', (e) => {\n    if (e.target.closest('.action-remove')) {\n      const tr = e.target.closest('tr');\n      id = tr.querySelector('.table__id').innerText;\n      console.log(id);\n      service.removeService(id).then((res) => {\n        service.getServices().then((services) => {\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(services);\n        });\n      });\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/admin/deleteServices.js?");

/***/ }),

/***/ "./modules/admin/editServices.js":
/*!***************************************!*\
  !*** ./modules/admin/editServices.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editServices: () => (/* binding */ editServices)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/admin/render.js\");\n\n\nconst editServices = () => {\n  const body = document.querySelector('body');\n  const table = document.querySelector('.table__wrapper');\n  const button = document.querySelector('.action-change');\n  const modal = document.querySelector('#modal');\n  const modalHeader = modal.querySelector('.modal__header');\n  const form = document.querySelector('.modal>form');\n  const typeInput = document.querySelector('#type');\n  const nameInput = document.querySelector('#name');\n  const unitsInput = document.querySelector('#units');\n  const costInput = document.querySelector('#cost');\n\n  let id = 0;\n  let change = false;\n\n  tbody.addEventListener('click', (e) => {\n    if (e.target.closest('.action-change')) {\n      modal.classList.add('active');\n      change = true;\n      modalHeader.innerHTML = 'Редактирование услуги';\n      console.log(e.target.closest('tr'));\n      const tr = e.target.closest('tr');\n      id = tr.querySelector('.table__id').innerText;\n\n      console.log(id);\n      service.getService(id).then((item) => {\n        nameInput.value = item.name;\n        typeInput.value = item.type;\n        unitsInput.value = item.units;\n        costInput.value = item.cost;\n      });\n    }\n  });\n\n  modal.addEventListener('click', (e) => {\n    if (change) {\n      if (e.target.closest('.button-ui_firm')) {\n        e.preventDefault();\n\n        const editedService = {\n          type: typeInput.value,\n          name: nameInput.value,\n          units: unitsInput.value,\n          cost: costInput.value,\n        };\n        console.log(editedService);\n        service.editService(id, editedService).then(() => {\n          service.getUsers().then((services) => {\n            (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(services);\n            form.reset();\n            form.removeAttribute('data-method');\n          });\n        });\n        modal.classList.remove('active');\n        change = false;\n      }\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/admin/editServices.js?");

/***/ }),

/***/ "./modules/admin/render.js":
/*!*********************************!*\
  !*** ./modules/admin/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = (services) => {\r\n  const tbody = document.querySelector('#tbody');\r\n  tbody.innerHTML = '';\r\n  services.forEach((service) => {\r\n    tbody.insertAdjacentHTML(\r\n      'beforeend',\r\n      `\r\n    <tr class=\"table__row\">\r\n    <td class=\"table__id table__cell\">${service.id}</td>\r\n    <td class=\"table-type table__cell\">\r\n     ${service.type}\r\n    </td>\r\n    <td class=\"table-name table__cell\">\r\n      ${service.name}\r\n    </td>\r\n    <td class=\"table-units table__cell\">${service.units}</td>\r\n    <td class=\"table-cost table__cell\">${service.cost} руб</td>\r\n    <td>\r\n      <div class=\"table__actions table__cell\">\r\n        <button class=\"button action-change\">\r\n          <span class=\"svg_ui\"\r\n            ><svg class=\"action-icon_change\">\r\n              <use\r\n                xlink:href=\"./img/sprite.svg#change\"\r\n              ></use></svg></span\r\n          ><span>Изменить</span>\r\n        </button>\r\n        <button class=\"button action-remove\">\r\n          <span class=\"svg_ui\"\r\n            ><svg class=\"action-icon_remove\">\r\n              <use\r\n                xlink:href=\"./img/sprite.svg#remove\"\r\n              ></use></svg></span\r\n          ><span>Удалить</span>\r\n        </button>\r\n      </div>\r\n    </td>\r\n  </tr>\r\n`\r\n    );\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/admin/render.js?");

/***/ }),

/***/ "./modules/admin/service.js":
/*!**********************************!*\
  !*** ./modules/admin/service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Service: () => (/* binding */ Service)\n/* harmony export */ });\nclass Service {\n  getServices() {\n    return fetch('http://localhost:3000/services').then((res) => res.json());\n  }\n\n  addService(user) {\n    return fetch('http://localhost:3000/services', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(user),\n    }).then((res) => res.json());\n  }\n\n  removeService(id) {\n    return fetch(`http://localhost:3000/services/${id}`, {\n      method: 'DELETE',\n    }).then((res) => res.json());\n  }\n\n  changeService(id, data) {\n    return fetch(`http://localhost:3000/services/${id}`, {\n      method: 'PATCH',\n      body: JSON.stringify(data),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    }).then((res) => res.json());\n  }\n\n  getService(id) {\n    return fetch(`http://localhost:3000/services/${id}`).then((res) =>\n      res.json()\n    );\n  }\n\n  editService(id, service) {\n    return fetch(`http://localhost:3000/services/${id}`, {\n      method: 'PUT',\n      body: JSON.stringify(service),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    }).then((res) => res.json());\n  }\n\n  filterServices(filterOption, value) {\n    return fetch(\n      `http://localhost:3000/services?${filterOption}=${value}`\n    ).then((res) => res.json());\n  }\n\n  getSortServices(sortOption) {\n    return fetch(\n      `http://localhost:3000/services?_sort=${sortOption.name}&_order=${sortOption.value}`\n    ).then((res) => res.json());\n  }\n  getSearchServices(str) {\n    return fetch(`http://localhost:3000/services?name_like=${str}`).then(\n      (res) => res.json()\n    );\n  }\n}\n\n\n//# sourceURL=webpack:///./modules/admin/service.js?");

/***/ }),

/***/ "./modules/admin/serviceList.js":
/*!**************************************!*\
  !*** ./modules/admin/serviceList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serviceList: () => (/* binding */ serviceList)\n/* harmony export */ });\n/* harmony import */ var _modules_admin_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../modules/admin/render */ \"./modules/admin/render.js\");\n\n\nconst serviceList = (services) => {\n  const serviceList = document.querySelector('#typeItem');\n  let serviceArr = [];\n\n  const renderServiceList = (services) => {\n    services.forEach((service) => {\n      if (!(service.type in serviceArr)) {\n        serviceArr[service.type] = [];\n      }\n      serviceArr[service.type].push(service);\n    });\n\n    Object.keys(serviceArr).forEach((key) => {\n      const option = document.createElement('option');\n      option.innerHTML = `${key}`;\n      serviceList.appendChild(option);\n    });\n  };\n  renderServiceList(services);\n\n  serviceList.addEventListener('change', (e) => {\n    const type = e.target.value;\n    console.log(type);\n    if (type === 'Все услуги') {\n      (0,_modules_admin_render__WEBPACK_IMPORTED_MODULE_0__.render)(services);\n      return;\n    }\n    service.filterServices('type', type).then((fileterServices) => {\n      (0,_modules_admin_render__WEBPACK_IMPORTED_MODULE_0__.render)(fileterServices);\n    });\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/admin/serviceList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./admin.js");
/******/ 	
/******/ })()
;