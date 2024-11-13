// script.js

// Stopwatch Variables
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;
let isRunning = false;

// DOM Elements
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const lapList = document.getElementById("lap-list");

// Start Stopwatch
document.getElementById("start-btn").addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(updateTime, 10);
    }
});

// Pause Stopwatch
document.getElementById("pause-btn").addEventListener("click", () => {
    isRunning = false;
    clearInterval(interval);
});

// Reset Stopwatch
document.getElementById("reset-btn").addEventListener("click", () => {
    isRunning = false;
    clearInterval(interval);
    milliseconds = seconds = minutes = 0;
    updateDisplay();
    lapList.innerHTML = ""; // Clear lap times
});

// Add Lap
document.getElementById("lap-btn").addEventListener("click", () => {
    if (isRunning) {
        const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
        const lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
});

// Update Time
function updateTime() {
    milliseconds += 1;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    updateDisplay();
}

// Update Stopwatch Display
function updateDisplay() {
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
    millisecondsDisplay.textContent = formatMilliseconds(milliseconds);
}

// Format Time for Display
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(ms) {
    return ms < 10 ? `0${ms}` : ms;
}
