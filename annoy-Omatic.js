//Annoy-Omatic

//Ask user: Are we there yet?
//Keep asking the user until they respond with "Yes" or "Yeah"
//Then alert "Yay we finally made it!"
//Verson 2 BONUS: A user can enter any string as long as it contains "yes" in it

//Version 1
var answer = prompt("Are we there yet?");

while(answer !== "yes" && answer !== "yeah") {
  var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");


//Version 2
var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");
