function check() {
    
    var question1 = document.trivia.question1.value;
    var question2 = document.trivia.question2.value;
    var question3 = document.trivia.question3.value;
    var question4 = document.trivia.question4.value;
    var question5 = document.trivia.question5.value;
    var question6 = document.trivia.question6.value;
    var question7 = document.trivia.question7.value;
    var question8 = document.trivia.question8.value;
    var question9 = document.trivia.question9.value;
    var question10 = document.trivia.question10.value;
    var correct = 0;

    if (question1 == "drums") {
        correct++;
    }
    if (question2 == "Thailand") {
        correct++;
    }
    if (question3 == "2") {
        correct++;
    }
    if (question4 == "Bears") {
        correct++;
    }
    if (question5 == "Tom Brady") {
        correct++;
    }
    if (question6 == "spiders") {
        correct++;
    }
    if (question7 == "endo") {
        correct++;
    }
    if (question8 == "Dallas") {
        correct++;
    }
    if (question9 == "1") {
        correct++;
    }
    if (question10 == "Maggie Simpson") {
        correct++;
    }
var messages = ["Perfect!","Almost Perfect!","Pretty Good!","Okay","Could've Done Better","Yikes","The Worst"];
var pictures = ["images/10.gif","images/8-9.gif","images/6-7.gif","images/5.gif","images/3-4.gif","images/1-2.gif","images/0.gif"];
var range;
    ///(0)
    if (correct < 1) {
        range = 6;
    }
    ///(1-2)
    if (correct > 0 && correct < 3){
        range = 5;
    }
    ///(3-4)
    if (correct > 2 && correct < 5){
        range = 4;
    }
    ///(5-6)
    if (correct > 4 && correct < 7){
        range = 3;
    }
    ///(7-8)
    if (correct > 6 && correct < 9){
        range = 2;
    }
    ///(9)
    if (correct > 8 && correct <10){
        range = 1;
    }
    /// (10)
    if (correct >9){
        range = 0;
    }

//only one of these shows up . why?
    document.getElementById("afterSubmit").style.visibility = "visible";
    document.getElementById("afterSubmit").innerHTML = messages[range];
    document.getElementById("numberCorrect").style.visibility = "visible";
    document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct";
    document.getElementById("pictures").style.visibility = "visible";
    document.getElementById("pictures").src = pictures[range];

}

var windowTimeout = setTimeout(function(){
    alert("You have 1 minute. Go!");
},1000);

var count=60;

var counter=setInterval(timer, 1000);

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("display").innerHTML=count + " secs";
}

