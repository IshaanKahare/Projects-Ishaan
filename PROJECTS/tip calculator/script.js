
let calculateBill= ()=>{
    let bill = parseFloat(document.getElementById("billAmount").value);
    let disCustom = parseFloat(document.getElementById("custom").value);
    let display = document.querySelector(".display")

    display.innerHTML = "";

    if(bill == ""){
        alert("Enter a valid value");
    }else{
        let newAmt = bill * (disCustom/100);
        console.log(newAmt);
        let finalBill = bill + newAmt;
        console.log(finalBill); 
        display.innerHTML = `
        <p id="tipAmount">Tip Amount: $${newAmt.toFixed(2)}</p>
        <p id="totalAmount">Total Amount: $${finalBill.toFixed(2)}</p>
    `;
    }

}

