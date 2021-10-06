//ways to define a array

var student = ['Kamal', 'Nimal', 'Wimal', 'latha'];
var mask = new Array(40, 50, 70, 56);

//print array
console.log(student);
console.log(student[3]);
student[3] = 'saduni';
console.log(student[3]);
student[student.length] = 'chamara';
console.log(student);

//different data types in an array

var std1 = ['Kamal', 'Perera', 22, 'civil', 'Panadura', true];
console.log(std1);

//add element
std1.push('green');
std1.unshift('Mr.');
console.log(std1);

//remove element
std1.pop();
std1.shift();
console.log(std1);

//get index of an element

console.log(std1.indexOf(22));
var isAgriStudent = std1.indexOf('Agri') === -1 ? std1[0] + ' is not agri student' : std1[0] + 'is  a agri student';

console.log(isAgriStudent);