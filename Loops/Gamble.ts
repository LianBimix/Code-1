namespace Loops {
    console.log("Do you want to Gamble?");
    console.log("Just kidding, you don't have a choice!");

    let d4Amount:number;
    let d6Amount:number;
    let d8Amount:number;
    let d10Amount:number;
    let d12Amount:number;
    let d20Amount:number;

    let total:number; 
    let total1:number; 
    let total2:number; 
    let total3:number; 
    let total4:number; 
    let total5:number; 

    ammountOfDice(); 
    
    function ammountOfDice() {
        d4Amount = parseInt(prompt("How many d4 do you want to roll?")!);
        console.log("You will roll " + d4Amount + " d4's.");
        d6Amount = parseInt(prompt("How many d6 do you want to roll?")!);
        console.log("You will roll " + d6Amount + " d6's.");
        d8Amount = parseInt(prompt("How many d8 do you want to roll?")!);
        console.log("You will roll " + d8Amount + " d8's.");  
        d10Amount = parseInt(prompt("How many d10 do you want to roll?")!);
        console.log("You will roll " + d10Amount + " d10's.");
        d12Amount = parseInt(prompt("How many d12 do you want to roll?")!);
        console.log("You will roll " + d12Amount + " d12's.");
        d20Amount = parseInt(prompt("How many d20 do you want to roll?")!);
        console.log("You will roll " + d20Amount + " d20's.");
    }

    //rollingStart(); 
    rollingD4();

    function rollingD4() {
        let total: number[] = []
        if (d4Amount > 0) {
            for (let i: number = 0; i < d4Amount; i++){
                let result: number = Math.floor(Math.random()*4+1);
                total.push(result);
                console.log("You rolled a d4 and got: " + result);
            }
        }
        else {
            console.log("You didn't roll any d4's.");
        }
        rollingD6();
    }

    function rollingD6() {
        let total1: number[] = []
        if (d6Amount > 0) {
            for (let i: number = 0; i < d6Amount; i++){
                let result: number = Math.floor(Math.random()*6+1);
                total1.push(result);
                console.log("You rolled your d6 and got: " + result);
            }
        }
        else {
            console.log("You didn't roll any d6's.");
        }
        rollingD8();
    }

    function rollingD8() {
        let total2: number[] = []
        if (d8Amount > 0) {
            for (let i: number = 0; i < d8Amount; i++){
                let result: number = Math.floor(Math.random()*8+1);
                total2.push(result);
                console.log("You rolled your d8 and got: " + result);
            }
        }
        else {
            console.log("You didn't roll any d8's.");
        }
        rollingD10();
    }

    function rollingD10() {
        let total3: number[] = []
        if (d10Amount > 0) {
            for (let i: number = 0; i < d4Amount; i++){
                let result: number = Math.floor(Math.random()*10+1);
                total3.push(result);
                console.log("You rolled d10 and got: " + result);
            }
        }
        else {
            console.log("You didn't roll any d10's.");
        }
        rollingD12();
    }

    function rollingD12() {
        let total4: number[] = []
        if (d12Amount > 0) {
            for (let i: number = 0; i < d12Amount; i++){
                let result: number = Math.floor(Math.random()*12+1);
                total4.push(result);
                console.log("You rolled d12 and got: " + result);
            }
        }
        else {
            console.log("You didn't roll any d12's.");
        }
        rollingD20();
    }
    function rollingD20() {
        let total5: number[] = []
        if (d20Amount > 0) {
            for (let i: number = 0; i < d20Amount; i++){
                let result: number = Math.floor(Math.random()*20+1);
                total5.push(result);
            console.log("You rolled d20 and got: " + result);
            }
        }
        else {
            console.log("You didn't roll any d20's.");
        }
       totalSum();
    }
    function totalSum() {
        console.log("The  total sum of the dices you rolled is: ");
        console.log(total + total1 + total2 +total3 + total4 + total5);
    }
    //
    //}
    //function rollingStart() {
    //    console.log("Rolling the dice...");
    //    rollingDice();
        
}