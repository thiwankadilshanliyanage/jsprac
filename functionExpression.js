var proffession = function(job, firstName) {
    switch (job) {
        case 'doctor':
            return firstName + ' is treating patients.';
        case 'teacher':
            return firstName + ' is teaching students.';
        case 'engineer':
            return firstName + ' is working with constructing area.';
        default:
            return firstName + ' is doing something else';
    }
}

//calling
console.log(proffession('doctor', 'Kasun'));