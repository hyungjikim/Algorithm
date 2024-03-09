const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = [];

rl.on('line', function (line) {
  inputs.push(line);
}).on('close', function () {
  const x = Number(inputs[0]);
  const y = Number(inputs[1]);

  let result = 0;

  if(x > 0 && y > 0) result = 1;
  else if(x > 0 && y < 0) result = 4;
  else if(x < 0 && y > 0) result = 2;
  else if(x < 0 && y < 0) result = 3;

  console.log(result);

  process.exit();
});
