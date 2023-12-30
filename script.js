/*Task Description: Create a Quiz Application
Objective:
Create a web-based quiz application using HTML, CSS, and JavaScript that allows users to answer multiple-choice questions and displays their score at the end.

Requirements:

User Interface:

Design a user-friendly interface with a title, a question area, options for each question, and a "Next" button to navigate through questions.
Display the user's score at the end of the quiz.
Quiz Data:

Create an array of objects (quizData) to store quiz questions, options, and correct answers.
Each object in quizData should include:
question: String - the question to be displayed.
options: Array - multiple-choice options for the question.
answer: String - the correct answer for the question.
Functionality:

Display the first question when the page loads.
Display subsequent questions with their options upon clicking the "Next" button.
Allow users to select an option for each question.
Upon selecting an option, check if the chosen answer is correct and update the score accordingly.
Continue to the next question until all questions are answered.
Display the user's final score at the end of the quiz.
Optional Enhancements:

Implement a timer to limit the time for each question.
Add more types of questions (e.g., true/false, fill in the blanks).
Randomize the order of questions.
Style the application to enhance user experience.
*/
//array of objects
/*question: String - the question to be displayed.
options: Array - multiple-choice options for the question.
answer: String - the correct answer for the question.*/

let questionArea = document.getElementById("qArea");
let optionsArea = document.getElementById("optionsArea");
let button = document.getElementById("buttonNext");

const quizData =  [
    {
        question:"What is the meaning of life?",
        options: ["42", "99","101","333"],
        answer: "42"
    },{
        question:"Which British comedy group wrote Life of Brian?",
        options: ["Laurel & Hardy", "y","Monty Python","z"],
        answer: "Monty Python"
    }
 ];

 function displayQ_A(){
    questionArea.innerHTML=quizData[0].question;
    optionsArea.innerHTML=quizData[0].options;
 };
 
 document.addEventListener("DOMContentLoaded",function(){
    displayQ_A();
    // button.addEventListener("click",loadNextPage);
 })
 

 //next steps (HW)
 /**
  * take current Q&options and store 
  * display options with button
  * (foreach )
  * 
  */