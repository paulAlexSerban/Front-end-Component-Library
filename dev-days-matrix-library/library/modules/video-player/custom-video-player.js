(()=>{var e=document.getElementById("video"),n=document.getElementById("play"),t=document.getElementById("stop"),a=document.getElementById("progress"),i=document.getElementById("timestamp");function r(){e.paused?e.play():e.pause()}function d(){e.paused?n.innerHTML='<i class="fa fa-play fa-2x"></i>':n.innerHTML='<i class="fa fa-pause fa-2x"></i>'}e.addEventListener("click",r),e.addEventListener("pause",d),e.addEventListener("play",d),e.addEventListener("timeupdate",(function(){a.value=e.currentTime/e.duration*100;var n=Math.floor(e.currentTime/60);n<10&&(n="0"+String(n));var t=Math.floor(e.currentTime%60);t<10&&(t="0"+String(t)),i.innerHTML="".concat(n,":").concat(t)})),n.addEventListener("click",r),t.addEventListener("click",(function(){e.currentTime=0,e.pause()})),a.addEventListener("change",(function(){e.currentTime=+a.value*e.duration/100}))})();