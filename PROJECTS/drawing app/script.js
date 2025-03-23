let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentColor  ='black';


canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDrawing(e){
    isDrawing = true;
    [lastX , lastY] = [e.offsetX , e.offsetY];
}

function draw(e){
    if(!isDrawing) return;

    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = currentColor;
    ctx.stroke();
    [lastX , lastY] = [e.offsetX , e.offsetY];

}

function stopDrawing(){
    isDrawing = false;
}

const eraser = document.getElementById('eraser');
eraser.addEventListener('click', ()=>{
    currentColor = 'white';
})

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (e) => {
    currentColor = e.target.value;
});


