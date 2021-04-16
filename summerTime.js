const clockIreland = document.querySelector(".clock-ireland"),
    clockTittleIreland = clockIreland.querySelector("h1"),
    summerOn = document.querySelector(".summerOnOff");
const SUMMER_CHECK = `cuurentTime`;
let currentTime = `cuurentTime`;
let summerClicked = `summerClicked`;

const summerBtn = document.querySelector(".summerTime");

function summertime() {
    summerBtn.classList.toggle("summerClicked");
    summerOn.classList.toggle("summerOn");
    init();
    
}

function getSummerTime() {
    const date = new Date();
    tz = date.getTime() + (date.getTimezoneOffset() * 60000) + (1 * 3600000);
    date.setTime(tz);
    // const months = Months[date.getMonth()];
    var days = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours =  hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    
    
    // clockDay.innerText = months +"."+days+"th";
    
    clockTittleIreland.innerText  =`${hours}:${minutes}:${seconds}${hours > 12 ? 'PM' : 'AM'}`;

}

function getIrelandTime() {
    var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    const date = new Date();
    tz = date.getTime() + (date.getTimezoneOffset() * 60000) + (0 * 3600000);
    date.setTime(tz);
    const months = Months[date.getMonth()];
    const days = date.getDay();
    var hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // minutes = minutes < 10 ? '0'+minutes : minutes;
    
    
    // clockDay.innerText = months +"."+days+"th";
    
    clockTittleIreland.innerText  =`${
    hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
	}:${
        seconds <10 ? `0${seconds}` : seconds
	}${hours > 12 ? 'PM' : 'AM'}`;
    
    // saveToDos();
    // console.log(currentTime);
    // printCurrentTime(currentTime);
}

// function printCurrentTime(text){
//     clockTittleIreland.innerText = text;
// }

// function saveToDos(){
//     localStorage.setItem(SUMMER_CHECK, JSON.stringify(currentTime));
// }


// function loadCurrentTime(){
//     const loadedCurrentTime = localStorage.getItem(SUMMER_CHECK)
    
// }



function init(){
    summerBtn.addEventListener("click",summertime);
    if (summerBtn.classList.contains(summerClicked)){
        getSummerTime();
    }else{
        getIrelandTime();
    }
    
}
init();
setInterval(init, 1000);


///////////////////////////////////////////////



