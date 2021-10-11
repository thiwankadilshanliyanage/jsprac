//local variabale

function addNum() {
    var a = 10;
    var b = 20;
    console.log(a + b);
}

addNum();

//global variabale
var subject = 'maths';

function sub() {
    console.log('my favorite subject is ' + subject);
    subject = 'science';
    console.log('my favorite subject is ' + subject);
}
sub();