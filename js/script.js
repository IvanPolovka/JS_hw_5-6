startbutton.addEventListener("click", start_click);
// pausetbutton.addEventListener("click", pause_click);
splitbutton.addEventListener("click",split_click);
resetbutton.addEventListener("click", reset_click);

var count = 0, timerId, go = false;

function start_click(){
  startbutton.innerHTML = "Pause";
  if (go === false){
    timerId = setInterval(function() {
      count++;
      var msek=count%1000;
      if (msek < 10) {msek = "00" + msek;}
      if (msek < 100) {msek = "0" + msek;}
      var sek = Math.floor(count/100)%60;
      if (sek < 10) {sek = "0" + sek;}
      var min = Math.floor(count/6000)%60;
      if (min < 10) {min = "0" + min;}
      var hours = Math.floor(count/360000)%24;
      if (hours < 10) {hours = "0" + hours;}
      str = hours+":"+min+":"+sek+":"+msek;
      display.innerHTML=str;
    }, 1);
    go=true;
  }
}

function split_click(){
  clearInterval(timerId);
  go=false;
  startbutton.innerHTML = "Start";
  split.innerHTML = str;
}

function reset_click(){
  clearInterval(timerId);
  go=false;
  count = 0;
  display.innerHTML = "00:00:00.000";
  split.innerHTML = "";
  document.getElementById('startbutton').innerHTML = "Start";
}
