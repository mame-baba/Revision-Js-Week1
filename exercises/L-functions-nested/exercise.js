var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// function to calculate the percentage
function percentage(num, total) {
    return (num / total * 100);
  }

  // function to create the message
  function createMessage(memberType, percentage) {
    message = `Percentage ${memberType}: ${Math.round(percentage)}%`;
    return message;
  }

  // variable initialization
  var numberOfStudents = 15;
  var numberOfMentors = 8;
  var total = numberOfStudents + numberOfMentors;
  var percentOfStudents = percentage(numberOfStudents, total);
  var percentOfMentors = percentage(numberOfMentors, total);

  // print the results
  console.log(createMessage("students", percentOfStudents));
  console.log(createMessage("mentors", percentOfMentors));


  // function to convert a word to uppercase
function toUpper(word) {
  return word.toUpperCase();
}

// function to create the greeting
function createShoutyGreeting(name) {
  var greeting = `HELLO ${toUpper(name)}`;
  return greeting;
}

// variable initialization
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// print the results
console.log(createShoutyGreeting(mentor1));
console.log(createShoutyGreeting(mentor2));
console.log(createShoutyGreeting(mentor3));
console.log(createShoutyGreeting(mentor4));
console.log(createShoutyGreeting(mentor5));