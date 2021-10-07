var tips = new Array();
var ammount = new Array();

//function
function tipCalculator(bill) {
    var tip;
    if (bill < 1000) {
        //calculate
        tip = bill * 20 / 100;
    } else if (bill >= 1000 && 1500 > bill) {
        //calculate
        tip = bill * 15 / 100;
    } else {
        //calculate
        tip = bill * 10 / 100;
    }
    tips.push(tip);
    ammount.push(bill + tip);

    return tip;
}

var bill = prompt('Enter Bill Payment');
console.log('Your tip is' + tipCalculator(bill));