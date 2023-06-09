//function to reset the game

function resetGame() {
    location.reload();
    document.getElementById("button1").value = '';
    document.getElementById("button2").value = '';
    document.getElementById("button3").value = '';
    document.getElementById("button4").value = '';
    document.getElementById("button5").value = '';
    document.getElementById("button6").value = '';
    document.getElementById("button7").value = '';
    document.getElementById("button8").value = '';
    document.getElementById("button9").value = '';

    window.alert('YOU START NEW GAME');
}
