(()=>{"use strict";var e,t,n,s,c=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(e)},a=function(e,t){return function(e,t){var n=e.split(".").join("");return t.classList?t.classList.contains(n):new RegExp("(^| )".concat(n,"( |$)"),"gi").test(t.className)}(e,t)?function(e,t){return t.classList?t.classList.remove(e):(t.className=t.className.replace(new RegExp("(^|\\b)".concat(e.split(" ").join("|"),"(\\b|$)"),"gi")," "),t)}(e,t):function(e,t){return t.classList?t.classList.add(e):"".concat(t.className," ").concat(e)}(e,t)};e="pat",t="SearchHidden",n={search:".js-search",button:".js-search-btn",input:".js-search-input"},s={active:"active"},document.querySelectorAll("[data-js-".concat(e,"=").concat(t,"]")).forEach((function(e){var t,i;i=function(){t.elements.btn.addEventListener("click",(function(){a(s.active,t.elements.search),t.elements.input.focus()}))},(t={state:{},elements:{}}).elements.search=c(n.search),t.elements.btn=c(n.button),t.elements.input=c(n.input),i()}))})();