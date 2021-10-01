// without return statement

function addNumber(num1, num2) {
    var ans = num1 + num2;
    console.log('addition: ' + ans);
}
//function calling
addNumber(20, 32.5);





//with return statement
function subNumbers(num1, num2) {
    return num1 - num2;
}
var subnum = subNumbers(30, 12);
console.log(subnum);

//practise
function birthYear(bornyear) {
    return 2021 - bornyear;
}
var bornIn = birthYear(1998);
console.log('I am ' + bornIn + ' years old');

function retiringYear(firstName, bornyear) {
    var age = birthYear(bornyear);
    var retire = 60 - age;
    console.log(firstName + 'retiresin' + retire + 'years,in' + (bornyear + age + retire));

}
//calling
retiringYear('Kamal', 1990);