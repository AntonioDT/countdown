
const deadline = "2022-08-04";

$(document).ready(function() {
    // all custom jQuery will go here
    let days = $("#days").find(".time");
    let hours = $("#hours").find(".time");
    let minutes = $("#minutes").find(".time");
    let seconds = $("#seconds").find(".time");
    let repeat = setInterval(function(){ 
        let remainingTime = getTimeRemaining(deadline);
        setData(remainingTime, days, hours, minutes, seconds);
        stopCountDown(repeat, remainingTime);
    }, 1000);
});

function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
  
    return {
      days,
      hours,
      minutes,
      seconds
    };
}

function setData(remainingTime, days, hours, minutes, seconds) {
    
    days.text(remainingTime.days);
    hours.text(remainingTime.hours);
    minutes.text(remainingTime.minutes);
    seconds.text(remainingTime.seconds);

}

function stopCountDown(intervalId, remainingTime) {
    if (remainingTime.days == 0 &&
        remainingTime.hours == 0 &&
        remainingTime.minutes == 0 &&
        remainingTime.seconds == 0) {
            clearInterval(intervalId);
        }
}