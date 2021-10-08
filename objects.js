//object literals

var Nimal = {
        firstName: 'Nimal',
        lastNAme: 'Perera',
        age: 23,
        civilStatus: 'Unmarried',
        job: 'developper',
        subjects: ['java programming', 'web develop', 'android develop', 'graphic design'],
        degree: {
            name: 'Software Eng',
            duration: '4Years',
            credits: 120
        },
        project: [

            {
                proName: 'music app',
                technology: 'React',
                version: '1.0'
            }, {
                proName: 'POS',
                technology: 'Java',
                version: '1.5'
            }, {
                proName: 'Ecomm',
                technology: 'MERN',
                version: '2.0'
            }

        ],
        yearOfBirth: function(year) {
            return year - this.age;
        }
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
console.log(Nimal.degree.name);
console.log(Nimal.degree['credits']);
console.log(Nimal.project[0].proName);
console.log('Birth year of ' + Nimal.firstName + ' is ' + Nimal.yearOfBirth(2021));