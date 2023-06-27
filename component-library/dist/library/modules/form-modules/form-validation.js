(()=>{"use strict";var e,s,a,t,n,r,c=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi,o=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(e)},i=function(e,s){return s.classList?s.classList.add(e):"".concat(s.className," ").concat(e)},l=function(e,s){return s.classList?s.classList.remove(e):(s.className=s.className.replace(new RegExp("(^|\\b)".concat(e.split(" ").join("|"),"(\\b|$)"),"gi")," "),s)};e="pat",s="FormValidation",a={username:".js-validation-username",email:".js-validation-email",password:".js-validation-password",confirmPassword:".js-validation-confirm-password",errorMessage:".js-validation-message"},t={error:"error",success:"success"},n=function(e){var s=e.dataset.name?e.dataset.name:e.id;return"".concat(s.charAt(0).toUpperCase()).concat(s.slice(1))},r=function(e){var s={state:{},elements:{}},r=function(e,s){var n=e.parentElement;i(t.error,e),i(t.error,n),o(a.errorMessage,n).innerText=s},m=function(e){var s=e.parentElement;i(t.success,e),l(t.error,e),i(t.success,s),l(t.error,s)},u=function(e){var s;s=e.value.trim(),new RegExp(c).test(s)?m(e):r(e,"Email is not valid")},d=function(e,s,a){e.value.length<s?r(e,"".concat(n(e)," must be at least ").concat(s," characters")):e.value.length>a?r(e,"".concat(n(e)," must be less than ").concat(a," characters")):m(e)},v=function(){e.addEventListener("submit",(function(e){var a,t;e.preventDefault(),[s.elements.username,s.elements.email,s.elements.password,s.elements.confirmPassword].forEach((function(e){""===e.value.trim()?r(e,"".concat(n(e)," is required")):m(e)})),d(s.elements.username,3,15),d(s.elements.password,6,25),u(s.elements.email),a=s.elements.password,t=s.elements.confirmPassword,a.value!==t.value&&r(t,"Passwords do not match")}))};s.elements.username=o(a.username,e),s.elements.email=o(a.email,e),s.elements.password=o(a.password,e),s.elements.confirmPassword=o(a.confirmPassword,e),v()},document.querySelectorAll("[data-js-".concat(e,"=").concat(s,"]")).forEach((function(e){r(e)}))})();