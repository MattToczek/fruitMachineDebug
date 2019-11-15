//Mr Seagull Wrote this - IT IS AWESOMMMMMMMEEEEEEEEEEE

document.getElementById("Start").addEventListener("click", () => {
    if(balance >= bet){
    spin();
    } else {
        modal.style.display = "flex";
    }

})

//Set balnce to 500
let balance = 500;
let bet = 1;
let winOrder;
let incBetBtn = document.getElementById("betBtn");
let betInp = document.getElementById("incBetInp");
let modal = document.getElementById("modWrap");
let modalBtn = document.getElementById("modalClose");
let final = [];
let resetBtn = document.getElementById("resetBtn");


const increaseBet = () =>{
    bet = bet + 2;
}


function loser(){
    document.getElementById("status").src = "images/Fail.png"
}

function winner(){
    document.getElementById("status").src = "images/BigWin.png"
    balance += bet*winOrder;
}


function spin(){
    balance -= bet;

    final.push(spinReel("r1"))
    final.push(spinReel("r2"))
    final.push(spinReel("r3"))
    //Check if the reels match up by checking 1 and 0 & 0 and 2
    
    winCheck();

}    

let winCheck = () => {
    if (final[0] == final[1] && final[0] == final[2]){
        winner()
    }
    else{
        loser()
    }
    update_theScrene();
}

function spinReel(reel){
    winOrder = Math.floor(Math.random()*6) +1;
    if (winOrder == 1){
        document.getElementById(reel).src = "images/Cherry.png"
    }
    if (winOrder == 2){
        document.getElementById(reel).src = "images/Grapes.png"
    }
    if (winOrder == 3){
        document.getElementById(reel).src = "images/Lemon.png"
    }
    if (winOrder == 4){
        document.getElementById(reel).src = "images/Watermelon.png"
    }
    if (winOrder == 5){
        document.getElementById(reel).src = "images/Strawberry.png"
    }
    if (winOrder == 6){
        document.getElementById(reel).src = "images/Orange.png"
    }
    return winOrder;
}

const update_theScrene = () => {
    document.getElementById("balanceDisplay").innerHTML = balance;

}

incBetBtn.addEventListener('click', () => {
    if(betInp.value <=100 && betInp.value > 0){
        bet = betInp.value;
        betInp.value = null;
        
    } else{
        betInp.value = null;
        betInp.placeholder = "Please enter 1-100";
    }
})

modalBtn.addEventListener('click', () => {
    modal.style.display = "none";
})

resetBtn.addEventListener('click', () => {
    window.location.reload();
})

update_theScrene();