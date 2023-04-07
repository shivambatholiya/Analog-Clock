let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function showTime() {
    let date = new Date();

    // getting hour, min, sec from date
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hRotation = 30*h +m/2;
    let mRotation = 6*m;
    let sRotation = 6*s;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
};

setInterval(showTime, 1000); 