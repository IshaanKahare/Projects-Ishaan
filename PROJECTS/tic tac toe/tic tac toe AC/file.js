let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("resetGame");

turnOf0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnOf0){
            box.innerHTML = "o"
            turnOf0 = false;
        }else{
            box.innerHTML = "x"
            turnOf0 = true;
        }
        box.disabled = true;
    })
})