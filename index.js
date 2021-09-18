var readlineSync = require("readline-sync");
var chalk = require("chalk");

console.log("Do you know me better? Try the following quiz");
console.log("*6 questions\n*you get +2 points for correct answer");
console.log("-1 point if you get it incorrect");
console.log("Lets BEGIN!!! ")
var userName = readlineSync.question(chalk.bgBlueBright("What is your name?\n"));

console.log(chalk.bgRed("Welcome",userName, "to the quiz on Me"))
console.log("*****************************************************")
var score = 0
var Leaderboard = [{name : "Nithin",Score :10},
                  {name : "Deepika",Score : 8},
                  {name : "Sheetal",Score : 7}]

function play(question,answer,explanation){
  var userAnswer = readlineSync.question(question+"\n");
  if(answer === userAnswer){
    console.log(chalk.green("correct"));
    score = score + 2;
  }else{
    console.log(chalk.red("incorrect"))
    score = score - 1;
  }
  console.log(chalk.bgBlue.bold(explanation));
  console.log(chalk.bgRed("Your current score ",score),"\n","**************************************************")
}

var QuestionOne = {
  question : "Where I reside?\n a.Chennai \n b.Bengaluru \n c.Hassan \n d.Kolkata \n enter [a..d]",
  answer : "c",
  explanation : "explanation : Iam a resident of Hassan, Karnataka"
}
var QuestionTwo = {
  question :"When is my birthday?\n a.18th May \n b.14th May \n c.16th May \n d.20th May \n enter [a..d]",
  answer : "b",
  explanation : "explanation : My birthday is on 14th May!"
}
var QuestionThree = {
  question :"Which is my favourite movie?\n a.The pursuit of Happyness \n b.Lord of the rings \n c.Harry Potter \n d.Chak de India \n enter [a..d]",
  answer : "a",
  explanation : "The pursuit of Happyness is my all-time-favourite movie."
}

var QuestionFour = {
  question :"Which Sport have I represented at National level?\n a.Kabbaddi \n b.Volley ball \n c.Handball \n d.Cricket \n enter [a..d]",
  answer : "c",
  explanation : "Iam a Handball player.Handball is a team sport of 7 players. My position is called 'Left Wing' "
}

var QuestionFive = {
  question :"What is my dream ?\n a.Go to space \n b.Sky diving \n c.Flying a jet \n d.all of them \n enter [a..d]",
  answer : "d",
  explanation : "My dream is to fulfill all of them"
}


var QuestionSix = {
  question :"Where do I wish to work ?\n a.India \n b.UK \n c.US \n d.all of them \n enter [a..d]",
  answer : "a",
  explanation : "I love India and would like to make my career here"
}

var questionnaire = [QuestionOne,QuestionTwo,QuestionThree,QuestionFour,QuestionFive,QuestionSix]

for(var i = 0;i < questionnaire.length;i++){
  play(questionnaire[i].question,questionnaire[i].answer,questionnaire[i].explanation);
}

console.log(chalk.bgBlue("Your final score : ",score),"\n")
var currentPlayer = {name : userName, Score : score}
Leaderboard.push(currentPlayer);
var temp = {};
for(var j = 0; j < Leaderboard.length - 1; j++){
  for(var k = j+1;k <  Leaderboard.length; k++){
    
  if( Leaderboard[j].Score  < Leaderboard[k].Score ){
    temp = Leaderboard[j];           
    Leaderboard[j] = Leaderboard[k];
    Leaderboard[k] = temp; 
  }
  }
}
console.log(chalk.bgRed("Leaderboard"))
for(var k = 0;k <  Leaderboard.length; k++){
  console.log(Leaderboard[k].name," : ",Leaderboard[k].Score,"\n")
}

console.log("Thanks for playing")