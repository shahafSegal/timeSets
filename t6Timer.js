function getClockTime(thisDate){
    return `${thisDate.getHours()}:${thisDate.getMinutes()}:${thisDate.getSeconds()}`;
}
function getUtcClockTime(thisDate){
    return `${thisDate.getUTCHours()}:${thisDate.getUTCMinutes()}:${thisDate.getUTCSeconds()}`;
}

// document+=



//6
var timeLeftMs=0;
var countDownInterID=0;
var alarmSound=new Audio('alarm.mp3')
alarmSound.volume=0.2
function printTimeLeft(){
    var translateDate= new Date(timeLeftMs)
    countDownDiv.innerHTML=getUtcClockTime(translateDate)
}

function getFullDateTillDay(date1){
    var splittedDateArr=date1.toDateString().split(' ');
    var onlyStart=[]
    for (let i = 0; i < 4; i++) {
        onlyStart.push(splittedDateArr[i])
    } 
    return onlyStart.join(' ')

}

function getTimeFromUser(){
    var userFullTime= prompt("enter time in hour:minute (:second, optionally )")
    var dateNow= new Date();
    var userDate= new Date(`${getFullDateTillDay(dateNow)} ${userFullTime}`);
    if(userDate<dateNow){
        userDate.setHours(userDate.getHours()+24)
    }
    timeLeftMs= userDate-dateNow;
    activeCountDown()
}

function countDownAndPrint(){
    timeLeftMs-=1000
    if(timeLeftMs>1000)
    {
        printTimeLeft()
    }
    else{
        clearInterval(countDownInterID)
        document.getElementById('countDownBut').remove()
        countDownDiv.innerHTML="the time has ended"
        alarmSound.play()
    }
}

function activeCountDown(){
    printTimeLeft()
    countDownInterID=setInterval(countDownAndPrint,1000)
    var countButton=document.getElementById('countDownBut')
    if(!countButton){
        mainDiv.innerHTML+=`<button id='countDownBut'></button>`
        countButton=document.getElementById('countDownBut')
    }
    countButton.innerHTML="click me to Pause Timer"
    countButton.onclick= clearCountDownAndChange
}

function clearCountDownAndChange(){
    clearInterval(countDownInterID)
    var countButton=document.getElementById('countDownBut')
    countButton.innerHTML="click me to Continue Timer"
    countButton.onclick=activeCountDown;
}


getTimeFromUser()
