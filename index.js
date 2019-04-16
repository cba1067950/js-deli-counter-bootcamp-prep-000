var katzDeliLine = [];
var lineNumber = 0;

//Adds new name to current line array.
function takeANumber(currentLine){
  //Adds new person to the line.
  lineNumber++;
  currentLine.push(lineNumber);
 
  //Returns the name of the person on line and the position using string interpolation.
  return `Welcome, you are number ${lineNumber}.`;
}

console.log(takeANumber(katzDeliLine));
console.log(takeANumber(katzDeliLine));
console.log(takeANumber(katzDeliLine));
console.log(katzDeliLine)

//Tells user who is currently being served.
function nowServing(currentLine){
  //If line is not empty.
  if(currentLine.length > 0) {
    //Returns first person in array.
    return `Currently serving ${currentLine.shift()}.`;
  } else {
    //If no one is on line tells user the line is empty. 
    return "There is nobody waiting to be served!";
  }
}

//Tells user who is on the line and their position.
function currentLine(currentLine){
  //If line is not empty.
  if(currentLine.length > 0){
    //Make new line
    var newLine = [];
 
    //Copies old line to a new line with numbered positions added in front of each person.
    //Primes loop with no space for first iteration.
    // newLine.push(`${1}. ${currentLine[0]}`);
    for(var i = 0; i < currentLine.length; i++){
      //Adds element with a space in between each element.
      newLine.push(` ${i+1}. ${currentLine[i]}`);
    }
    return `The line is currently:${newLine}`; 
  } else {
    return "The line is currently empty.";
  }
}