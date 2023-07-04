
let seconds = 20
let correctAnswer = 0
let incorrectAnswer = 0

function getElement(id) {
    return document.getElementById(id)
}


function getRandomWeapons(){
    let raundomItem  = Math.floor(Math.random(Weapon.lenght-1)*10) 
    
    console.log(raundomItem)
    return Weapon [raundomItem]
}
function main (){
    coun = getRandomWeapons();
    getElement("Weapon").src = coun.weapons;
}
function timer () {
  setTimeout(finish, seconds * 1000);
    getElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        main ();
        seconds--;
        getElement("time").textContent = seconds;
        if (seconds <= 0 ) clearInterval(countdown);
        if (seconds == 10) getElement("time").style.color = "#ffffff";
    }, 1000)
}
function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value;
    }catch {
        //alert("unenq sxal")
        return;
    }
    correctAnswer++;
    getElement("score").innerHTML = correctAnswer
    clearInterval(checkInterval);
}
function finish(){
    clearInterval(checkInterval);
    let percentage = 100;
    getElement("alertaccuracy").innerHTML = `${percentage}%`
}
let checkInterval = setInterval(check, 50)
timer();