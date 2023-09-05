//1
function printTimedName(){
    setTimeout(printName,3000);
}

function printName(){
    mainDiv.innerHTML+="Shahaf Segal"
}
//2
function printbyeHello(){
    setTimeout(function(){mainDiv.innerHTML="hello"},5000)
    mainDiv.innerHTML="bye"
}
// printbyeHello()
//3
function printDelayedTime(){
    var dateNow = new Date();
    setTimeout(function(){printClockTime(dateNow)},90000)
}
function printClockTime(date1){
    mainDiv.innerHTML=  getClockTime(date1)
}

function getClockTime(thisDate){
    return `${thisDate.getHours()}:${thisDate.getMinutes()}:${thisDate.getSeconds()}`;
}

// printDelayedTime()
//4
function setTimerLoveTimers(){
    var lTimerID= setTimeout(printLoveTimer,10000)
    mainDiv.innerHTML +=`<button onclick="clearTimeout(${lTimerID})">stop the timer</button>`
}
function printLoveTimer(){
    mainDiv.innerHTML+="i love timer"
}

// printLoveTimers()
//5
function printColmorphTitle(){
    mainDiv.innerHTML += `<h1 style='color:blue' id='colMorphTitle'>this title is color morphing<h1>`
    setTimeout(changeColMorph,3000)
}
function changeColMorph(){
    document.getElementById('colMorphTitle').style.color="red";
}
// printColmorphTitle()


//<=====Intervals=====>
//1

function intervalPrintTimer(){
    return setInterval(printTimer,4000);
}

function printTimer(){
    mainDiv.innerHTML+="timer"
}
// intervalPrintTimer()


//2 
var interCounter=0;
function intervalPrintCounter(){
    mainDiv.innerHTML+='0'
    return setInterval(printCounter,6000)
}
function printCounter(){
    mainDiv.innerHTML+=` ,${++interCounter}`
}
// intervalPrintCounter()
//3
function printIntervalLoveTimers(){
    var lovInterID= setInterval(printLoveTimer,5000)
    mainDiv.innerHTML +=`<button onclick="clearInterval(${lovInterID})">stop from printing more</button>`
}
// setIntervalLoveTimers();
//4.5
var clockIntervalID=0;
function clockInterval(){
    clockIntervalID = setInterval(printToClockTime,1000)
    var clokButton=document.getElementById('clockButton')
    if(!clokButton){
        mainDiv.innerHTML+=`<button id='clockButton'></button>`
        clokButton=document.getElementById('clockButton')
    }
    clokButton.innerHTML="click me to Stop"
    clokButton.onclick= clearClockButtonAndChange
}

function printToClockTime(){
    document.getElementById('clockDiv').innerHTML= getClockTime(new Date());
}

function clearClockButtonAndChange(){
    clearInterval(clockIntervalID)
    var clokButton=document.getElementById('clockButton')
    clokButton.innerHTML="click me to Start Again"
    clokButton.onclick=clockInterval;
}
clockInterval()




