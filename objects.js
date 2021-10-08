//object literals

var Nimal = {
        firstName: 'Nimal',
        lastNAme: 'Perera',
        age: 23,
        civilStatus: 'Unmarried',
        job: 'developper',
        subjects: ['java programming', 'web develop', 'android develop', 'graphic design']
    }
    //get data
console.log(Nimal);
console.log(Nimal.firstName);
console.log(Nimal['lastNAme']);
var x = 'age';
console.log(Nimal[x]);
console.log(Nimal.subjects);
console.log(Nimal.subjects[2]);
console.log(Nimal['subjects'][3]);