if ("Who will win".includes("win")){
    console.log(true)
}


const rules = document.querySelector('.container');
const btn = document.querySelector('.btns');
const closeBtn = document.querySelector('.rules .close');
const bodyImage = document.querySelector('.triangle');
const gameplay = document.querySelector('.gameplay');
const main = document.querySelector('.main');

// bodyImage.style.display = "none";
// gameplay.style.display = "none";





const paper = document.querySelector('.paper2');
const scissor = document.querySelector('.scissor3');
const rock = document.querySelector('.rock1');

const paperClone = paper.cloneNode(true);
const scissorClone = scissor.cloneNode(true);
const rockClone = rock.cloneNode(true);
const whoWon = document.createElement('div');
whoWon.classList.add("whoWon");
main.appendChild(whoWon);

whoWon.classList.add("gameplay");
whoWon.setAttribute('style', "flex-direction: row; gap:350px; padding: 10px;")

whoWon.appendChild(paperClone);
whoWon.appendChild(scissorClone);


let playerChoice;
let computerChoice;

const getComputerChoice = () =>{
    computerChoice = Math.floor((Math.random() * 3));
    alert(checkWhoWon[playerChoice-1][computerChoice]);
    console.log(playerChoice-1);
    console.log(computerChoice);
}

const whoClicked = (className) =>{
    console.log(className);
    playerChoice = parseInt(String(className).substring(String(className).length-1));
    getComputerChoice();
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




checkWhoWon = [
    ["It's a tie", "You loose! Paper beats rock", "You win! Rock beats scissor"],
    ["You win! Paper beats rock", "It's a Tie", "You loose! Scissor beats paper"],
    ["You loose! Rock beats scissor", "You win! Scissor beats paper", "It's a tie"]
]


// let nnum = Number(prompt("How many rounds do you wanna play?: "));







