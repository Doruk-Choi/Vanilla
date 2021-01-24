const time = document.querySelector(".js-clock");
const clockTitle = time.querySelector(".h1Clock");
// Clock 

function currentTime() {

    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = today.getDay();

    switch(day) {
        case 0: 
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2: 
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4: 
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        default: 
            day = "Sat"
    }

    clockTitle.innerText = `  ${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}`:seconds}  (${day})`;

}


// Initialization

function init() {
    setInterval(currentTime, 1000);
}

init();

