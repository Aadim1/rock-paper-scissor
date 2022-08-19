const rules = document.querySelector('.container');
const btn = document.querySelector('.btns');
const closeBtn = document.querySelector('.rules .close');
const main = document.querySelector('body');

const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const rock = document.querySelector('.rock');

console.log(main);
main.addEventListener('click', () => {
    rules.style.add("container-hide");
    setTimeout(() => {
        rules.style.display= 'none';
        rules.classList.remove("container-show", "container-hide");
    }, 200);
});

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





checkWhoWon = [
    ["It's a tie", "You loose! Paper beats rock", "You win! Rock beats scissor"],
    ["You win! Paper beats rock", "It's a Tie", "You loose! Scissor beats paper"],
    ["You loose! Rock beats scissor", "You win! Scissor beats paper", "It's a tie"]
]


// let nnum = Number(prompt("How many rounds do you wanna play?: "));

const getComputerChoice = () =>{
    let val = Number(prompt("Input a number"));
    const computerChoice = Math.floor((Math.random() * 2)) + 1;
    alert(checkWhoWon[val][computerChoice]);
    console.log(computerChoice);
    console.log(val)
}

// for (let i = 0; i < nnum; i++){
//     getComputerChoice();
// }



