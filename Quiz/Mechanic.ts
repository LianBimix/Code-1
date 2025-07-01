namespace Quizz {

    let questionA: string = data[0];
    let questionB: string = data[1];
    let questionC: string = data[2];
    let questionD: string = data[3];
    let questionE: string = data[4];

    let q = [questionA, questionB, questionC, questionD, questionE];


    function getRandomQuestion(): string[] {

        if (q.length == 0) {
            console.log("No more questions");
            return [];
        }

        else {
            const index: number = Math.floor(Math.random() * q.length);
            const selectedQuestionArray = q[index];

            q = q.splice(0, index);
            return [];
        }
    }

    function question1(): void {
        let question1 = getRandomQuestion();
        console.log("Question 1: " + question1);
        console.log("Possible answers: ");
        console.log(data.answer);
        let guess = parseInt(prompt("Your answer (choose one or multiple): ")!);
        if (guess == data.solution) {
            console.log("Correct!");
            y++;
        } else {
            console.log("Wrong! The correct answer was: " + data.solution);
        }
        question2();
    }
    function question2(): void {
        let question2 = getRandomQuestion();
        console.log("Question 2: " + question2);
        console.log("Possible answers: ");
        console.log(data.answer);
        let guess = parseInt(prompt("Your answer (choose one or multiple): ")!);
        if (guess == data.solution) {
            console.log("Correct!");
            y++;
        }
        else {
            console.log("Wrong! The correct answer was: " + data.solution);
        }
        question3();
    }
    function question3(): void {
        let question3 = getRandomQuestion();
        console.log("Question 3: " + question3);
        console.log("Possible answers: ");
        console.log(data.answer);
        let guess = parseInt(prompt("Your answer (choose one or multiple): ")!);
        if (guess == data.solution) {
            console.log("Correct!");
            y++;
        }
        else {
            console.log("Wrong! The correct answer was: " + data.solution);
        }
        question4();
    }

    function question4(): void {
        let question4 = getRandomQuestion();
        console.log("Question 4: " + question4);
        console.log("Possible answers: ");
        console.log(data.answer);
        let guess = parseInt(prompt("Your answer (choose one or multiple): ")!);
        if (guess == data.solution) {
            console.log("Correct!");
            y++;
        }
        else {
            console.log("Wrong! The correct answer was: " + data.solution);
        }
        question5();
    }

    function question5(): void {
        let question5 = getRandomQuestion();
        console.log("Question 5: " + question5);
        console.log("Possible answers: ");
        console.log(data.answer);
        let guess = parseInt(prompt("Your answer (choose one or multiple): ")!);
        if (guess == data.solution) {
            console.log("Correct!");
            y++;
        }
        else {
            console.log("Wrong! The correct answer was: " + data.solution);
        }
        endQuiz();
    }

    startQuiz();
    let y = 0;

    function startQuiz(): void {
        console.log("Quiz started");
        console.log("Here's your first question:");
        question1();
    }
    function endQuiz(): void {
        console.log("Quiz ended!");
        console.log("You answered " + y + " questions correctly.");
        if (y >= 3) {
            console.log("Congratulations! You passed the quiz :)");
        } else {
            console.log("Sorry, you did not pass the quiz :( Try again!");
        }
    }
}  