let input = document.getElementById('time');
const button = document.getElementById('show');
let display = document.getElementById('displayCountdown');

// debugger;

// button.addEventListener('click',()=>{
//     let time = parseFloat(input.value);

//     if(input.value != ''){
//         let interval = setInterval(()=>{
//             if(time!= -1){
//                 display.innerText = time;
//                 time--;
//                 console.log(time);
//             }else {
//                 clearInterval(interval)
//             }
//         },1000)
//     }else {alert("kuch likh bc")}
// });


// (()=>{
//     time = 60
//     let interval = setInterval(()=>{
//         if(time != 0 ){
//             console.log(time);
//             display.innerText = time;    
//             time--;
//         }else {
//             clearInterval(interval);
//         }
//     },1000)
// }    
// )();   


function setCountdown (min, repeat){
    let seconds = min *60;
    let interval;

    function updateDisplay(){
        
        display.innerText = seconds;
        if(seconds <= 0 ){
            clearInterval(interval)
            if(repeat > 1){
                setCountdown(min, repeat-1)
            }else if(repeat = 1){
                display.innerText= "khatam,tatta bye bye finish"
            }
        }else{
            seconds--;
        }
    }

    interval = setInterval(updateDisplay, 1000);
}

button.addEventListener('click',()=>{setCountdown(input.value,1)})

// setCountdown(1,2);