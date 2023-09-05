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
    mainDiv.innerHTML= `${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`;
}

// printDelayedTime()
//4
function printLoveTimers(){
    var lTimerID= setTimeout(function(){mainDiv.innerHTML="i love timer"},10000)
    mainDiv.innerHTML +=`<button onclick="clearTimeout(${lTimerID})">stop the timer</button>`
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


