player1_name =localStorage.getItem("player1_name")
player2_name =localStorage.getItem("player2_name")
document.getElementById("player1_name").innerHTML=player1_name+": "
document.getElementById("player2_name").innerHTML=player2_name+": "
player1_score= 0
player2_score= 0
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_answer").innerHTML= "Answer Turn : "+player2_name
document.getElementById("player_question").innerHTML= "Question Turn : "+player1_name

function send(){
  number1 = document.getElementById("number1").value
  number2 = document.getElementById("number2").value
  word = parseInt(number1)* parseInt(number2)
  question_number = "<h4>" +number1 +"X" + number2 + "</h4>"
  Input_box = "<br>Answer : <input  type='text' id='input_check_box'>"
  b = "<br><br> <button onclick='check()'class='btn btn-info'>CHECK</button>"
  x  = question_number+Input_box+b
document.getElementById("output").innerHTML=x
document.getElementById("number1").innerHTML=""
document.getElementById("number2").innerHTML=""
}

questionturn = "player1"
answerturn   = "player2"

function check(){
ans = document.getElementById("input_check_box"). value

if(ans== word){
if(answerturn== "player1"){
    player1_score=player1_score+1
    document.getElementById("player1_score").innerHTML =player1_score
}
else{
    player2_score=player2_score+1
    document.getElementById("player2_score").innerHTML =player2_score
}
if(questionturn =="player1" ){
    questionturn="player2"
    document.getElementById("player_question").innerHTML= "QUESTION TURN : "+player2_name
}
else{
    questionturn="player1"
    document.getElementById("player_question").innerHTML= "QUESTION TURN : "+player1_name
}
if(answerturn== "player1"){
    answerturn="player2"
    document.getElementById("player_answer").innerHTML="ANSWER TURN : "+player2_name
}
else{
    answerturn="player1"
    document.getElementById("player_answer").innerHTML="ANSWER TURN : "+player1_name
}

    document.getElementById("output").innerHTML=""



}
}