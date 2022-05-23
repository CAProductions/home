var firstClick = true
document.getElementById(`time`).value = localStorage.getItem("time")
var clicks, time, finish, cps, maxTime
time = 0
clicks = 0
finish = false
cps = 0
function start(){
setInterval(update, 10)
maxTime = document.getElementById(`time`).value*1000
firstClick = false
}
function update(){
    if(time>=maxTime){
        finish = true
        if(cps > (localStorage.getItem("maxcps")/100)){
            localStorage.setItem("maxcps", cps*100)
        }
        history.push(cps)
    }
    document.getElementById(`btn`).innerHTML = `Click!<br>Remaining: ${(maxTime-time)/1000}`
    if (!finish){
    time += 10
}
cps = (Math.floor((clicks/(time/1000)*100)))/100
}
function updateMain(){
    document.getElementById(`showTime`).innerHTML = `Time: ${document.getElementById(`time`).value} seconds`
    document.getElementById(`txt`).innerHTML = `Clicks: ${clicks} | Time: ${time} | CPS: ${cps}`
    localStorage.setItem("time", document.getElementById("time").value)
    document.getElementById(`highscore`).innerHTML = `High Score: ${localStorage.getItem('maxcps')/100}`
    document.title = `CPS TEST | ${document.getElementById(`time`).value} Seconds`
}
setInterval(updateMain, 10)
function clearHigh(){
    if (prompt("Are you sure you want to clear your save? (y/n)")=="y"){
        localStorage.setItem("maxcps", 0)
    }else{
        alert(`canceled, your high is still ${localStorage.getItem(`maxcps`)/100}`)
    }
}