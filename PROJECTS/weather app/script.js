async function on_Click (){
    let city = document.getElementById("city").value;
    // let city = "Mumbai"
    const apiKey = "fa45b1e595fae911b06094674ebf6012";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let weatherDiv = document.querySelector(".results");

    weatherDiv.innerHTML = "";

    
    if(city != ""){
        try{
            await (await fetch (url)).json()
            .then(data => {
                console.log(data);
                const weather = console.log(`
                    ${data.name}
                    ${data.main.temp} C
                    ${data.main.humidity}%
                `);

                (()=>{
                    let heading = document.createElement("h2");
                    let headingText = document.createTextNode(city);
                    heading.appendChild(headingText);
                    heading.style.textDecoration = "underline";
                    let weatherDiv = document.querySelector(".results");
                    weatherDiv.appendChild(heading);

                    
                    let temp = document.createElement("h2");
                    let tempText = document.createTextNode("Temperature " + data.main.temp + " °C")
                    temp.appendChild(tempText);
                    weatherDiv.appendChild(temp);

                    let humdity = document.createElement("h2");
                    let humidityText = document.createTextNode(data.main.humidity + " % Humidity")
                    humdity.appendChild(humidityText);
                    weatherDiv.appendChild(humdity);
                })();
            })
        } catch(error){
            console.log(error);
        }
    }else{
        alert("TYPE SOMETHING")
    }
}

// on_Click();

