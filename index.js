checkWhoWon = [
    ["It's a tie", "You loose! Paper beats rock", "You win! Rock beats scissor"],
    ["You win! Paper beats rock", "It's a Tie", "You loose! Scissor beats paper"],
    ["You loose! Rock beats scissor", "You win! Scissor beats paper", "It's a tie"]
]


const rules = document.querySelector('.container');
const btn = document.querySelector('.btns');
const closeBtn = document.querySelector('.rules .close');
const bodyImage = document.querySelector('.triangle');
const gameplay = document.querySelector('.gameplay');
const main = document.querySelector('.main');
const startOver = document.querySelector('.startOver');


let score = 0;


startOver.addEventListener('click', () => {
    score = 0;
    document.querySelector('.num').textContent = score;
});


// bodyImage.style.display = "none";
// gameplay😆.style.display = "none";

let playerElement = document.createElement('div');
let computerElement = document.createElement('div');



const paper = document.querySelector('.paper2');
const scissor = document.querySelector('.scissor3');
const rock = document.querySelector('.rock1');

const paperClone = paper.cloneNode(true);
const scissorClone = scissor.cloneNode(true);
const rockClone = rock.cloneNode(true);

const whoWon = document.createElement('div');
const playerPicked = document.createElement('div');
const computerPicked = document.createElement('div');
whoWon.classList.add("whoWon");
whoWon.classList.add("gameplay");
whoWon.setAttribute('style', "flex-direction: row; gap:350px; padding: 10px;");
main.appendChild(whoWon);
whoWon.appendChild(playerPicked);
whoWon.appendChild(computerPicked);
// whoWon.style.display = "none";


whoWon.style.display = "none";
const youPicked = document.createElement('p');
youPicked.textContent = "YOU PICKED";
const computer = document.createElement('p');
computer.textContent = "COMPUTER PICKED";

playerPicked.appendChild(youPicked);
playerPicked.appendChild(playerElement);

computerPicked.appendChild(computer);
computerPicked.appendChild(computerElement);

youPicked.classList.add("center");
computer.classList.add("center");
whoWon.lastElementChild.lastElementChild.style["margin-left"] = "10px";


const checker = () => {
    bodyImage.style.display = "none";
    gameplay.style.display = "none";
    whoWon.style.display = "flex";
    showWhoWon.style.display = "inline";

    console.log(whoWon.firstElementChild)
    whoWon.firstElementChild.replaceChild(playerElement, whoWon.firstElementChild.lastElementChild);
    console.log(playerElement)
    // playerPicked.appendChild(playerElement);

    // computerPicked.appendChild(computer);
    // computerPicked.appendChild(computerElement);
    whoWon.lastElementChild.replaceChild(computerElement, whoWon.lastElementChild.lastElementChild);




    youPicked.classList.add("center");
    computer.classList.add("center");
    whoWon.lastElementChild.lastElementChild.style["margin-left"] = "10px";
}


const showWhoWon = document.createElement('p');
main.appendChild(showWhoWon);



let playerChoice;
let computerChoice;

const startAgain = () => {
    bodyImage.style.display = "inline";
    gameplay.style.display = "flex";
    whoWon.style.display = "none";
    showWhoWon.style.display = "none";
};

const getComputerChoice = (className) =>{
    computerChoice = Math.floor((Math.random() * 3));
    winOrLoose = checkWhoWon[playerChoice-1][computerChoice];
    showWhoWon.textContent = winOrLoose;

    if (winOrLoose.includes("win")){
        score += 1;
    }else{
        if (score > 0){
            score -= 1;
        }
    };
    console.log(score)
    document.querySelector('.num').textContent = score;
    showWhoWon.classList.add("showWhoWon");
    console.log(className)
    playerElement = document.querySelector(`.${className}`).cloneNode(true);
    if (computerChoice == 0){
        computerElement = rockClone;
    }else if (computerChoice == 1){
        computerElement = paperClone;
    }else{
        computerElement = scissorClone;
    }

    console.log(computerElement, playerElement)
    checker();
    setTimeout(startAgain, 1000);
}



const whoClicked = (className) =>{
    playerChoice = parseInt(String(className).substring(String(className).length-1));
    getComputerChoice(className);
}

paper.addEventListener('click', () => {whoClicked(paper.className)});

rock.addEventListener('click', () => {whoClicked(rock.className)});

scissor.addEventListener('click', () => {whoClicked(scissor.className)});




console.log(btn)
btn.addEventListener('click', () => {
    rules.style.display = "flex";
    rules.classList.add("container-show");
});

closeBtn.addEventListener('click', () => {
    rules.classList.add("container-hide");
    setTimeout(() => {
        rules.style.display= 'none';
        rules.classList.remove("container-show", "container-hide");
    }, 200);
});


const mediaQuery = () => {
    console.log(window.screen.width)
    if (window.screen.width > 680){
        console.log("hello");
        whoWon.style.gap = "300px";
    }
    else if (window.screen.width < 400){
        whoWon.style.gap = `45px`;
    }
    else{
        whoWon.style.gap = `${window.screen.width - 350 - 40}px`
    }
}

window.addEventListener('resize', () => {
    mediaQuery();
});

mediaQuery();







// let nnum = Number(prompt("How many rounds do you wanna play?: "));







