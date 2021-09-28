//arithmatic operators
var myAge, yourAge, year, result;
myAge = 23;
yourAge = 20;
year = 2021;

//(-)
result = year - myAge;
console.log('I was born in' + result);

//(+)
result = year + 10;
console.log('After 10 years latter,it will be ' + result);

//(*)
result = yourAge * myAge;
console.log('Product of our ages ' + result);

//(/)
result = myAge / yourAge;
console.log('Age devider ' + result);

//modules(balance)
result = myAge % yourAge;
console.log('Age module ' + result);

//exponetiation
console.log('expnoetiation of my age ' + (myAge ** 2));

//increment
console.log(myAge++); //post increment
console.log('post increment of myage ' + myAge);
console.log(++myAge); //pre increment

//decrement
console.log(myAge--); //postdecrement
console.log('post decrement of myAge ' + myAge);
console.log(--myAge); //predecrement

//operator precedence
var cal = (20 + 30) / 10 + 4.5 - 2 * 4 ** 2;
console.log(cal);

//multiple operators
var ans1, ans2;
ans1 = ans2 = ((30 + 40 - 29) * 2 / 8) ** 4;
console.log(ans1 + '  | ' + ans2);