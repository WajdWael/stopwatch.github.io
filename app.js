// Initial Values
let seconds = 00;
let tens = 00;
let interval;

// Html element
let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");

// Buttons 
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");

btnStart.addEventListener('click', () => {
    interval = setInterval(startTimer, 50)
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;

})

function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        getTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = "0" + seconds;
        tens = 0;
        getTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        seconds = 0;
        getSeconds.innerHTML = "0" + 0;
    }

}
