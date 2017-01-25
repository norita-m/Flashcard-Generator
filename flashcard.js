//inquirer npm package
var inquirer = require("inquirer");

//constructor function used to create basic card objects
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
	this.type
	this.showCard = function() {
		back = this.back
		console.log("");
		//shows front of card
		console.log("Front: " + this.front)
	}

}
 
var count = 0




// BasicCard.prototype.printInfo = function() {
// }