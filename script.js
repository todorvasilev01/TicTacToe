function myFunc() {
    let button1, button2, button3,
        button4, button5, button6,
        button7, button8, button9;


    button1 = document.getElementById("button1").value;
    button2 = document.getElementById("button2").value;
    button3 = document.getElementById("button3").value;
    button4 = document.getElementById("button4").value;
    button5 = document.getElementById("button5").value;
    button6 = document.getElementById("button6").value;
    button7 = document.getElementById("button7").value;
    button8 = document.getElementById("button8").value;
    button9 = document.getElementById("button9").value;


    //LOGIC FOR X

    let player1Score = 0;
    let player2Score = 0;

    if ((button1 == 'X') && (button2 == 'X') && (button3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("button4").disabled = true;
        document.getElementById("button5").disabled = true;
        document.getElementById("button6").disabled = true;
        document.getElementById("button7").disabled = true;
        document.getElementById("button8").disabled = true;
        document.getElementById("button9").disabled = true;
        player1Score++;
        document.getElementById("player1").textContent = player1Score;
        document.getElementById("player1").style ="color: red";
        
    } else if ((button1 == 'X') && (button4 == 'X') && (button7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button5").disabled = true;
        document.getElementById("button6").disabled = true;
        document.getElementById("button8").disabled = true;
        document.getElementById("button9").disabled = true;
        player1Score++;
        document.getElementById("player1").textContent = player1Score;
        document.getElementById("player1").style ="color: red";

    } else if ((button7 == 'X') && (button8 == 'X') && (button9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("button5").disabled = true;
        document.getElementById("button6").disabled = true;
        player1Score++;
        document.getElementById("player1").textContent = player1Score;
        document.getElementById("player1").style ="color: red";

    } else if ((button3 == 'X') && (button6 == 'X') && (button9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("button5").disabled = true;
        document.getElementById("button7").disabled = true;
        document.getElementById("button8").disabled = true;
        player1Score++;
        document.getElementById("player1").textContent = player1Score;
        document.getElementById("player1").style ="color: red";


    } else if ((button3 == 'X') && (button5 == 'X') && (button7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("button6").disabled = true;
        document.getElementById("button8").disabled = true;
        document.getElementById("button9").disabled = true;
        player1Score++;
        document.getElementById("player1").textContent = player1Score;
        document.getElementById("player1").style ="color: red";


    } else if ((button2 == 'X') && (button5 == 'X') && (button8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("button1").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("button6").disabled = true;
        document.getElementById("button7").disabled = true;
        document.getElementById("button9").disabled = true;
        player1Score++;
        document.getElementById("player1").textContent = player1Score;
        document.getElementById("player1").style ="color: red";


    } else if ((button4 == 'X') && (button5 == 'X') && (button6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button7").disabled = true;
        document.getElementById("button8").disabled = true;
        document.getElementById("button9").disabled = true;
        player1Score++;
        document.getElementById("player1").textContent = player1Score;
        document.getElementById("player1").style ="color: red";


    } else if ((button1 == 'X') && (button5 == 'X') && (button9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("button6").disabled = true;
        document.getElementById("button7").disabled = true;
        document.getElementById("button8").disabled = true;
        player1Score++;
        document.getElementById("player1").textContent = player1Score;
        document.getElementById("player1").style ="color: red";


        //LOGIC FOR O
    } else if ((button1 == 'O') && (button2 == 'O') && (button3 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("button4").disabled = true;
        document.getElementById("button5").disabled = true;
        document.getElementById("button6").disabled = true;
        document.getElementById("button7").disabled = true;
        document.getElementById("button8").disabled = true;
        document.getElementById("button9").disabled = true;
        player2Score++;
        document.getElementById("player2").textContent = player2Score;
        document.getElementById("player2").style ="color: red";


    } else if ((button1 == 'O') && (button4 == 'O') && (button7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button5").disabled = true;
        document.getElementById("button6").disabled = true;
        document.getElementById("button8").disabled = true;
        document.getElementById("button9").disabled = true;
        player2Score++;
        document.getElementById("player2").textContent = player2Score;
        document.getElementById("player2").style ="color: red";


    } else if ((button7 == 'X') && (button8 == 'X') && (button9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("button5").disabled = true;
        document.getElementById("button6").disabled = true;
        player2Score++;
        document.getElementById("player2").textContent = player2Score;
        document.getElementById("player2").style ="color: red";


    } else if ((button3 == 'O') && (button6 == 'O') && (button9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("button5").disabled = true;
        document.getElementById("button7").disabled = true;
        document.getElementById("button8").disabled = true;
        player2Score++;
        document.getElementById("player2").textContent = player2Score;
        document.getElementById("player2").style ="color: red";


    } else if ((button3 == 'O') && (button5 == 'O') && (button7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("button6").disabled = true;
        document.getElementById("button8").disabled = true;
        document.getElementById("button9").disabled = true;
        player2Score++;
        document.getElementById("player2").textContent = player2Score;
        document.getElementById("player2").style ="color: red";


    } else if ((button2 == 'O') && (button5 == 'O') && (button8 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("button1").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("button6").disabled = true;
        document.getElementById("button7").disabled = true;
        document.getElementById("button9").disabled = true;
        player2Score++;
        document.getElementById("player2").textContent = player2Score;
        document.getElementById("player2").style ="color: red";


    } else if ((button4 == 'O') && (button5 == 'O') && (button6 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button7").disabled = true;
        document.getElementById("button8").disabled = true;
        document.getElementById("button9").disabled = true;
        player2Score++;
        document.getElementById("player2").textContent = player2Score;
        document.getElementById("player2").style ="color: red";


    } else if ((button1 == 'O') && (button5 == 'O') && (button9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button4").disabled = true;
        document.getElementById("button6").disabled = true;
        document.getElementById("button8").disabled = true;
        document.getElementById("button9").disabled = true;
        player2Score++;
        document.getElementById("player2").textContent = player2Score;
        document.getElementById("player2").style ="color: red";


        //Check for tie
    } else if ((button1 == 'X' || button1 == 'O') && (button2 == 'X' || button2 == "O")
        && (button3 == 'X' || button3 == 'O') && (button4 == 'X' || button4 == 'O') &&
        (button5 == 'X' || button5 == 'O') && (button6 == 'X' || button6 == 'O') &&
        (button7 == 'X' || button7 == 'O') && (button8 == 'X' || button8 == 'O') &&
        (button9 == 'X' || button9 == 'O')) {
          
        document.getElementById("print").textContent = "MATCH TIE!";
        window.alert("MATCH TIE!");
        
    }
}

//functions that checks who is the fisrt player

let turn = 1;
function startTheGame1() {
    if (turn === 1) {
        document.getElementById("button1").value = "X";
        document.getElementById("button1").disabled = true;
        document.getElementById("button1").style ="color: orange";
        turn--;
    } else {
        document.getElementById("button1").value = "O";
        document.getElementById("button1").disabled = true;
        document.getElementById("button1").style = "color: red";
        turn++;
    }
}
function startTheGame2() {

    if (turn === 1) {
        document.getElementById("button2").value = "X";
        document.getElementById("button2").disabled = true;
        document.getElementById("button2").style ="color: orange";
        turn--;
    } else {
        document.getElementById("button2").value = "O";
        document.getElementById("button2").style = "color: red";
        document.getElementById("button2").disabled = true;
        turn++;
    }
}
function startTheGame3() {

    if (turn === 1) {
        document.getElementById("button3").value = "X";
        document.getElementById("button3").disabled = true;
        document.getElementById("button3").style ="color: orange";
        turn--;
    } else {
        document.getElementById("button3").value = "O";
        document.getElementById("button3").style = "color: red";
        document.getElementById("button3").disabled = true;
        turn++;
    }
}
function startTheGame4() {

    if (turn === 1) {
        document.getElementById("button4").value = "X";
        document.getElementById("button4").disabled = true;
        document.getElementById("button4").style ="color: orange";
        turn--;
    } else {
        document.getElementById("button4").value = "O";
        document.getElementById("button4").style = "color: red";
        document.getElementById("button4").disabled = true;
        turn++;
    }
}
function startTheGame5() {

    if (turn === 1) {
        document.getElementById("button5").value = "X";
        document.getElementById("button5").disabled = true;
        document.getElementById("button5").style ="color: orange";
        turn--;
    } else {
        document.getElementById("button5").value = "O";
        document.getElementById("button5").style = "color: red";
        document.getElementById("button5").disabled = true;
        turn++;
    }
}
function startTheGame6() {

    if (turn === 1) {
        document.getElementById("button6").value = "X";
        document.getElementById("button6").disabled = true;
        document.getElementById("button6").style ="color: orange";
        turn--;
    } else {
        document.getElementById("button6").value = "O";
        document.getElementById("button6").style = "color: red";
        document.getElementById("button6").disabled = true;
        turn++;
    }
}

function startTheGame7() {

    if (turn === 1) {
        document.getElementById("button7").value = "X";
        document.getElementById("button7").disabled = true;
        document.getElementById("button7").style ="color: orange";
        turn--;
    } else {
        document.getElementById("button7").value = "O";
        document.getElementById("button7").style = "color: red";
        document.getElementById("button7").disabled = true;
        turn++;
    }
}
function startTheGame8() {

    if (turn === 1) {
        document.getElementById("button8").value = "X";
        document.getElementById("button8").disabled = true;
        document.getElementById("button8").style ="color: orange";
        turn--;
    } else {
        document.getElementById("button8").value = "O";
        document.getElementById("button8").style = "color: red";
        document.getElementById("button8").disabled = true;
        turn++;
    }
}
function startTheGame9() {

    if (turn === 1) {
        document.getElementById("button9").value = "X";
        document.getElementById("button9").disabled = true;
        document.getElementById("button9").style ="color: orange";
        turn--;
    } else {
        document.getElementById("button9").value = "O";
        document.getElementById("button9").style = "color: red";
        document.getElementById("button9").disabled = true;
        turn++;
    }
}
