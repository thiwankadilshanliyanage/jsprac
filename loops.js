//for loop



for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 10; i >= 0; i--) {
    console.log(i);
}



//irerate array
var ABC = ['A', 'B', 'C'];
for (var i = 0; i < ABC.length; i++) {
    console.log(ABC[i]);
}

// for/in loop 

var person = { fName: "Thiwanka", lName: "Perera", age: 25 }
var i;
for (i in person) {
    console.log(person[i]);
}