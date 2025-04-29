// Array of math problems
const mathProblems = [
  { problem: "What is the value of x in the equation 2x+5=11", solution: "3" },
  { problem: "What is the value of x in the indicial equation 2^x=8", solution: "3" },
  {problem: "Differentiate x with respect to x", solution:"1"},
  {problem: "The sum of three consecutive numbers is 36. Find the first number", solution: "11"}, 
  {problem: "Determine the 9th term of the sequence 2,7,12, 17,...", solution:"42"},
  {problem: "how many ways can 6 people be arranged in a circle?", solution: "120"}, 
  {problem: "∫lnxdx", solution:"x(lnx-1)"},
  {problem:"convert 47₁₀ to binary number", solution: "101111₂"},
  {problem: "Change the cartesian co-ordinate (3, 4) into polar co-ordinate", solution:"(5, 53.13°)"},
  {problem: "If p=2i+j-k and q=i-3j+2k, find p.q",solution:"-3"},
  {problem:"If the radius of a circle is 41.3mm calculate the circumference of the circle", solution:"259.6mm"}
];

// Function to get the problem of the day
function getProblemOfTheDay() {
  const today = new Date().getDate();
  const problemIndex = today % mathProblems.length;
  return mathProblems[problemIndex];
}

// Display the problem of the day
const problemOfTheDay = getProblemOfTheDay();
document.getElementById("problem-statement").innerHTML = problemOfTheDay.problem;

//get today's date
const today = new Date();
    document.getElementById("current-date").textContent = today.toDateString();
    

// Handle solution submission
document.getElementById("submit-solution").addEventListener("click", function() {
  const userSolution = prompt("Enter your solution:");
  const solutionFeedback = document.getElementById("solution-feedback");

  if (userSolution === problemOfTheDay.solution) {
    solutionFeedback.innerHTML = "Correct!";
  } else {
    solutionFeedback.innerHTML = "Try again!";
  }
});
