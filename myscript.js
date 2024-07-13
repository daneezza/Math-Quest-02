const numQuestions = 10;
let correctAnswers = [];
let correctCount = 0;

function generateQuestions() {
    document.body.style.backgroundColor = 'darkkhaki';
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    correctAnswers = [];
    
    for (let i = 0; i < numQuestions; i++) {
        let x = Math.floor(Math.random() * 101);
        let y = Math.floor(Math.random() * 101);
        let operators = ['+', '-', '*'];
        let operator = operators[Math.floor(Math.random() * operators.length)];

        let questionText = `${x} ${operator} ${y} = ...`;
        let correctAnswer;
        switch (operator) {
            case '+':
                correctAnswer = x + y;
                break;
            case '-':
                correctAnswer = x - y;
                break;
            case '*':
                correctAnswer = x * y;
                break;
        }

        correctAnswers.push(correctAnswer);

        questionsContainer.innerHTML += `
            <div>
                <span class="question">${questionText}</span>
                <input type="text" class="userAnswer">
                <div>
                    <span class="answer"></span>
                    <span class="feedback"></span>
                </div><br>
            </div>
        `;
    }
}

function checkAllAnswers() {
    const userAnswers = document.getElementsByClassName('userAnswer');
    const feedbacks = document.getElementsByClassName('feedback');
    const answers = document.getElementsByClassName('answer');
    correctCount = 0;

    for (let i = 0; i < numQuestions; i++) {
        let userAnswer = userAnswers[i].value;
        answers[i].innerHTML = userAnswer;
        feedbacks[i].classList.remove('correct', 'incorrect');

        if (parseInt(userAnswer) === correctAnswers[i]) {
            feedbacks[i].innerHTML = '&checkmark; Correct';
            feedbacks[i].classList.add('correct');
            correctCount++;
        } else {
            feedbacks[i].innerHTML = '&cross; Correct Answer is: ' + correctAnswers[i];
            feedbacks[i].classList.add('incorrect');
        }
    }

    updateScore();
}

function updateScore() {
    document.getElementById('score').innerHTML = correctCount * 10;
    if (correctCount * 10 < 20) {
        document.body.style.backgroundColor = 'lightcoral';
    } else {
        document.body.style.backgroundColor = 'lightgreen';
    }
}

// Generate the questions on page load
generateQuestions();
