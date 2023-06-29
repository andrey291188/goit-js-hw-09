
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  btnStart = document.querySelector("[data-start]");
  btnStop = document.querySelector("[data-stop]");
  bodyPage = document.querySelector("body");

  btnStart.addEventListener("click", onClickStart);
  btnStop.addEventListener("click", onClickStop);
  btnStop.disabled = true;

  let activeColorBody = 0;
  
  function onClickStart(evt) {

      if (activeColorBody) {
        return
      } else {
        activeColorBody += 1;
        btnStart.disabled = true;
        btnStop.disabled = false;
      }

      return intervalId = setInterval(() => {  
        
         bodyPage.style.background = getRandomHexColor();
      }, 1000);
  };

  function onClickStop (evt) {

    if (!activeColorBody) {
      return
    } else {
      activeColorBody -= 1;
      btnStart.disabled = false;
      btnStop.disabled = true;
    }
    
    clearInterval(intervalId)
  }

