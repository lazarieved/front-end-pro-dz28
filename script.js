var pClock = document.getElementById('clock');

function nowOclock(){
    var dateNow = new Date();
    var secNow = dateNow.getSeconds();
    var minNow = dateNow.getMinutes();
    var hourNow = dateNow.getHours();
    pClock.textContent = hourNow + ":" + minNow + ":" + secNow;
}

nowOclock();

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  pClock.textContent = h + ":" + m + ":" + s;
}

setInterval(time, 1000);


var pAlarm = document.getElementById('alarm');

function alarm(hours, minuts) {
    var d = new Date();
    var mainMinuts = d.getMinutes() + minuts;
    var mainHours = d.getHours() + hours;
    pAlarm.textContent = mainHours + ":" + mainMinuts;
   // alert(`bydilnik`);
}
function alarmStart() {
    var date = Date.new();
    //date.new+alarm - date.new
    //return ostatok
}
setTimeout(alarm, 1000, 0, 1);

var pTimer = document.getElementById('timer');

function timer(hours, minuts, seconds) {
  pTimer.textContent = hours + ":" + minuts + ":" + seconds;
}
function timerTime(){

}

setInterval(timer, 1000, 1, 12, 20);