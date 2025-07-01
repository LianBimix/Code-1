"use strict";
var Quizz;
(function (Quizz) {
    let questionA = Quizz.data[Quizz.data.qu1];
    let QuestionB = [Quizz.data.qu2];
    let QuestionC = [Quizz.data.qu3];
    let QuestionD = [Quizz.data.qu4];
    let QuestionE = [Quizz.data.qu5];
    let q = [questionA, QuestionB, QuestionC, QuestionD, QuestionE];
    function getRandomQuestion() {
        if (q.length == 0) {
            console.log("No more questions");
            return [];
        }
        const ind = Math.floor(Math.random() * q.length);
        const selectedQuestionArray = q[ind];
        q = q.slice(0, ind).concat(q.slice(ind + 1));
        return selectedQuestionArray;
    }
    function question1() {
        let question1 = getRandomQuestion();
        console.log("Question 1: " + q[0]);
        console.log("Possible answers: ");
        console.log(Quizz.data.answer);
        let guess = parseInt(prompt("Your answer (1-5): "));
        if (guess == Quizz.data.solution) {
            console.log("Correct!");
        }
        else {
            console.log("Wrong! The correct answer was: " + Quizz.data.solution);
        }
    }
    let question2 = getRandomQuestion();
    if (question2) {
        console.log(`Question 2: ${question2[0]}`);
    }
    let question3 = getRandomQuestion();
    if (question3) {
        console.log(`Question 3: ${question3[0]}`);
    }
    let question4 = getRandomQuestion();
    if (question4) {
        console.log(`Question 4: ${question4[0]}`);
    }
    let question5 = getRandomQuestion();
    if (question5) {
        console.log(`Question 5: ${question5[0]}`);
    }
    startQuiz();
    let y = 0;
    function startQuiz() {
        console.log("Quiz started");
        console.log("Here's your first question:");
        question1();
    }
})(Quizz || (Quizz = {}));
