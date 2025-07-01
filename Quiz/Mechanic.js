"use strict";
var Quizz;
(function (Quizz) {
    let questionA = Quizz.data[0];
    let questionB = Quizz.data[1];
    let questionC = Quizz.data[2];
    let questionD = Quizz.data[3];
    let questionE = Quizz.data[4];
    let q = [questionA, questionB, questionC, questionD, questionE];
    function getRandomQuestion() {
        if (q.length == 0) {
            console.log("No more questions");
            return [];
        }
        else {
            const index = Math.floor(Math.random() * q.length);
            const selectedQuestionArray = q[index];
            q = q.splice(0, index);
            return [];
        }
    }
    function question1() {
        let question1 = getRandomQuestion();
        console.log("Question 1: " + question1);
        console.log("Possible answers: ");
        console.log(Quizz.data.answer);
        let guess = parseInt(prompt("Your answer (choose one or multiple): "));
        if (guess == Quizz.data.solution) {
            console.log("Correct!");
            y++;
        }
        else {
            console.log("Wrong! The correct answer was: " + Quizz.data.solution);
        }
        question2();
    }
    function question2() {
        let question2 = getRandomQuestion();
        console.log("Question 2: " + question2);
        console.log("Possible answers: ");
        console.log(Quizz.data.answer);
        let guess = parseInt(prompt("Your answer (choose one or multiple): "));
        if (guess == Quizz.data.solution) {
            console.log("Correct!");
            y++;
        }
        else {
            console.log("Wrong! The correct answer was: " + Quizz.data.solution);
        }
        question3();
    }
    function question3() {
        let question3 = getRandomQuestion();
        console.log("Question 3: " + question3);
        console.log("Possible answers: ");
        console.log(Quizz.data.answer);
        let guess = parseInt(prompt("Your answer (choose one or multiple): "));
        if (guess == Quizz.data.solution) {
            console.log("Correct!");
            y++;
        }
        else {
            console.log("Wrong! The correct answer was: " + Quizz.data.solution);
        }
        question4();
    }
    function question4() {
        let question4 = getRandomQuestion();
        console.log("Question 4: " + question4);
        console.log("Possible answers: ");
        console.log(Quizz.data.answer);
        let guess = parseInt(prompt("Your answer (choose one or multiple): "));
        if (guess == Quizz.data.solution) {
            console.log("Correct!");
            y++;
        }
        else {
            console.log("Wrong! The correct answer was: " + Quizz.data.solution);
        }
        question5();
    }
    function question5() {
        let question5 = getRandomQuestion();
        console.log("Question 5: " + question5);
        console.log("Possible answers: ");
        console.log(Quizz.data.answer);
        let guess = parseInt(prompt("Your answer (choose one or multiple): "));
        if (guess == Quizz.data.solution) {
            console.log("Correct!");
            y++;
        }
        else {
            console.log("Wrong! The correct answer was: " + Quizz.data.solution);
        }
        endQuiz();
    }
    startQuiz();
    let y = 0;
    function startQuiz() {
        console.log("Quiz started");
        console.log("Here's your first question:");
        question1();
    }
    function endQuiz() {
        console.log("Quiz ended!");
        console.log("You answered " + y + " questions correctly.");
        if (y >= 3) {
            console.log("Congratulations! You passed the quiz :)");
        }
        else {
            console.log("Sorry, you did not pass the quiz :( Try again!");
        }
    }
})(Quizz || (Quizz = {}));
