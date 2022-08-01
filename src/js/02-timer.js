import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dataToCountInput = document.querySelector("#datetime-picker");
const displayDays = document.querySelector("[data-days]");
const displayHours = document.querySelector("[data-hours]");
const displayMinutes = document.querySelector("[data-minutes]");
const displaySeconds = document.querySelector("[data-seconds]");
const startCountingButton = document.querySelector("[data-start]");
startCountingButton.disabled = true;

let msSelectedTime = 0;

const timeInput = {
    msTimeDiscrepancy: 0,
    options: {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            msSelectedTime = selectedDates[0].valueOf();
            const currentDate = new Date();
            const msCurrentTime = currentDate.getTime();
            this.msTimeDiscrepancy = msSelectedTime - msCurrentTime;
            if (this.msTimeDiscrepancy <= 0) {
                Notiflix.Notify.warning("Please choose a date in the future")
            } else {
                startCountingButton.disabled = false;
            }
        },
    },
    make() {
        flatpickr(dataToCountInput, this.options)
    },
};

const countdownTimer = {

    convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
        return { days, hours, minutes, seconds };
    },

    addLeadingZero(value) {
        return String(value).padStart(2, "0");
    },

    start() {
        this.buttonIntervalId = setInterval(() => {
            const currentDateDisplay = new Date();
            const msCurrentTimeDisplay = currentDateDisplay.getTime();
            const msTimeDiscrepancyDisplay = msSelectedTime - msCurrentTimeDisplay;
            adaptedTimeDiscrepancyDisplay = this.convertMs(msTimeDiscrepancyDisplay);
            displayDays.textContent = this.addLeadingZero(adaptedTimeDiscrepancyDisplay.days);
            displayHours.textContent = this.addLeadingZero(adaptedTimeDiscrepancyDisplay.hours);
            displayMinutes.textContent = this.addLeadingZero(adaptedTimeDiscrepancyDisplay.minutes);
            displaySeconds.textContent = this.addLeadingZero(adaptedTimeDiscrepancyDisplay.seconds);
            if (msTimeDiscrepancyDisplay < 1000) {
                clearInterval(this.buttonIntervalId);
            }
        }, 1000);
    },
};

timeInput.make();

startCountingButton.addEventListener("click", () => countdownTimer.start());