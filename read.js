const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const num1 = Math.floor(Math.random() * 10 + 1);

const num2 = Math.floor(Math.random() * 10 + 1);

let anwser = num1 + num2;

rl.question(`what is the correct anwser of ${num1} + ${num2} \n`, (userInput) => {
   if(userInput.trim() == anwser){
       rl.close()
   }else{
       
       console.log('this is the wrong anwser')
       rl.close()
   }
});

rl.on('close', () => {
    console.log('anwser is right')
})