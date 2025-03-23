function showResult(event){
    event.preventDefault();
    let height = parseFloat(document.getElementById("height").value)/100;
    console.log(height);
    let weight = parseFloat(document.getElementById("weight").value);
    console.log(weight);

    let bmi = weight / (height*height);

    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    console.log(height);
    console.log(weight);
    console.log(bmi)
}