!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(n){if(a)return;a+=1,t.disabled=!0,e.disabled=!1;return intervalId=setInterval((function(){r.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(r){if(!a)return;a-=1,t.disabled=!1,e.disabled=!0;clearInterval(intervalId)})),e.disabled=!0;var a=0}();
//# sourceMappingURL=01-color-switcher.1a978ef1.js.map
