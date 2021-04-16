const soogleLogo = document.querySelector(".soogleLogo");
const soogleSpan = soogleLogo.querySelectorAll("span");
// const tl = new TimelineMax();


function soogleAnimation(){
    tl.fromTo(soogleSpan, 2, {opacity:"0", x:30}, {opacity:"1", x:0})
    .fromTo(soogleLogo,
        1.2,
        { x:"30"},
        { x:"0"},
        "-=1,2"
        );
}

function init(){
    soogleAnimation();
}
init();