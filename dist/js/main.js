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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerNumber */ \"./modules/headerNumber.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_popupRepairTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popupRepairTypes */ \"./modules/popupRepairTypes.js\");\n/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ \"./modules/mask.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_popupPrivacy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popupPrivacy */ \"./modules/popupPrivacy.js\");\n/* harmony import */ var _modules_hints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/hints */ \"./modules/hints.js\");\n/* harmony import */ var _modules_sliderRepairTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sliderRepairTypes */ \"./modules/sliderRepairTypes.js\");\n/* harmony import */ var _modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sliderPortfolio */ \"./modules/sliderPortfolio.js\");\n/* harmony import */ var _modules_popupTransparency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/popupTransparency */ \"./modules/popupTransparency.js\");\n/* harmony import */ var _modules_popupConsultation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/popupConsultation */ \"./modules/popupConsultation.js\");\n/* harmony import */ var _modules_sliderReviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/sliderReviews */ \"./modules/sliderReviews.js\");\n/* harmony import */ var _modules_faqAccordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/faqAccordion */ \"./modules/faqAccordion.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_headerNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_popupRepairTypes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_popupPrivacy__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n// hints();\r\n(0,_modules_sliderRepairTypes__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_sliderPortfolio__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_popupTransparency__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_popupConsultation__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n(0,_modules_sliderReviews__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\r\n(0,_modules_faqAccordion__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\r\n\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('feedback1');\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('feedback2');\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('feedback3');\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('feedback4');\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('feedback5');\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('feedback6');\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/faqAccordion.js":
/*!*********************************!*\
  !*** ./modules/faqAccordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst faqAccordion = () => {\n  const accordion = document.querySelector('.accordion');\n  const titleBlocks = document.querySelectorAll('h2.title_block');\n\n  titleBlocks.forEach((item) => {\n    item.addEventListener('click', (e) => {\n      titleBlocks.forEach((item) => {\n        if (item.classList.contains('msg-active')) {\n          item.classList.remove('msg-active');\n        }\n      });\n      e.target.classList.toggle('msg-active');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (faqAccordion);\n\n\n//# sourceURL=webpack:///./modules/faqAccordion.js?");

/***/ }),

/***/ "./modules/headerNumber.js":
/*!*********************************!*\
  !*** ./modules/headerNumber.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerNumber = () => {\r\n  const phoneAccord = document.querySelector(\r\n    '.header-contacts__phone-number-accord .header-contacts__phone-number'\r\n  );\r\n  const messagers = document.querySelector('.header-contacts__messagers');\r\n  const phoneArrow = document.querySelector('.header-contacts__arrow');\r\n\r\n  phoneArrow.addEventListener('click', () => {\r\n    phoneAccord.classList.toggle('active');\r\n    messagers.classList.toggle('active');\r\n    phoneArrow.classList.toggle('active');\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerNumber);\r\n\n\n//# sourceURL=webpack:///./modules/headerNumber.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate),\n/* harmony export */   showPopup: () => (/* binding */ showPopup)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\n  const start = performance.now();\n\n  requestAnimationFrame(function animate(time) {\n    // timeFraction изменяется от 0 до 1\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    // вычисление текущего состояния анимации\n    const progress = timing(timeFraction);\n\n    draw(progress); // отрисовать её\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    }\n  });\n};\n\nconst showPopup = () => {\n  const popup = document.querySelector('.popup');\n  popup.classList.add('active');\n};\n\n\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/hints.js":
/*!**************************!*\
  !*** ./modules/hints.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst hints = () => {\r\n  const formulaItems = document.querySelectorAll('.formula-item');\r\n  formulaItems.forEach((item) => {\r\n    item.addEventListener('mouseenter', (e) => {\r\n      const popup = item.querySelector('.formula-item-popup');\r\n      popup.classList.add('active');\r\n    });\r\n    item.addEventListener('mouseleave', (e) => {\r\n      const popup = item.querySelector('.formula-item-popup');\r\n      popup.classList.remove('active');\r\n    });\r\n  });\r\n\r\n  // const popup1 = item.querySelector('.formula-item-popup-01');\r\n\r\n  function isElementInViewport(el) {\r\n    var rect = el.getBoundingClientRect();\r\n    var viewHeight = Math.max(\r\n      document.documentElement.clientHeight,\r\n      window.innerHeight\r\n    );\r\n    var threshold = 0.7;\r\n\r\n    return !(\r\n      rect.bottom < 0 ||\r\n      rect.top > viewHeight ||\r\n      rect.height * threshold > viewHeight\r\n    );\r\n  }\r\n\r\n  function addClassIfInView(element, classToAdd) {\r\n    if (isElementInViewport(element)) {\r\n      element.classList.remove(classToAdd);\r\n    } else {\r\n      element.classList.add(classToAdd);\r\n    }\r\n  }\r\n\r\n  // Пример использования\r\n  var element = document.querySelector('.formula-item-popup-01');\r\n\r\n  window.addEventListener('scroll', function () {\r\n    addClassIfInView(element, 'moved');\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hints);\r\n\n\n//# sourceURL=webpack:///./modules/hints.js?");

/***/ }),

/***/ "./modules/mask.js":
/*!*************************!*\
  !*** ./modules/mask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mask = () => {\n  const phoneInputs = document.querySelectorAll(\n    '#feedback-input1, #feedback-input2, #feedback-input3, #feedback-input4, #feedback-input5, #feedback-input6'\n  );\n\n  const prefixNumber = (str) => {\n    if (str === '7') {\n      return '+7 (';\n    }\n    if (str === '9') {\n      return '+7 (9';\n    }\n    return '+7 (';\n  };\n\n  phoneInputs.forEach((input) => {\n    input.addEventListener('input', (e) => {\n      const value = input.value.replace(/\\D+/g, '');\n      const numberLength = 11;\n\n      let result = '';\n\n      for (let i = 0; i < value.length && i < numberLength; i++) {\n        switch (i) {\n          case 0:\n            result += prefixNumber(value[i]);\n            continue;\n          case 4:\n            result += ') ';\n            break;\n          case 7:\n            result += '-';\n            break;\n          case 9:\n            result += '-';\n            break;\n          default:\n            break;\n        }\n        result += value[i];\n      }\n\n      input.value = result;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);\n\n\n//# sourceURL=webpack:///./modules/mask.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const popup = document.querySelector('.popup-menu');\r\n  const menuBlock = document.querySelector('.popup-dialog-menu');\r\n  const closeMenu = document.querySelector('.close-menu');\r\n  const body = document.querySelector('body');\r\n  let activeMenu = false;\r\n\r\n  const handleMenu = () => {\r\n    popup.classList.toggle('active');\r\n    menuBlock.classList.toggle('active');\r\n    activeMenu = !activeMenu;\r\n  };\r\n\r\n  const smoothScroll = (item) => {\r\n    const itemHref = item.getAttribute('href').substr(1);\r\n\r\n    document.getElementById(itemHref).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start',\r\n    });\r\n  };\r\n\r\n  body.addEventListener('click', (e) => {\r\n    if (e.target.closest('.menu')) {\r\n      handleMenu();\r\n    }\r\n\r\n    if (e.target.closest('.link-price') && activeMenu) {\r\n      handleMenu();\r\n    }\r\n\r\n    if (activeMenu && !e.target.closest('.menu')) {\r\n      if (e.target === closeMenu || !e.target.closest('.popup-dialog-menu')) {\r\n        handleMenu();\r\n      }\r\n    }\r\n\r\n    if (e.target.closest('.popup-menu-nav__item')) {\r\n      e.preventDefault();\r\n      handleMenu();\r\n      if (e.target.closest('.menu-link')) {\r\n        smoothScroll(e.target);\r\n      } else {\r\n        smoothScroll(e.target.firstElementChild);\r\n      }\r\n    }\r\n\r\n    if (e.target.closest('.button-footer')) {\r\n      e.preventDefault();\r\n      smoothScroll(body.querySelector('.button-footer a'));\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/popupConsultation.js":
/*!**************************************!*\
  !*** ./modules/popupConsultation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupConsultation = () => {\n  const popup = document.querySelector('.popup-consultation');\n  const body = document.querySelector('body');\n  let popupConsultation = false;\n\n  body.addEventListener('click', (e) => {\n    if (e.target.closest('button.consultation')) {\n      popup.style.visibility = 'visible';\n      popupConsultation = true;\n    }\n\n    if (popupConsultation) {\n      console.dir(e.target);\n      if (\n        e.target.closest('.close') ||\n        e.target.className === 'popup popup-consultation'\n      ) {\n        popup.style.visibility = 'hidden';\n        popupConsultation = false;\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupConsultation);\n\n\n//# sourceURL=webpack:///./modules/popupConsultation.js?");

/***/ }),

/***/ "./modules/popupPrivacy.js":
/*!*********************************!*\
  !*** ./modules/popupPrivacy.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupPrivacy = () => {\n  const popup = document.querySelector('.popup-privacy');\n  const body = document.querySelector('body');\n  let popupPrivacy = false;\n\n  body.addEventListener('click', (e) => {\n    if (e.target.closest('span.link-privacy')) {\n      popup.style.visibility = 'visible';\n      popupPrivacy = !popupPrivacy;\n      console.log(popupPrivacy);\n    }\n\n    if (popupPrivacy) {\n      console.dir(e.target);\n      if (\n        e.target.closest('.close') ||\n        e.target.className === 'popup popup-privacy'\n      ) {\n        popup.style.visibility = 'hidden';\n        popupPrivacy = !popupPrivacy;\n        console.log(popupPrivacy);\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupPrivacy);\n\n\n//# sourceURL=webpack:///./modules/popupPrivacy.js?");

/***/ }),

/***/ "./modules/popupRepairTypes.js":
/*!*************************************!*\
  !*** ./modules/popupRepairTypes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupRepairTypes = () => {\n  const popup = document.querySelector('.popup-repair-types');\n  const body = document.querySelector('body');\n  const navList = document.querySelector('.nav-list-popup-repair');\n  const tableContainer = document.querySelector(\n    '.popup-repair-types-content-table'\n  );\n  let newArrays = {};\n  let dataArr = [];\n  let popupRepairTypesActive = false;\n\n  const fetchData = () => {\n    return fetch('http://localhost:3000/services')\n      .then((response) => response.json())\n      .then((data) => {\n        console.log(data);\n        return data;\n      })\n      .catch((error) => {\n        console.error('Произошла ошибка при загрузке данных:', error);\n        return [];\n      });\n  };\n\n  const sortData = () => {\n    dataArr.forEach((item) => {\n      if (!(item.type in newArrays)) {\n        newArrays[item.type] = [];\n      }\n      newArrays[item.type].push(item);\n    });\n    return newArrays;\n  };\n\n  const renderBlocks = (newArrays) => {\n    Object.keys(newArrays).forEach((key) => {\n      const button = document.createElement('button');\n      button.classList.add('button_o', 'popup-repair-types-nav__item');\n      button.innerHTML = `${key}`;\n      navList.appendChild(button);\n\n      const table = document.createElement('table');\n      const tbody = document.createElement('tbody');\n      table.classList.add('popup-repair-types-content-table__list');\n      table.setAttribute('id', `${key}`);\n      tableContainer.appendChild(table);\n      table.appendChild(tbody);\n\n      newArrays[key].forEach((item) => {\n        const row = document.createElement('tr');\n        row.classList.add('mobile-row');\n        row.innerHTML = `<tr class=\"mobile-row\">\n        <td class=\"repair-types-name\">\n          ${item.name}\n        </td>\n        <td class=\"mobile-col-title tablet-hide desktop-hide\">\n          Ед.измерения\n        </td>\n        <td class=\"mobile-col-title tablet-hide desktop-hide\">\n          Цена за ед.\n        </td>\n        <td class=\"repair-types-value\">${item.units}</td>\n        <td class=\"repair-types-value\">${item.cost} руб.</td>\n      </tr>`;\n        tbody.appendChild(row);\n      });\n    });\n  };\n\n  body.addEventListener('click', (e) => {\n    if (e.target.closest('.link-price')) {\n      popup.style.visibility = 'visible';\n      popupRepairTypesActive = !popupRepairTypesActive;\n    }\n\n    if (popupRepairTypesActive) {\n      if (\n        e.target.closest('.close') ||\n        e.target.className === 'popup popup-repair-types'\n      ) {\n        popup.style.visibility = 'hidden';\n        popupRepairTypesActive = !popupRepairTypesActive;\n        console.log(popupRepairTypesActive);\n      }\n    }\n  });\n\n  fetchData().then((data) => {\n    dataArr = data;\n    sortData();\n    renderBlocks(newArrays);\n\n    const buttons = document.querySelectorAll('.popup-repair-types-nav__item');\n    const tables = document.querySelectorAll(\n      '.popup-repair-types-content-table__list'\n    );\n    const title = document.querySelector('#switch-inner');\n\n    buttons.forEach((button) => {\n      button.addEventListener('click', (e) => {\n        buttons.forEach((item) => {\n          item.classList.remove('active');\n        });\n        tables.forEach((table) => {\n          if (table.id === e.target.textContent) {\n            table.classList.remove('hidden');\n          } else {\n            table.classList.add('hidden');\n          }\n        });\n        e.target.classList.add('active');\n        title.textContent = e.target.textContent;\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupRepairTypes);\n\n\n//# sourceURL=webpack:///./modules/popupRepairTypes.js?");

/***/ }),

/***/ "./modules/popupTransparency.js":
/*!**************************************!*\
  !*** ./modules/popupTransparency.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupTransparency = () => {\n  const popup = document.querySelector('.popup-transparency');\n  const body = document.querySelector('body');\n  const slides = popup.querySelectorAll('.popup-transparency-slider__slide');\n  const blocks = body.querySelectorAll('.transparency-item');\n  const slidesContainer = popup.querySelector('.popup-transparency-slider');\n  const sliderCurrent = popup.querySelector('.slider-counter-content__current');\n  const sliderTotal = popup.querySelector('.slider-counter-content__total');\n\n  let popupTransparency = false;\n\n  const initSlides = (arr, uniqPrefix) => {\n    arr.forEach((item, index) => {\n      item.setAttribute('id', `${uniqPrefix}-${index + 1}`);\n    });\n  };\n\n  const prevSlide = (container, uniqPrefix) => {\n    let newSlide = container.querySelector(\n      `#${uniqPrefix}-${currentSlide - 1}`\n    );\n    container.prepend(newSlide);\n  };\n\n  const nextSlide = (container, uniqPrefix) => {\n    let newSlide = container.querySelector(\n      `#${uniqPrefix}-${currentSlide + 1}`\n    );\n    container.prepend(newSlide);\n  };\n\n  const getSlide = (container, uniqPrefix) => {\n    let newSlide = container.querySelector(`#${uniqPrefix}-${currentSlide}`);\n    container.prepend(newSlide);\n  };\n\n  const updateBlock = () => {\n    blocks.forEach((item, i) => {\n      if (i + 1 !== currentBlock) {\n        item.classList.add('hidden');\n      } else {\n        item.classList.remove('hidden');\n      }\n    });\n  };\n\n  let currentSlide = 1;\n  let currentBlock = 1;\n  sliderCurrent.innerText = currentSlide;\n  let total = slides.length;\n  let totalBlocks = blocks.length;\n  sliderTotal.innerText = total;\n  initSlides(slides, 'popup-transparency-slide');\n  initSlides(blocks, 'transparency-item');\n\n  if (screen.width < 1090) {\n    updateBlock();\n    body.addEventListener('click', (e) => {\n      if (e.target.closest('#transparency-arrow_right')) {\n        if (currentBlock < totalBlocks) {\n          currentBlock++;\n          updateBlock();\n        }\n      }\n      if (e.target.closest('#transparency-arrow_left')) {\n        if (currentBlock > 1) {\n          currentBlock--;\n          updateBlock();\n        }\n      }\n    });\n  }\n\n  body.addEventListener('click', (e) => {\n    if (e.target.closest('.transparency-item__img')) {\n      popup.style.visibility = 'visible';\n      popupTransparency = !popupTransparency;\n      if (e.target.offsetParent.id === 'transparency-item-1') {\n        currentSlide = 1;\n      }\n      if (e.target.offsetParent.id === 'transparency-item-2') {\n        currentSlide = 2;\n      }\n      if (e.target.offsetParent.id === 'transparency-item-3') {\n        currentSlide = 3;\n      }\n      sliderCurrent.innerText = currentSlide;\n      getSlide(slidesContainer, 'popup-transparency-slide');\n    }\n\n    if (popupTransparency) {\n      if (e.target.closest('#transparency_left')) {\n        if (currentSlide > 1) {\n          prevSlide(slidesContainer, 'popup-transparency-slide');\n          currentSlide--;\n          sliderCurrent.innerText = currentSlide;\n        }\n      }\n      if (e.target.closest('#transparency_right')) {\n        if (currentSlide < total) {\n          nextSlide(slidesContainer, 'popup-transparency-slide');\n          currentSlide++;\n        }\n      }\n      sliderCurrent.innerText = currentSlide;\n      if (\n        e.target.closest('.close') ||\n        e.target.className === 'popup popup-transparency'\n      ) {\n        popup.style.visibility = 'hidden';\n        popupTransparency = !popupTransparency;\n      }\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupTransparency);\n\n\n//# sourceURL=webpack:///./modules/popupTransparency.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = (formId) => {\n  const form = document.getElementById(formId);\n  const checkbox = form.querySelector('.checkbox__input');\n  const errorMessage = document.createElement('div');\n  const popup = document.querySelector('.popup-thank');\n  const body = document.querySelector('body');\n  errorMessage.classList.add('error-message');\n  errorMessage.innerHTML = '<p>Ознакомьтесь с политикой конфиденциальности</p>';\n\n  const sendData = (data) =>\n    fetch('https://jsonplaceholder.typicode.com/posts', {\n      method: 'POST',\n      body: JSON.stringify(data),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    }).then((res) => res.json());\n\n  const submitForm = () => {\n    const formData = new FormData(form);\n    const formBody = {};\n\n    formData.forEach((value, key) => {\n      formBody[key] = value;\n    });\n    console.log(formBody);\n\n    sendData(formBody);\n  };\n\n  const showPopupThank = () => {\n    let popupThank = true;\n    popup.style.visibility = 'visible';\n\n    body.addEventListener('click', (e) => {\n      if (popupThank) {\n        console.dir(e.target);\n        if (\n          e.target.closest('.close') ||\n          e.target.className === 'popup popup-thank'\n        ) {\n          popup.style.visibility = 'hidden';\n          popupThank = !popupThank;\n        }\n      }\n    });\n  };\n\n  try {\n    if (!form) {\n      throw new Error('Форма не найдена');\n    }\n    checkbox.addEventListener('change', () => {\n      errorMessage.classList.add('hide');\n    });\n\n    form.addEventListener('submit', (e) => {\n      e.preventDefault();\n      if (checkbox.checked) {\n        submitForm();\n        form.reset();\n        showPopupThank();\n        if (formId === 'feedback6') {\n          document.querySelector('.popup-consultation').style.visibility =\n            'hidden';\n        }\n      } else {\n        form.append(errorMessage);\n        errorMessage.classList.remove('hide');\n      }\n    });\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/sliderPortfolio.js":
/*!************************************!*\
  !*** ./modules/sliderPortfolio.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst sliderPortfolio = () => {\n  const body = document.querySelector('body');\n  const gallery = document.querySelector('.portfolio-slider');\n  const prevBtn = document.querySelector('#portfolio-arrow_left');\n  const nextBtn = document.querySelector('#portfolio-arrow_right');\n  const galleryItems = document.querySelectorAll('.portfolio-slider__slide');\n  const popup = document.querySelector('.popup-dialog-portfolio');\n  const popupLayout = body.querySelector('.popup.popup-portfolio');\n  const popupSlidesBlock = popup.querySelector('.popup-portfolio-slider');\n  const popupContentBlock = popup.querySelector('.popup-portfolio-text-slider');\n  const popupArrow = popup.querySelectorAll('.popup-arrow');\n  const sliderCounter = popup.querySelector('#popup-portfolio-counter');\n  const sliderCounterCurrent = popup.querySelector(\n    '.slider-counter-content__current'\n  );\n  const sliderCounterTotal = popup.querySelector(\n    '.slider-counter-content__total'\n  );\n  const close = document.querySelector('.popup-portfolio>.close');\n\n  let popupSlides = popup.querySelectorAll('.popup-portfolio-slider__slide');\n  let popupSlidesText = popup.querySelectorAll('.popup-portfolio-text');\n\n  const galleryItemWidth = galleryItems[0].offsetWidth;\n\n  let currentSlide = 1;\n  sliderCounterCurrent.innerText = currentSlide;\n  let total = popupSlides.length;\n  sliderCounterTotal.innerText = total;\n\n  prevBtn.addEventListener('click', (e) => {\n    gallery.style.scrollBehavior = 'smooth';\n    gallery.scrollLeft -= galleryItemWidth;\n  });\n\n  nextBtn.addEventListener('click', (e) => {\n    gallery.style.scrollBehavior = 'smooth';\n    gallery.scrollLeft += galleryItemWidth;\n  });\n\n  const handleScrollButtons = () => {\n    if (gallery.scrollLeft === 0) {\n      prevBtn.style.display = 'none';\n    } else {\n      prevBtn.style.display = 'flex';\n    }\n    if (gallery.scrollLeft + gallery.clientWidth === gallery.scrollWidth) {\n      nextBtn.style.display = 'none';\n    } else {\n      nextBtn.style.display = 'flex';\n    }\n  };\n\n  const initSlides = (arr, uniqPrefix) => {\n    arr.forEach((item, index) => {\n      item.setAttribute('id', `${uniqPrefix}-${index + 1}`);\n    });\n  };\n\n  const prevSlide = (container, uniqPrefix) => {\n    let newSlide = container.querySelector(\n      `#${uniqPrefix}-${currentSlide - 1}`\n    );\n    container.prepend(newSlide);\n  };\n\n  const nextSlide = (container, uniqPrefix) => {\n    let newSlide = container.querySelector(\n      `#${uniqPrefix}-${currentSlide + 1}`\n    );\n    container.prepend(newSlide);\n  };\n\n  gallery.addEventListener('scroll', () => {\n    handleScrollButtons();\n  });\n\n  galleryItems.forEach((item) => {\n    item.addEventListener('click', (e) => {\n      popup.style.visibility = 'visible';\n      popupLayout.style.visibility = 'visible';\n      popupSlidesText.forEach((item, i) => {\n        item.style.display = 'block';\n      });\n      popupArrow.forEach((item) => {\n        item.style.top = '5%';\n      });\n      sliderCounter.style.marginLeft = '0';\n      sliderCounter.style.bottom = '90.4%';\n      close.style.visibility = 'visible';\n    });\n\n    initSlides(popupSlides, 'popup-slides');\n    initSlides(popupSlidesText, 'popup-slides-text');\n  });\n\n  body.addEventListener('click', (e) => {\n    if (\n      e.target.closest('.close') ||\n      e.target.className === 'popup popup-portfolio'\n    ) {\n      popup.style.visibility = 'hidden';\n      popupLayout.style.visibility = 'hidden';\n      close.style.visibility = 'hidden';\n    }\n  });\n\n  popupArrow.forEach((arrow) => {\n    arrow.addEventListener('click', (e) => {\n      if (e.target.closest('.popup-arrow_left')) {\n        if (currentSlide > 1) {\n          prevSlide(popupSlidesBlock, 'popup-slides');\n          prevSlide(popupContentBlock, 'popup-slides-text');\n          currentSlide--;\n          sliderCounterCurrent.innerText = currentSlide;\n        }\n      }\n      if (e.target.closest('.popup-arrow_right')) {\n        if (currentSlide < total) {\n          nextSlide(popupSlidesBlock, 'popup-slides');\n          nextSlide(popupContentBlock, 'popup-slides-text');\n          currentSlide++;\n          sliderCounterCurrent.innerText = currentSlide;\n        }\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderPortfolio);\n\n\n//# sourceURL=webpack:///./modules/sliderPortfolio.js?");

/***/ }),

/***/ "./modules/sliderRepairTypes.js":
/*!**************************************!*\
  !*** ./modules/sliderRepairTypes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderRepairTypes = () => {\n  const slider1 = document.querySelector('.types-repair1');\n  const slider2 = document.querySelector('.types-repair2');\n  const slider3 = document.querySelector('.types-repair3');\n  const slider4 = document.querySelector('.types-repair4');\n  const slider5 = document.querySelector('.types-repair5');\n\n  let sliderBlock = document.querySelector(`.types-repair1`);\n  let arrowRight = document.getElementById('repair-types-arrow_right');\n  let arrowLeft = document.getElementById('repair-types-arrow_left');\n  let slides = sliderBlock.querySelectorAll('.repair-types-slider__slide');\n  let countCurrent = document.querySelector('.slider-counter-content__current');\n  let currentSlider = 1;\n  let total = 0;\n\n  let obj = {\n    curSlide1: 0,\n    curSlide2: 0,\n    curSlide3: 0,\n    curSlide4: 0,\n    curSlide5: 0,\n  };\n\n  const updateSlider = (id) => {\n    sliderBlock = document.querySelector(`.types-repair${id}`);\n    countCurrent = document.querySelector('.slider-counter-content__current');\n    const countTotal = document.querySelector('.slider-counter-content__total');\n    slides = sliderBlock.querySelectorAll('.repair-types-slider__slide');\n    countCurrent.innerHTML = obj[`curSlide${id}`] + 1;\n    total = slides.length - 1;\n    countTotal.innerHTML = slides.length;\n    arrowRight = document.getElementById('repair-types-arrow_right');\n    arrowLeft = document.getElementById('repair-types-arrow_left');\n  };\n\n  const nextSlide = (id) => {\n    console.log(obj[`curSlide${id}`]);\n    if (obj[`curSlide${id}`] < total) {\n      sliderBlock.prepend(slides[obj[`curSlide${id}`] + 1]);\n      obj[`curSlide${id}`] = obj[`curSlide${id}`] + 1;\n      slides = sliderBlock.querySelectorAll('.repair-types-slider__slide');\n      countCurrent.innerHTML = obj[`curSlide${id}`] + 1;\n    }\n  };\n  const prevSlide = (id) => {\n    if (obj[`curSlide${id}`] > 0) {\n      sliderBlock.append(slides[0]);\n      obj[`curSlide${id}`] = obj[`curSlide${id}`] - 1;\n      slides = sliderBlock.querySelectorAll('.repair-types-slider__slide');\n      countCurrent.innerHTML = countCurrent.innerHTML - 1;\n    }\n  };\n\n  const sliderSwitch = () => {\n    const sliderTypesBlock = document.querySelector('.repair-types-slider');\n    let sliderTypesList = sliderTypesBlock.querySelectorAll(\n      '.repair-types-slider>div'\n    );\n    const repairList = document.querySelectorAll('.repair-types-nav__item');\n    let sliderId = '';\n    sliderTypesList.forEach((item, index) => {\n      item.getAttribute(`id` + index + 1);\n    });\n\n    repairList.forEach((item) => {\n      item.addEventListener('click', (e) => {\n        repairList.forEach((item) => {\n          item.classList.remove('active');\n        });\n        e.target.classList.add('active');\n        if (item.classList.contains('active')) {\n          sliderId = e.target.getAttribute('id');\n        }\n        currentSlider = sliderId.toString().slice(-1);\n\n        updateSlider(currentSlider);\n\n        sliderTypesBlock.prepend(sliderBlock);\n        sliderTypesList = sliderTypesBlock.querySelectorAll(\n          '.repair-types-slider>div'\n        );\n        console.log(sliderTypesList);\n      });\n    });\n  };\n\n  sliderSwitch();\n  updateSlider(currentSlider);\n\n  arrowLeft.addEventListener('click', (e) => {\n    prevSlide(currentSlider);\n    console.log(obj);\n  });\n  arrowRight.addEventListener('click', (e) => {\n    nextSlide(currentSlider);\n    console.log(obj);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderRepairTypes);\n\n\n//# sourceURL=webpack:///./modules/sliderRepairTypes.js?");

/***/ }),

/***/ "./modules/sliderReviews.js":
/*!**********************************!*\
  !*** ./modules/sliderReviews.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderReviews = () => {\n  const container = document.querySelector('.reviews-slider');\n  const slides = container.querySelectorAll('.reviews-slider__slide');\n  const body = document.querySelector('body');\n  let currentSlide = 1;\n  let totalSlides = slides.length;\n\n  const updateSlides = () => {\n    slides.forEach((item, i) => {\n      if (i + 1 !== currentSlide) {\n        item.classList.add('hidden');\n      } else {\n        item.classList.remove('hidden');\n      }\n    });\n  };\n\n  body.addEventListener('click', (e) => {\n    if (e.target.closest('#reviews-arrow_right')) {\n      if (currentSlide < totalSlides) {\n        currentSlide++;\n        updateSlides();\n      } else {\n        currentSlide = 1;\n        updateSlides();\n      }\n    }\n    if (e.target.closest('#reviews-arrow_left')) {\n      if (currentSlide > 1) {\n        currentSlide--;\n        updateSlides();\n      } else {\n        currentSlide = totalSlides;\n        updateSlides();\n      }\n    }\n  });\n\n  updateSlides();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderReviews);\n\n\n//# sourceURL=webpack:///./modules/sliderReviews.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;