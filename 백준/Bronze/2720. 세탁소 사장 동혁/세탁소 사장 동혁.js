let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let c = Number(input[0]);

let arr = [];

for(let i = 1; i <=c; i++) {
    arr.push(Number(input[i]));
}


for(let i = 0; i < arr.length; i++) {
    let result = [];
    let rest = arr[i];

    let quarter = 25;
    let dime = 10;
    let nickel = 5;
    let penny = 1;
    
    result.push(parseInt(rest/quarter));
    rest %= quarter;

    result.push(parseInt(rest/dime));
    rest %= dime;

    result.push(parseInt(rest/nickel));
    rest %= nickel;
        
    result.push(parseInt(rest/penny));
    console.log(result.join(' '));
}

