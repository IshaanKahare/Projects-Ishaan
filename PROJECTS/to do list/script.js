let lists = document.querySelectorAll(".listelement");

function newElement() {


    let inputValue = document.getElementById("addTitle").value;

    let li = document.createElement("li");
    let liText = document.createTextNode(inputValue);
    li.appendChild(liText);

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("ticked");
    li.appendChild(checkBox);



    if(inputValue === ""){
        alert("You need to type someting there");
    }else {
        let checked =true;
        document.querySelector(".list").appendChild(li);
        li.classList.add("listelement");
        li.addEventListener("click",()=>{
            if(checked){
                li.classList.add("checkedList");
                checked = false;
                console.log(checked);
                }else{
                li.classList.remove("checkedList");
                checked = true;
                console.log(checked);
                };
        })
    };

    
    function checkTrue(){
        let ifChecked = document.querySelectorAll(".ticked");
        ifChecked.forEach((box)=>{
            if(box.checked == true){
                li.style.visibility = "hiddden";
            };
        });
    };

    
    let clearButton = document.querySelector(".clearList");
    clearButton.addEventListener("click",()=>{
        let input = document.querySelectorAll(".ticked");
        input.forEach((tick)=>{
            if(tick.checked){
                tick.parentElement.style.display = "none";
            }
        })
})

};


lists.forEach((list)=>{
    let checked = true;
    list.addEventListener("click", ()=>{
        if(checked){
        list.classList.add("checkedList");
        checked = false;
        console.log(checked);
        }else{
        list.classList.remove("checkedList");
        checked = true;
        console.log(checked);
        };
    });
});

let clearButton = document.querySelector(".clearList");
clearButton.addEventListener("click",()=>{
    let input = document.querySelectorAll(".ticked");
    input.forEach((tick)=>{
        if(tick.checked){
            tick.parentElement.style.display = "none";
        };
    });
});







