(()=>{const e=document.querySelector("#name"),a=document.querySelector("#name-warning"),t=document.querySelector("#password"),o=document.querySelector("#password-warning"),c=document.querySelector(".button-ui_firm"),s=(document.querySelector("form"),()=>{e.value&&t.value&&fetch("http://localhost:3000/users").then((e=>e.json())).then((e=>e)).catch((e=>(console.error("Произошла ошибка при загрузке данных:",e),[]))).then((c=>{c.forEach((c=>{a.classList.remove("active"),o.classList.remove("active"),c.name===e.value&&c.password===t.value?(document.cookie="auth=true",document.cookie=`name=${e.value}`,document.cookie=`password=${t.value}`,window.location.href=window.location.href+"table.html"):c.name!==e.value&&c.password!==t.value?(a.classList.add("active"),o.classList.add("active")):c.name!==e.value?a.classList.add("active"):c.password!==t.value&&o.classList.add("active")}))}))});c.addEventListener("click",(e=>{e.preventDefault(),s()}))})();