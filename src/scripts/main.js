AOS.init();

const eventDate = new Date("Dec 12, 2023 19:00:00");
const timeStampEvent = eventDate.getTime();

const timeCounter = setInterval(function(){
    const now = new Date();
    const timeStampNow = now.getTime();

    const timeTillEvent = timeStampEvent - timeStampNow;

    const dayMs = 1000 * 60 * 60 * 24;
    const hourMs = 1000 * 60 * 60;
    const minuteMS = 1000 * 60;

    const daysTillEvent = Math.floor(timeTillEvent / dayMs);
    const hoursTillEvent = Math.floor((timeTillEvent % dayMs) / hourMs);
    const minutesTillEvent = Math.floor((timeTillEvent % hourMs) / minuteMS);
    const secondsTillEvent = Math.floor((timeTillEvent % minuteMS) / 1000);

    document.getElementById('counter').innerHTML = `${daysTillEvent}d ${hoursTillEvent}h ${minutesTillEvent}m ${secondsTillEvent}s`;

    if(timeTillEvent < 0){
        clearInterval(timeCounter);
        document.getElementById('counter').innerHTML = 'Evento encerrado.'
    }
}, 1000)