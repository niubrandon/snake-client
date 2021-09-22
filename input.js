// setup interface to handle user input from stdin
//const connect = require('./client');
const {COMMANDMAPPING} = require('./constants');
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (data) => {

  console.log(data);
  
  if (data === "\u0003") {
    console.log("clicked control c button");
    process.exit();
  } else if (data in COMMANDMAPPING) {
    connection.write(COMMANDMAPPING[data]);
  }
  
};


module.exports = {setupInput, handleUserInput};