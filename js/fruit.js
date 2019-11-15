//Mr Seagull Wrote this - IT IS AWESOMMMMMMMEEEEEEEEEEE



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
let status = document.getElementById("status");
let bars = 0;


document.getElementById("Start").addEventListener("mousedown", () => {          //Changes image to $$$ when button is pressed
    status.src = "images/Dollars.png";              

})

document.getElementById("Start").addEventListener("click", () => {              //checks balance is more than bet and plays, if true when button is pressed
    if(balance >= bet){
    spin();
    } else {
        modal.style.display = "flex";                                           //brings up modal when balance is insufficient
    }

})


function loser(){                                                               //changes image to fail if no win
    status.src = "images/Fail.png"
}

function winner(){                                                              //changes image to big win if win
    document.getElementById("status").src = "images/BigWin.png"
    balance += bet*winOrder + bet;
}


function spin(){                                                                //updates balance, populates 'final' array and calls winCheck()
    balance -= bet;

    final = [spinReel("r1"), spinReel("r2"), spinReel("r3")];

    //Check if the reels match up by checking 1 and 0 & 0 and 2
    
    winCheck();

}    

let winCheck = () => {                                                         
    if (final[0] == final[1] && final[0] == final[2]){                          //checks if reels are same
        winner();
    } else if (bars == 13 || bars == 11){                                       // checks for a mix of bars
        winOrder = 7;
        winner();

    }
    else{                                                                       //calls loser()
        loser();
    }

    bars=0;                                                                     //resets bars variable, after each play     
    update_theScrene();                                                         //updates screen (balance read)
}

function spinReel(reel){
    winOrder = Math.floor(Math.random()*9) +1;                                  //assigns random values to winOrder
    switch (winOrder) {                                                         //returns number 1-9 relating to each possible image for reel
        case 1: 
            document.getElementById(reel).src = "images/Cherry.png"             
            break;
        
        case 2:
            document.getElementById(reel).src = "images/Grapes.png"
            break;

        case 3:
            document.getElementById(reel).src = "images/Lemon.png"
            break;

        case 4:
            document.getElementById(reel).src = "images/Watermelon.png"
            break;
        
        case 5:
            document.getElementById(reel).src = "images/Strawberry.png"
            break;

        case 6:
            document.getElementById(reel).src = "images/Orange.png"
            break;
        
        case 7:
            document.getElementById(reel).src = "images/OneBar.png"
            winOrder = 1;
            bars += 5;                                                      //updates bars by 5
            break;

        case 8:
            document.getElementById(reel).src = "images/ThreeBars.png"
            winOrder = 10;
            bars += 3;                                                      //updates bars by 5
            break;

 
    }

    return winOrder;
}

const update_theScrene = () => {
    document.getElementById("balanceDisplay").innerHTML = balance;

}

incBetBtn.addEventListener('click', () => {                                 //gets input and resets bet variable to it if input = 1-100
    if(betInp.value <=100 && betInp.value > 0){
        bet = betInp.value;
        betInp.value = null;
        
    } else{                                                                 // sets placeholder to reminder if not valid number
        betInp.value = null;
        betInp.placeholder = "Please enter 1-100";
    }
})

modalBtn.addEventListener('click', () => {                                  // gets rid of modal window
    modal.style.display = "none";
})

resetBtn.addEventListener('click', () => {                                  //reloads game
    window.location.reload();
})

update_theScrene();