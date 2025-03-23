let newQuestion = document.getElementById('newQuestion');
newQuestion.disabled = true;
let answerChecked = false;

let correctAnswer;


let options = [
    document.getElementById('option1'),
    document.getElementById('option2'),
    document.getElementById('option3'),
    document.getElementById('option4'),
    document.getElementById('option5'),
    document.getElementById('option6')
];

options.forEach((option)=>{
    option.disabled = false;
})

let labels = [
    document.getElementById('label1'),
    document.getElementById('label2'),
    document.getElementById('label3'),
    document.getElementById('label4'),
    document.getElementById('label5'),
    document.getElementById('label6')
];

let key = ['answer_a','answer_b','answer_c','answer_d','answer_e','answer_f'];
let question = document.getElementById('question');

let submit = document.getElementById('submitAnswer');
submit.disabled = true;

let results = document.querySelector('.results');

function correct_Answer(){
    let selectedAnswer;
    options.forEach((option,index)=>{
        if(option.checked){
            selectedAnswer = key[index];
        }
    });
    if(correctAnswer){
        if(selectedAnswer === correctAnswer){
            console.log('Answer is correct');
            results.innerText = "WOW THE ANSWER IS CORRECT";
            results.classList.remove('incorrect');
            results.classList.add('correct');
            setTimeout(()=>{
                getQuestion();
            },2000);
        }else{
            console.log(`Answer is incorrect , correct answer is ${correctAnswer}`);
            results.innerText = "OOP's THE ANSWER IS INCORRECT";
            results.classList.add('incorrect');
            setTimeout(()=>{
                getQuestion();
            },2000);
        };
    }else {
        console.error("API ISSUE NO ANS GIVEN");
        results.innerText = "API ISSUE NO ANS GIVEN";
        // results.classList.remove('correct');
        results.classList.replace('correct',`incorrect`)
        // results.classList.add('incorrect');
            setTimeout(()=>{
                getQuestion();
            },2000);
    }

    answerChecked = true;
    newQuestion.disabled = false;
    options.forEach((option)=>{
        option.disabled = true;
    })
}

function displayQuestions(data){
    question.innerText = data[0].question;
    correctAnswer = data[0].correct_answer;
    key.forEach((key,index)=>{
        if(data[0].answers[key]){
            labels[index].textContent = data[0].answers[key];   
        }else {
            labels[index].style.display = 'none';
            options[index].style.display = 'none';
        }
    })
}

function checkAnswer(){
    answerChecked = true;
    newQuestion.disabled = false;
    options.forEach((option)=>{
        option.disabled = true;
    });
    submit.disabled = false;
}

options.forEach((option)=>{
    option.addEventListener('change',checkAnswer);
})

async function getQuestion (){
    let link = await fetch(`https://quizapi.io/api/v1/questions?apiKey=KaLs1zwOKuqNaLo7YovtVtSV01g5Y0RjcmYRGpRO&limit=1`);
    let data = await link.json();
    console.log(data);
    displayQuestions(data);
    options.forEach((option)=>{
        option.checked = false;
        option.disabled = false;
    });
    results.innerText = '';
};
getQuestion();

newQuestion.addEventListener('click',()=>{
    getQuestion();
});

submit.addEventListener('click',()=>{
    correct_Answer();
})



