p1Name = localStorage.getItem("Name1");
p2Name = localStorage.getItem("Name2");

p1score = 0;
p2score = 0;

questionTurn = "p1";
answerTurn = "p2"; 

document.getElementById('player1Name').innerHTML = p1Name;
document.getElementById('player2Name').innerHTML = p2Name;

document.getElementById('player1Score').innerHTML = " = " + p1score;
document.getElementById('player2Score').innerHTML = " = " + p2score;

document.getElementById('player_Question').innerHTML = "Question Turn : " + p1Name
document.getElementById('player_Answer').innerHTML = "Answer Turn : " + p2Name