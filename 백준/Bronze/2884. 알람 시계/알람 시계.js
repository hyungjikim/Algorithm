let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

let numbers = input.split(' ');

let hour = parseInt(numbers[0]);
let minute = parseInt(numbers[1]);

if (minute >= 45) {
    console.log(`${hour} ${minute - 45}`);
} else if (hour === 0) {
    console.log(`23 ${minute + 60 - 45}`);
} else {
    console.log(`${hour - 1} ${minute + 60 - 45}`);
}
