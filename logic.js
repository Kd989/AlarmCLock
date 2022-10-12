const CurrentTime = document.querySelector("h1"),
    content = document.querySelector(".content"),
    SelectMenu = document.querySelectorAll("select"),
    SetalarmBtn = document.querySelector("button");

let AlarmTime,
    ringtone = new Audio("audio.mp3")

// console.log(SetalarmBtn);
for (let i = 12; i > 0; i--) {
    i = i < 10 ? + i : i;
    let option = ` <option value="${i}">${i}</option>`;
    SelectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);

}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? + i : i;
    let option = ` <option value="${i}">${i}</option>`;
    SelectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);

}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM"
    let option = ` <option value="${ampm}">${ampm}</option>`;
    SelectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);

}

setInterval(() => {
    // getting hours min seconds by gethours library
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";

    if (h >= 12) {
        h = h - 12;
        ampm = "PM"
    }
    // if hour value is 0 set this value to 12

    h = h == 0 ? h = 12 : h;

    // adding 0 before hr,min,.sec if this value is less then 10

    h = h < 0 ? "0" + h : h;
    m = m < 0 ? "0" + m : m;
    s = s < 0 ? "0" + s : s;
    // console.log((`${h}:${m}:${s} ${ampm}`));
    CurrentTime.innerText = `${h}:${m}:${s} ${ampm}`


    if (AlarmTime == `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000);



function setAlarm() {
    let time = `${SelectMenu[0].value}:${SelectMenu[1].value} ${SelectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm");
    }
    AlarmTime = time;
    content.classList.add("disable")
    SetalarmBtn.innerText = "Clear Alarm";
    // console.log(time);
}


SetalarmBtn.addEventListener("click", setAlarm)
