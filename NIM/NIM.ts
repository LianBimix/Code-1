namespace NIM {
    console.log("Let's play NIM!");

    let piles = { p1: 0, p2: 0, p3: 0, p4: 0 };

    let playerlist = { play1: "", play2: "" };
    playerlist.play1 = prompt("Enter name for Player 1:", "player1")!;
    playerlist.play2 = prompt("Enter name for Player 2:", "player2")!;
    let aPlayer: string = playerlist.play1;
    console.log(playerlist);


    fillRows();
    playGame();

    function fillRows() {
        piles.p1 = parseInt(prompt("Enter number over 1: ")!);
        console.log("first number is " + piles.p1);
        piles.p2 = parseInt(prompt("Enter number over 1: ")!);
        console.log("second number is " + piles.p2);
        piles.p3 = parseInt(prompt("Enter number over 1: ")!);
        console.log("third number is " + piles.p3);
        piles.p4 = parseInt(prompt("Enter number over 1: ")!);
        console.log("fourth number is " + piles.p4);

        console.log(piles);
    }

    function playerTurn() {
        let row: string = prompt("Choose a row to play from: 1 to 4")!;
        let fillamount: number = parseInt(prompt("How many to remove from row " + row + "? (Number must be less than or equal to the number in the row and greater than 0)")!);

        switch (row) {
            case "1":
                piles.p1 -= fillamount;
                console.log("Row 1 now has " + piles.p1 + " items.");
                break;
            case "2":
                piles.p2 -= fillamount;
                console.log("Row 2 now has " + piles.p2 + " items.");
                break;
            case "3":
                piles.p3 -= fillamount;
                console.log("Row 3 now has " + piles.p3 + " items.");
                break;
            case "4":
                piles.p4 -= fillamount;
                console.log("Row 4 now has " + piles.p4 + " items.");
                break;
        }
    }
    function displayState() {
        console.log("Current state of the game:");
        console.log("Row 1: " + piles.p1);
        console.log("Row 2: " + piles.p2);
        console.log("Row 3: " + piles.p3);
        console.log("Row 4: " + piles.p4);
        console.log("It's " + aPlayer + "'s turn.");

    }

    function changePlayer() {
        switch (aPlayer) {
            case playerlist.play2:
                aPlayer = playerlist.play1;
                break;
            case playerlist.play1:
                aPlayer = playerlist.play2;
                break;
        }

    }
    function checkWinner() {
        if (piles.p1 + piles.p2 + piles.p3 + piles.p4 == 0) {
            return true;
        }
        else {
            return false;
        }

    }
    function showWinner(player: string) {
        console.log("Congratulations " + player + "! You have won the game!");
    }
    function playGame() {
        displayState();
        playerTurn();
        changePlayer();
        let winner = checkWinner();
        if (winner == true) {
            showWinner(aPlayer);
        }
        else {
            playGame();
        }
    }
}