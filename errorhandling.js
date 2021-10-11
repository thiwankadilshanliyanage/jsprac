//error handling
function findLargest(a, b, c) {
    try {
        if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
            throw "Error : Enter only numbers!"
        } else if (a == b || a == c || b == c) {
            throw "Error : Enter diferent value!"
        } else {
            if (a > b && b > c) {
                console.log("a is the largest number!");
            } else if (b > a && b > c) {
                console.log("b is the largest number");
            } else if (c > a && c > b) {
                console.log("c is the largest number!");
            } else {
                console.log("Invalid inputs!");
            }
        }
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Input values are " + a + "," + b + " and " + c);
    }
}
//calling
findLargest(5, 3, 4);