/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./auth.js":
/*!*****************!*\
  !*** ./auth.js ***!
  \*****************/
/***/ (() => {

eval("const auth = () => {\n  const name = document.querySelector('#name');\n  const password = document.querySelector('#password');\n  const button = document.querySelector('.button-ui_firm');\n  const form = document.querySelector('form');\n\n  const fetchData = () => {\n    return fetch('http://localhost:3000/users')\n      .then((response) => response.json())\n      .then((data) => {\n        return data;\n      })\n      .catch((error) => {\n        console.error('Произошла ошибка при загрузке данных:', error);\n        return [];\n      });\n  };\n\n  function authenticateUser(username, password) {\n    const user = users.find(\n      (user) => user.username === username && user.password === password\n    );\n  }\n  const submitForm = () => {\n    if (name.value && password.value) {\n      fetchData().then((data) => {\n        data.forEach((item) => {\n          if (item.name === name.value && item.password === password.value) {\n            console.log('Вход выполнен');\n          } else if (\n            item.name !== name.value &&\n            item.password !== password.value\n          ) {\n            console.log('Неверное имя и пароль');\n          } else if (item.name !== name.value) {\n            console.log('Неверное имя');\n          } else if (item.password !== password.value) {\n            console.log('Неверное имя');\n          }\n        });\n      });\n    }\n  };\n\n  button.addEventListener('click', (e) => {\n    e.preventDefault();\n    submitForm();\n  });\n};\n\nauth();\n\n\n//# sourceURL=webpack:///./auth.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./auth.js"]();
/******/ 	
/******/ })()
;