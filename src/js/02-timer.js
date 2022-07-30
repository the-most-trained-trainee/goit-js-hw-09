import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dataToCountInput = document.querySelector("#datetime-picker");

let msSelectedTime = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        msSelectedTime = selectedDates[0].valueOf();
    },
};

const receivedDateTime = flatpickr(dataToCountInput, options);

const startCountingButton = document.querySelector("[data-start]");

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

startCountingButton.addEventListener("click", () => {

    const currentDate = new Date();
    const msCurrentTime = currentDate.getTime();

    const msTimeDiscrepancy = msSelectedTime - msCurrentTime;

    if (msTimeDiscrepancy <= 0) {
        alert("Please choose a date in the future")
    } else {
        const adaptedTimeDiscrepancy = convertMs(msTimeDiscrepancy)
        console.log(adaptedTimeDiscrepancy);
        displayDays.textContent = adaptedTimeDiscrepancy.days;
        displayHours.textContent = adaptedTimeDiscrepancy.hours;
        displayMinutes.textContent = adaptedTimeDiscrepancy.minutes;
        displaySeconds.textContent = adaptedTimeDiscrepancy.seconds;
    }
});