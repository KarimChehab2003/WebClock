
var timeElement = document.getElementById("time");
var secHand = document.getElementById("secondHand");
var minHand = document.getElementById("minuteHand");
var hourHand = document.getElementById("hourHand");

function updateTime() {

    // Manual counter
    // secs++;
    // if (secs % 60 === 0) {
    //     secs = 0;
    //     mins++;
    //     if (mins % 60 === 0) {
    //         mins = 0;
    //         hours++;
    //     }
    // }
    let currentTime = new Date();
    let secs = currentTime.getSeconds(), mins = currentTime.getMinutes() , hours = currentTime.getHours(), hoursHandPosition = hours % 12 + mins / 60 ;

    timeElement.innerHTML = hours.toString().padStart(2, '0')+ ":" + mins.toString().padStart(2, '0') + ":" + secs.toString().padStart(2, '0');
    secHand.style.transform = " rotate(calc(270deg + 360deg / 60 * " + secs + "))";
    minHand.style.transform = " rotate(calc(270deg + 360deg / 60 * " + mins + "))";
    hourHand.style.transform = " rotate(calc(270deg + 360deg / 12 * " + hoursHandPosition + "))";
}

setInterval(updateTime, 1000);

// Issue noticed: hourHand doesn't move throughout the entire hour.
// Instead, it snaps to the next hour after minHour finishes a cycle


