const startbtn=document.getElementById("start");
const stopbtn=document.getElementById("stop");
const restartbtn=document.getElementById("reset");
let outseconds=document.getElementById("secs");
let sec=30;

function decrease(){
    sec-=1;
    if (sec>9){
        outseconds.innerHTML=sec;
    }
    if (sec<10){
        outseconds.innerHTML="0"+sec
    }
    if(sec==0){
        outseconds.innerHTML="Time's up!"
        clearInterval(interval)
    }
}
let interval;
startbtn.addEventListener("click", function(){
    clearInterval(interval);
    interval=setInterval(decrease, 1000);
})
stopbtn.addEventListener("click",function(){
    clearInterval(interval);
})
restartbtn.addEventListener("click", function(){
    clearInterval(interval);
    sec=30;
    outseconds.innerHTML=sec;
})