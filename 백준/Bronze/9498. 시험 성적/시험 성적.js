let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

let score = parseInt(input);

if(score < 60) {
    console.log('F');
} else if (score <=69) {
    console.log('D');
} else if (score <=79) {
    console.log('C');
} else if (score <=89) {
    console.log('B');
} else {
    console.log('A');
}
