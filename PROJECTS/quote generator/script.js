let quote = document.querySelector(".displayQuote");
let generate = document.getElementById("generate");

async function  fetchCode() {
    let response = await fetch('https://api.quotable.io/random');
    let data = await response.json();
    console.log(data);
    try{  
        generate.addEventListener("click",()=>{
            quote.innerText = `"${data.content}"`;
        })
    }catch(err){
        quote.innerText = `An error occured`;
    }

};

generate.addEventListener("click",fetchCode);
fetchCode();