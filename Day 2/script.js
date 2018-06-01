const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setHandPositions(){

    const currentSec = new Date().getSeconds();
    const secAngle = ((currentSec / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secAngle}deg)`;

    const currentMin = new Date().getMinutes();
    const minAngle = ((currentMin / 60) * 360 + ((currentSec / 60) * 6)) + 90;
    minHand.style.transform = `rotate(${minAngle}deg)`;

    const currentHour = new Date().getHours();
    const hourAngle = ((currentHour / 12) * 360 + ((currentMin / 60) * 30)) + 90;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;

}

setInterval(setHandPositions, 1000);
setHandPositions();