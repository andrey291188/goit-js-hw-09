const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let a=null;e.addEventListener("click",(function(n){if(r)return;r+=1,e.disabled=!0,t.disabled=!1;a=setInterval((()=>{d.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(function(d){if(!r)return;r-=1,e.disabled=!1,t.disabled=!0;clearInterval(a)})),t.disabled=!0;let r=0;
//# sourceMappingURL=01-color-switcher.a9d4dbd8.js.map