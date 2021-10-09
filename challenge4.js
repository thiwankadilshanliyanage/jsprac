// declare object 
var kasun = new Object();
var chamal = new Object();

//Insert properties to kasun

kasun.name = prompt('Add to full name of kasun :');
kasun.mass = prompt('Add kasun masss: ');
kasun.height = prompt('Add kasun height : ');

//Insert properties to Chamal

chamal.name = prompt('Add to full name of chamal :');
chamal.mass = prompt('Add chamal masss: ');
chamal.height = prompt('Add chamal height : ');

//add bmi() method for both

kasun.bmi = chamal.bmi = function() {
    this.bmiVal = this.mass / (this.height ** 2);
}
console.log(kasun);
console.log(chamal);