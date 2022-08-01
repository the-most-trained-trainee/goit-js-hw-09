// test 
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
stopButton.disabled = true;
let actualInterbalId = 0;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function colorPublisher() {
    document.querySelector("body").style.background = getRandomHexColor();
};

startButton.addEventListener("click", () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    actualInterbalId = setInterval(colorPublisher, 1000);
});

stopButton.addEventListener("click", () => {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(actualInterbalId);
});