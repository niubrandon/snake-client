const { connect } = require('./client');
const stdin = process.stdin;
connect();


// setup interface to handle user input from stdin

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (data) => {
  // your code here
  if (data === "\u0003") {
    process.exit();
  }

};
setupInput();
stdin.on("data", handleUserInput);

