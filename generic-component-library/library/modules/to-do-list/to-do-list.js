(()=>{"use strict";var e="widget",t="ToDoListApp";document.querySelectorAll("[data-js-".concat(e,"=").concat(t,"]")).forEach((function(e){var t,n,s,r;n=function(){t.elements.addForm.addEventListener("submit",(function(e){e.preventDefault();var n=t.elements.addForm.add.value.trim();n.length&&(s(n),t.elements.addForm.reset())})),t.elements.list.addEventListener("click",(function(e){e.target.classList.contains("js-delete")&&e.target.parentElement.remove()})),t.elements.search.addEventListener("keyup",(function(){var e=t.elements.search.value.trim().toLowerCase();r(e)}))},s=function(e){var n='\n        <li class="to-do-list-app__todo justify-content-between align-items-center">\n          <span>'.concat(e,'</span>\n          <i class="far fa-trash-alt to-do-list-app__delete js-delete"></i>\n        </li>\n      ');t.elements.list.innerHTML+=n},r=function(e){var n=Array.from(t.elements.list.children);n.filter((function(t){return!t.textContent.toLowerCase().includes(e)})).forEach((function(e){e.classList.add("to-do-list-app__filtered")})),n.filter((function(t){return t.textContent.toLowerCase().includes(e)})).forEach((function(e){e.classList.remove("to-do-list-app__filtered")}))},(t={state:{},elements:{}}).elements.addForm=document.querySelector(".js-add"),t.elements.search=document.querySelector(".js-search input"),t.elements.list=document.querySelector(".js-todos"),n()}))})();