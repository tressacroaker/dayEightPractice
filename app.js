var monster 1 = {
  name: "Nessy",
  superpowers: ["cloaking", "longevity"],
  size: "boehemith",
  address: "144 Loch Ness Drive",
  scariness: 5
};

var monster2 = {
  name: "Stay Puff Marshmallow Man",
  superpowers: ["lasers out of eyes", "superstomps", "transcend time and space"],
  size: "massive",
  address: "Manhatten(not MT)",
  scariness: 7
};

var monster3 = {
  name: "Sasquatch",
  superpowers: ["cloaking", "bouldering", "eats human flesh and slim jims", "posing mid-stride"],
  size: "bigger than me",
  address: "The Redwoods-ish",
  scariness: "meh",
};

// we did the same code but in much less work and typing!
// instead of having to re type all of the key names and objects, you can set the key names you need and set arguments to those names and anytime they need to be updated use the new and constructor function


// now make a constructor function that is consistent across the board and has a capital letter
// ex: name = something where we can put all our info
var Monster = function (name, superpowers, size, address, scariness) {
//  inside the function: this.name = name;
  this.name = name;
  this.superpowers = superpowers;
  this.size = size;
  this.address = address;
  this.scariness = scariness;
//   this object has a key name and we are setting the value equal to that name that the user inputs, we are taking all five of them creating a ket and placing the value into the anonymous object
};

// when we create a new object from the constructor funtino we need to use new monster()

var monster1 = new Monster("Nessy", ["Cloaking, longevity"], "bohemith", "144 Loch Ness Drive", 5);


console.log(monster1);
console.log(monster2);
console.log(monster3);

// forgot to put in a key that calls out to all of them do this: to add a new key
Monster.prototype.intro = function() {
  alert("Hi! My name is " + this.name + ". I am " + this.size + ". I live in " + this.address + ".");
};

monster1.intro();
// this could also be a method ex: Monster.prototye.scream = "AAAAAHHH";
// it could be any key name with any value not only a method


// new is required to create object, tell javascript that we want to return the object that we put in the constructor function
// now every new object that is created it will inherit this new intro key

// example of a constructor functino that is used alot:
console.log (new Date());
