

let div = document.querySelector(".seconds");

// function givesec(){
    // }
    
    // div.innerHTML = givesec();
    setInterval(()=>{
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();

        let displayH = document.querySelector(".hours");
        let displaym = document.querySelector(".min");
        let displays = document.querySelector(".seconds");

        displayH.innerHTML = hours;
        displaym.innerHTML = minutes;
        displays.innerHTML = seconds;
        console.log(` The current time is:  ${hours}:${minutes}:${seconds}`);
}, 1000)