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