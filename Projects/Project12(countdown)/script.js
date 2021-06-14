const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");  

let futureDate = new Date(2022,4,30,20,45,50,50);
console.log(futureDate);

const year = futureDate.getFullYear();

let month = futureDate.getMonth();
month = months[month];
console.log(month);

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
giveaway.textContent = `giveaway ends on ${year} ${month} ${weekday}, ${date} ${hour}:${minute}am`

// future time in milisecond
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    // bir gunun kac sanıye oldugunu verir
    const oneDay = 24*60*60*1000;
    // bir saatin kaç sn olduğunu verir
    const oneHour = 60*60*60*1000;
    // bir dk nın kac sn oldugunu verir
    const oneMinute = 60*1000;

    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours =  Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array;
    const values = [days,hours,minutes,seconds];

    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item
    }

    items.forEach((item,index) => {
        item.innerHTML = format(values[index])
    })
    // eğer zaman dolarsa geri sayımı durdur
    if(t < 0){
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">time is up</h4>`
    }
}
// countdown
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();