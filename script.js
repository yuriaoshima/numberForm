//count to hold the number of times that the user has entered a number
var count = 0;
//sum holds the total sum of all number added so far
var sum = 0;

function numbersForm() {
  //clear 'numberInfo" section
  var numberSection = document.getElementById("numberInfo");
  numberSection.innerHTML = "";
  
  //save the number the user entered
  var userEnteredNum = +document.numberForm.number.value;
  //increment count each time the function executes
  count = count + 1;
  //update sum by adding new user entered number to existing sum
  sum = sum + userEnteredNum;
  //calculate the average
  var average = sum / count;
  
  //create a new paragraph node for the count
  var countNode = document.createElement("p");
  //create text and append to countNode
  var countText = document.createTextNode("Count: " + count);
  countNode.appendChild(countText);
  
  //create a new paragraph node for the sum
  var sumNode = document.createElement("p");
  //create text and append to sumNode
  var sumText = document.createTextNode("Sum: " + sum);
  sumNode.appendChild(sumText);
  
  //create a new paragraph node for the average
  var avgNode = document.createElement("p");
  //create text and append to avgNode
  var avgText = document.createTextNode("Average: " + average);
  avgNode.appendChild(avgText);
  
  //add paragraph nodes to the numberInfo section
  numberSection.appendChild(countNode);
  numberSection.appendChild(sumNode);
  numberSection.appendChild(avgNode);
  
  //clear the text field so user can enter a new number
  document.getElementById('numForm').value = "";
  event.preventDefault();
}

//resets the entire form so that the user can start with a new set of numbers
function resetForm() {
  count = 0;
  sum = 0;
  //clears the count, sum, and average information
  var numberSection = document.getElementById("numberInfo");
  numberSection.innerHTML = "";
}