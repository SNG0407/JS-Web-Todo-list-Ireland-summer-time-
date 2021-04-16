const clockContainer = document.querySelector(".clock-korea"),
    clockTitle = clockContainer.querySelector("h1"),
    clockDay = clockContainer.querySelector("h2");

function getKoreaTime() {
    var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    const date = new Date();
    tz = date.getTime() + (date.getTimezoneOffset() * 60000) + (9* 3600000);
    date.setTime(tz);
    // const months = Months[date.getMonth()];
    var days = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    clockTitle.innerText  =`${
    hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
	}:${
        seconds <10 ? `0${seconds}` : seconds
	}${hours > 12 ? 'PM' : 'AM'}`;
}





// // 아일랜드 시간

// const clockIreland = document.querySelector(".clock-ireland"),
//     clockTittleIreland = clockIreland.querySelector("h1");


// function getIrelandTime() {
//     var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
//     const date = new Date();
//     tz = date.getTime() + (date.getTimezoneOffset() * 60000) + (0 * 3600000);
//     date.setTime(tz);
//     console.log(date);
//     console.log(tz);
//     const months = Months[date.getMonth()];
//     const days = date.getDay();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
    
    
//     // clockDay.innerText = months +"."+days+"th";
//     clockTittleIreland.innerText = `${
//         hours < 10 ? `0${hours}` : hours > 12 || hours-12 < 10? `0${hours - 12}` : hours > 12 || hours > 9 ? `${hours - 12}` : hours 
//     }:${
//         minutes < 10 ? `0${minutes}` : minutes
// 	}:${
//         seconds <10 ? `0${seconds}` : seconds
// 	}${hours > 12 ? 'PM' : 'AM'}`;
    
// }


function init(){
    getKoreaTime();
    // getIrelandTime();
    // setInterval(getIrelandTime, 1000);
    setInterval(getKoreaTime, 1000);
}
init();
/////////////////////summerTime////////////////////////////

// const summerBtn = document.querySelector(".summerTime");

// const CURRENT_TYPE = "normalType"


// function summertime() {
    
// }

// function initCurrentIrelandTime(){
//     summerBtn.addEventListener("click",summertime);
// }

// initCurrentIrelandTime();


