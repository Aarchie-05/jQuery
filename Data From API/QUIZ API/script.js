const quizDB = [
    {
        question: "Q1: What is the full form of HTML ? ",
        a: "Hello To My Land",
        b: "Hey Text Markupp Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: Which element represents marked or highlighted text for reference purposes ? ",
        a: "highlight",
        b: "mark",
        c: "strong",
        d: "blink",
        ans: "ans2"
    },
    {
        question: "Q3: Which type attribute of input element sets the element’s value to a string representing a number ? ",
        a: "file",
        b: "email",
        c: "range",
        d: "date",
        ans: "ans3"
    },
    {
        question: "Q4: The interactive element audio with the attribute controls must not appear as a descendant of which element ? ",
        a: "a",
        b: "button",
        c: "audio",
        d: "both a and b",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        };
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;


    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length} ✌ </h3>
            <button class="btn" onclick="location.reload()"> Try Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});