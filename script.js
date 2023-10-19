let startBtn = document.getElementById('start')
// let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')

let stopWatch = document.getElementById('stopwatch')

let running = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;


function startStop() {
    running = !running
    if (running) {
        startBtn.textContent = 'Stop';
        startTimer();
    } else {
        startBtn.textContent = 'Start'
        stopTimer();
    }

}

let startTimer = () => {
        timer = setInterval(function() {
            milliseconds++;
            if (milliseconds === 100){
                milliseconds = 0;
                seconds++
                if (seconds === 60){
                    seconds = 0;
                    minutes++
                } 
            }
            updateDisplay();
        }, 10)
    }

function stopTimer() {
    clearInterval(timer)
}

function reset() {
    clearInterval(timer)
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    startBtn.textContent = 'Start'
}

function updateDisplay() {
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    document.getElementById("milliseconds").textContent = milliseconds.toString().padStart(2, "0");
}

