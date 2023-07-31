(()=>{"use strict";var e="widget",t="TaskList";document.querySelectorAll("[data-js-".concat(e,"=").concat(t,"]")).forEach((function(e){var t,n,a,l,s,o,c,r,i,m;n=function(){document.addEventListener("DOMContentLoaded",(function(){a()})),t.elements.form.addEventListener("submit",(function(e){l(e)})),t.elements.taskList.addEventListener("click",(function(e){o(e)})),t.elements.clearBtn.addEventListener("click",(function(){r()})),t.elements.filter.addEventListener("keyup",(function(e){m(e)}))},a=function(){(null===localStorage.getItem("tasks")?[]:JSON.parse(localStorage.getItem("tasks"))).forEach((function(e){var n=document.createElement("li");n.className="collection-item",n.appendChild(document.createTextNode(e));var a=document.createElement("a");a.className="delete-item secondary-content",a.innerHTML='<i class="fa fa-remove"></i>',n.appendChild(a),t.elements.taskList.appendChild(n)}))},l=function(e){""===t.elements.taskInput.value&&alert("Add a task");var n=document.createElement("li");n.className="collection-item",n.appendChild(document.createTextNode(t.elements.taskInput.value));var a=document.createElement("a");a.className="delete-item secondary-content",a.innerHTML='<i class="fa fa-remove"></i>',n.appendChild(a),t.elements.taskList.appendChild(n),s(t.elements.taskInput.value),t.elements.taskInput.value="",e.preventDefault()},s=function(e){var t;(t=null===localStorage.getItem("tasks")?[]:JSON.parse(localStorage.getItem("tasks"))).push(e),localStorage.setItem("tasks",JSON.stringify(t))},o=function(e){e.target.parentElement.classList.contains("delete-item")&&confirm("Are You Sure?")&&(e.target.parentElement.parentElement.remove(),c(e.target.parentElement.parentElement))},c=function(e){var t;(t=null===localStorage.getItem("tasks")?[]:JSON.parse(localStorage.getItem("tasks"))).forEach((function(n,a){e.textContent===n&&t.splice(a,1)})),localStorage.setItem("tasks",JSON.stringify(t))},r=function(){for(;t.elements.taskList.firstChild;)t.elements.taskList.removeChild(t.elements.taskList.firstChild);i()},i=function(){localStorage.clear()},m=function(e){var t=e.target.value.toLowerCase();document.querySelectorAll(".collection-item").forEach((function(e){-1!=e.firstChild.textContent.toLowerCase().indexOf(t)?e.style.display="block":e.style.display="none"}))},(t={state:{},elements:{}}).elements.form=document.querySelector("#task-form"),t.elements.taskList=document.querySelector(".collection"),t.elements.clearBtn=document.querySelector(".clear-tasks"),t.elements.filter=document.querySelector("#filter"),t.elements.taskInput=document.querySelector("#task"),n()}))})();