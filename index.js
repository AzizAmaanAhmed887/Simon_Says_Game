let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false; //Represents game isn't started
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', () => {
    if (started === false) {
        console.log("Game Started")
    }
    started = true;

    levelUp();
});

//Function to flash the button
function gameFlash(btn) { //Make the white.
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 150);
}

function userFlash(btn) { // make the color green.
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 150);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerHTML = `Level: ${level}`;
    //game chooses a random button
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b> ${level} </b> </br>Press Any key to start.`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
           document.querySelector('body').style.backgroundColor = "white";
        } , 250);
        reset();
    }
}


function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll('.btn');
for (let btn of allBtn) {
    btn.addEventListener('click', btnPress);
}

reset = () => {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}