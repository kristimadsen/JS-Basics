//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
	if (name === "Tyler") {
		return true;
	}
	else {
		return false;
    }
};
console.log(isTyler(name));


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function () {
	var userName = prompt("What is your name?");
	return userName;
};

console.log(getName());

//Next Problem


//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function() {
    var userName = getName();
    alert("Welcome" + " " + userName);
};

welcome();

//Next problem

//What is the difference between arguments and parameters?

Parameters are part of setting up the function - tells the function what inputs to expect
e.g. var paramFunc = function(parameter1, parameter2);
Arguments are the values you pass in to the function when you call it
e.g. paramFunc(argument1, argument2)

//Next problem


//What are all the falsy values in JavaScript and how do you check if something is falsy?


Falsy values =  empty string, 0, false, undefined, null, NaN;
Can check by testing whether a value === true

e.g. 

var thing = NaN;

var test = function(param) {
  if (param === true) {
  return true;
  }
  else {return false;}
}; 

console.log(test(thing));


//Next Problem


//Create a function called myName that returns your name

var myName = function(name) {
	return name;
};

console.log(myName('Kristi'));

//Now save the function definition of myName into a new variable called newMyName

var myNewName = myName;

//Now alert the result of invoking newMyName

alert(myNewName);

//Next problem


//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function(){
    return function(name){
      return name;
    };
};


//Now save the result of invoking outerFn into a variable called innerFn.

innerFn = outerFn();

//Now invoke innerFn.

console.log(innerFn('Kristi'));
