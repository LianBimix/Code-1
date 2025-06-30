namespace NIM {
    console.log("Let's play NIM!");
    let player1 = prompt("Enter name for Player 1:");
    let player2 = prompt("Enter name for Player 2:");
    var userInputA = prompt("Enter number over 1: ");
    console.log("first number is " + userInputA);
    var userInputB = prompt("Enter number over 1: ");
    console.log("second number is " + userInputB);
    var userInputC = prompt("Enter number oveer 1: ");
    console.log("third number is " + userInputC);
    var userInputD = prompt("Enter number over 1: ");
    console.log("fourth number is " + userInputD);

    let numberA = (userInputA) !== null ? parseInt(userInputA) : 0;
    let numberB = (userInputB) !== null ? parseInt(userInputB) : 0;
    let numberC = (userInputC) !== null ? parseInt(userInputC) : 0;
    let numberD = (userInputD) !== null ? parseInt(userInputD) : 0;
    let pick = 0;

    function rowA(_a: number): void
    {
        console.log("Active player is " + player1);
        if () {
                pick = parseInt("How many do you want to remove from row A?: ");
                if (pick < _a && pick > 0) {
                    _a -= pick;
                    console.log("Row A now has " + _a + " items.");
                    return;
                }
            else {
                console.log("Your number can't be greater than the given number or less than 1.");
                
            }
        }
    }
}