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

//for/of loop

var fullName = "Chamara Perera";
var j;
for (j of fullName) {
    console.log(j);
}

//while loop

var mark = [22, 45, 67, 69, 50];
var k = 0;
while (k < mark.length) {
    console.log(mark[k]);
    k++;
}

// do-while loop

var i = 10;
do {
    console.log(i);
    i--
} while (i >= 1);

// continue and break 
var data = ['saman', 'galle', 75, true, 'chocolate'];

//continue
for (var i = 0; i < data.length; i++) {
    if (typeof(data[i]) !== 'string') continue;
    console.log(data[i]);
}

// break
for (var i = 0; i < data.length; i++) {
    if (typeof(data[i]) !== 'string') break;
    console.log(data[i]);
}