let boxes = document.querySelectorAll(".box");
let message = document.getElementById("message")
let newGame = document.getElementById("new-game-hidden")

let Oturn = true;

const winnerBox = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let count  = 0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(Oturn){
            box.innerHTML = "O";
            Oturn = false;
        }else {
            box.innerHTML = "X";
            Oturn = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
    });
});

let disabledbox = () => {
    for(let box of boxes){
        box.disabled = true;
    };
};

let enabledbox = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    };
};

newGame.addEventListener("click",()=>{
    message.innerText = "Tic Tac Toe";
    newGame.style.visibility ="hidden";
    Oturn = true;
    enabledbox();
});

let showWinner = (winner) => {
    message.innerHTML = `${winner} You won`;
    newGame.style.visibility ="visible";
    disabledbox();
};

let checkWinner = () => {
    for(let pattern of winnerBox){
        let postnVal1 = boxes[pattern[0]].innerText;
        let postnVal2 = boxes[pattern[1]].innerText;
        let postnVal3 = boxes[pattern[2]].innerText;

        if(postnVal1 != "" && postnVal2 != "" && postnVal3 != ""){
            if(postnVal1 === postnVal2 && postnVal2 === postnVal3){
                showWinner(postnVal1)
                return true;
            }
        };
    };
};