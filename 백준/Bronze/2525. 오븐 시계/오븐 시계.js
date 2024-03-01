let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [hour, minute] = input[0].split(' ').map(num => parseInt(num, 10));

let cookingTime = parseInt(input[1]);

function calc(){
    let h = parseInt(cookingTime/60);
    let m = cookingTime%60;
    
    hour += h;
    minute +=m;
    
    if(minute >= 60) {
        hour+= 1;
        minute %= 60;
    }
    hour%=24;
    
   console.log(`${hour} ${minute}`);
}

calc();