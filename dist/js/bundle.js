(()=>{"use strict";const e=e=>{const t=document.getElementById(e),c=t.querySelector(".checkbox__input"),o=document.createElement("div");o.classList.add("error-message"),o.innerHTML="<p>Ознакомьтесь с политикой конфиденциальности</p>";try{if(!t)throw new Error("Форма не найдена");c.addEventListener("change",(()=>{o.classList.add("hide")})),t.addEventListener("submit",(e=>{e.preventDefault(),c.checked?((()=>{const e=new FormData(t),c={};var o;e.forEach(((e,t)=>{c[t]=e})),console.log(c),o=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json()))})(),t.reset()):(t.append(o),o.classList.remove("hide"))}))}catch(e){console.log(e.message)}};(()=>{const e=document.querySelector(".header-contacts__phone-number-accord .header-contacts__phone-number"),t=document.querySelector(".header-contacts__messagers"),c=document.querySelector(".header-contacts__arrow");c.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active"),c.classList.toggle("active")}))})(),(()=>{const e=document.querySelector(".popup-menu"),t=document.querySelector(".popup-dialog-menu"),c=document.querySelector(".close-menu"),o=document.querySelector("body");let s=!1;const r=()=>{e.classList.toggle("active"),t.classList.toggle("active"),s=!s},a=e=>{const t=e.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})};o.addEventListener("click",(e=>{e.target.closest(".menu")&&r(),e.target.closest(".link-price")&&s&&r(),s&&!e.target.closest(".menu")&&(e.target!==c&&e.target.closest(".popup-dialog-menu")||r()),e.target.closest(".popup-menu-nav__item")&&(e.preventDefault(),r(),e.target.closest(".menu-link")?a(e.target):a(e.target.firstElementChild)),e.target.closest(".button-footer")&&(e.preventDefault(),a(o.querySelector(".button-footer a")))}))})(),(()=>{const e=document.querySelector(".popup-repair-types"),t=document.querySelector("body");let c=!1;t.addEventListener("click",(t=>{t.target.closest(".link-price")&&(e.style.visibility="visible",c=!c,console.log(c)),c&&(console.dir(t.target),(t.target.closest(".close")||"popup popup-repair-types"===t.target.className)&&(e.style.visibility="hidden",c=!c,console.log(c)))}))})(),document.querySelectorAll("#feedback-input1, #feedback-input2, #feedback-input3, #feedback-input4, #feedback-input5").forEach((e=>{e.addEventListener("input",(t=>{const c=e.value.replace(/\D+/g,"");let o="";for(let e=0;e<c.length&&e<11;e++){switch(e){case 0:o+="7"===(s=c[e])?"+7 (":"9"===s?"+7 (9":"+7 (";continue;case 4:o+=") ";break;case 7:case 9:o+="-"}o+=c[e]}var s;e.value=o}))})),e("feedback1"),e("feedback2"),e("feedback3"),e("feedback4"),e("feedback5")})();