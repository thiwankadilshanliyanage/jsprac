var score1, score2, score3, averageSL, averageEng;

//Srilanka team
score1 = parseInt(prompt('Enter 1st match score of Sri Lanka : '));
score2 = parseInt(prompt('Enter 2nd match score of Sri Lanka : '));
score3 = parseInt(prompt('Enter 3rd match score of Sri Lanka : '));

averageSL = (score1 + score2 + score3) / 3;
console.log('Avareage of Srilankan team' + averageSL);

//England team

score1 = parseInt(prompt('Enter 1st match score of England : '));
score2 = parseInt(prompt('Enter 2nd match score of England : '));
score3 = parseInt(prompt('Enter 3rd match score of England:  '));

averageEng = (score1 + score2 + score3) / 3;
console.log('Avareage of England team' + averageEng);

if (averageSL > averageEng) {
    console.log('Srilanka won the challenge');
} else if (averageSL < averageEng) {
    console.log('England won the challenge');
} else {
    console.log('Match drawen');
}