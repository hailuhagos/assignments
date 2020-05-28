// "use strict";
var timerID;
var i=0;
var speed =250;
var animationStr;
var textObj;
var animationStr;
function astart(){

}

function pageLoad(){
    document.getElementById("animType").onchange = display;
    document.getElementById("size").onchange = changeSize;
    document.getElementById("start").onclick = animat;
    document.getElementById("stop").onclick = stopAnimat;
    document.getElementById("turbo").onclick = speedChange;
}
function display(){
    var disp = document.getElementById("animType").value;
    var textObj = document.getElementById("animateArea");
    textObj.value = ANIMATIONS[disp];
}
function changeSize(){
    var size = document.getElementById("size").value;
    var textObj = document.getElementById("animateArea");
    textObj.style.fontSize = size;
    console.log(size);
}
function delay(){        
        if(i==animationStr.length){
            i=0;
        }
        textObj.value=animationStr[i];
        i++;
}
function animat(){
    animationStr = document.getElementById("animateArea").value;
    textObj = document.getElementById("animateArea");
    animationStr = animationStr.split("=====\n");

    var startObj = document.getElementById("start");
    var animObj = document.getElementById("animType");
    startObj.disabled = true;
    animObj.disabled = true;
    timerID=setInterval(delay,speed);
}
function speedChange(){
    clearInterval(timerID);
    if(document.getElementById("turbo").checked==true){
        speed=250;
    }
    if(document.getElementById("turbo").checked==false){
        speed=500;
    }
    console.log("Speedchanged"); 
    console.log(speed);
    timerID=setInterval(delay,speed);   
}
function stopAnimat(){
    clearInterval(timerID);
    console.log("Stop time is called"+timerID);
    var disp = document.getElementById("animType").value;
    var textObj = document.getElementById("animateArea");
    textObj.value = ANIMATIONS[disp];
    var startObj = document.getElementById("start");
    var animObj = document.getElementById("animType");
    startObj.disabled = false;
    animObj.disabled = false;
}

window.onload = pageLoad;