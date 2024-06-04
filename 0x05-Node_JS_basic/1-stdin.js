const readline = require('readline');

const rlInterface = readline.createInterface(process.stdin, process.stdout);

rlInterface.question(
  'Welcome to Holberton School, what is your name?\n',
  (name) => {
    console.log('Your name is ', name);
    console.log('This important software is now closing');
    rlInterface.close();
  },
);
