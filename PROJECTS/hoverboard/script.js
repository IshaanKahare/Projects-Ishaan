const container = document.getElementById('box');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const squares = 500;

for(let i=0;i<squares;i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseenter',()=> setColor(square));
    square.addEventListener('mouseout',()=> removeColor(square));
    container.appendChild(square);
}


function setColor(element){
    let color = getRandomColor();
    element.style.background = color;
}


function removeColor(element){
    let color = getRandomColor();
    element.style.background = '#272727';
}

function getRandomColor(){
    return colors[(Math.floor(Math.random()* colors.length))];
}