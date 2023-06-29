import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDates[0];
    },
  });

const inputDateFlatpickr = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]");
const dayTextContent = document.querySelector("[data-days]");
const hourTextContent = document.querySelector("[data-hours]");
const minuteTextContent = document.querySelector("[data-minutes]");
const secondTextContent = document.querySelector("[data-seconds]");

btnStart.addEventListener("click", onClick);
inputDateFlatpickr.addEventListener("input", onInput);

btnStart.disabled = true;

function onInput () {
    const inputDate = new Date(inputDateFlatpickr.value);
    const currentDate = new Date();

    if (inputDate > currentDate) {
        btnStart.disabled = false;
      
    } else {
        btnStart.disabled = true;
        Notiflix.Notify.failure("Please choose a date in the future")
        
    }
};

function onClick () {  
  
      btnStart.disabled = true;
      const inputDate = new Date(inputDateFlatpickr.value);

      const intervalActive = setInterval(() => {
            
            const currentDate = new Date();
            const timeNow = inputDate - currentDate;

              if (timeNow < 1000) {
            btnStart.disabled = false;    
            clearInterval(intervalActive); 
            };

            const time = convertMs(timeNow);
            addLeadingZero(time);
        }, 1000);
 };

function addLeadingZero({ days, hours, minutes, seconds }) {

  dayTextContent.textContent = days.toString().padStart(2, "0");
  hourTextContent.textContent = hours.toString().padStart(2, "0");
  minuteTextContent.textContent = minutes.toString().padStart(2, "0");
  secondTextContent.textContent = seconds.toString().padStart(2, "0");

 }

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };


