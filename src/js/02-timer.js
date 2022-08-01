import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dataToCountInput = document.querySelector("#datetime-picker");

let msSelectedTime = 0;
let msTimeDiscrepancy = 0;
let adaptedTimeDiscrepancy = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        msSelectedTime = selectedDates[0].valueOf();
        const currentDate = new Date();
        const msCurrentTime = currentDate.getTime();
        msTimeDiscrepancy = msSelectedTime - msCurrentTime;
        if (msTimeDiscrepancy <= 0) {
            Notiflix.Notify.warning("Please choose a date in the future")
        } else {
            startCountingButton.disabled = false;
        }
    },
};

const receivedDateTime = flatpickr(dataToCountInput, options);

const startCountingButton = document.querySelector("[data-start]");
startCountingButton.disabled = true;

const displayDays = document.querySelector("[data-days]");
const displayHours = document.querySelector("[data-hours]");
const displayMinutes = document.querySelector("[data-minutes]");
const displaySeconds = document.querySelector("[data-seconds]");

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
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

startCountingButton.addEventListener("click", () => {

    let minusCheck = false;

    let buttonIntervalId = setInterval(() => {

        const currentDateDisplay = new Date();
        const msCurrentTimeDisplay = currentDateDisplay.getTime();
        msTimeDiscrepancyDisplay = msSelectedTime - msCurrentTimeDisplay;
        adaptedTimeDiscrepancyDisplay = convertMs(msTimeDiscrepancyDisplay);

        displayDays.textContent = addLeadingZero(adaptedTimeDiscrepancyDisplay.days);
        displayHours.textContent = addLeadingZero(adaptedTimeDiscrepancyDisplay.hours);
        displayMinutes.textContent = addLeadingZero(adaptedTimeDiscrepancyDisplay.minutes);
        displaySeconds.textContent = addLeadingZero(adaptedTimeDiscrepancyDisplay.seconds);

        if (msTimeDiscrepancyDisplay < 1000) {
            clearInterval(buttonIntervalId);
        }
    }, 1000);
});