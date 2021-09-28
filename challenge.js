var mass, height, BMIk, BMIc, IsKasun;

//BMIK
mass = prompt("Add kasun's mass : ");
height = prompt("Add kasun's height : ");
BMIk = mass / height ** 2;
console.log('Kasun BMI value =' + BMIk);

//BMIC
mass = prompt("Add Chamal's mass : ");
height = prompt("Add Chamal's height : ");
BMIc = mass / height ** 2;
console.log('Chamal BMI value =' + BMIc);

//boolean
IsKasun = (BMIk > BMIc);
alert(IsKasun);