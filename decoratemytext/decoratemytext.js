
//Alert
/* 
function alertfun(){
    alert("Hello, world!");
} */
function textZoom(){
    //setting size
    //text1.style.fontSize="24pt";

    //Adding 2pt 
/*     var textSz=document.getElementById("text1").style.fontSize;
    textSz = parseInt(textSz)+2+"pt";
    text1.style.fontSize=textSz;
    console.log(document.getElementById("text1").style.fontSize); */

    //Single click timer
    timerFnrun();
}
function timerFnrun(){

    var timer = setInterval(timerFn,1000);

    function timerFn(){
        var textSz=document.getElementById("text1").style.fontSize;
        textSz = parseInt(textSz)+2+"pt";
        text1.style.fontSize=textSz;
    }

}
function decoreText(){
    const checkBox=document.getElementById("bling");
    if(checkBox.checked){
        text1.style.fontWeight="bold";
        text1.style.color="green";
        text1.style.textDecoration="underline"
    }
    if(!checkBox.checked){
        text1.style.fontWeight="normal";
        text1.style.color="black";
        text1.style.textDecoration="none"
    }
}