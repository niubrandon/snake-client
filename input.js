// setup interface to handle user input from stdin
//const connect = require('./client');

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
  // your code here
  if (data === "\u0003") {
    console.log("clicked control c button");
    process.exit();
  } else if (data === "w") {
    console.log("clicked up button");
    connection.write("Move: up");
  } else if (data === "a") {
    connection.write("Move: left");
  } else if (data === "s") {
    connection.write("Move: down");
  } else if (data === "d") {
    connection.write("Move: right");
  } else if (data === "t") {
    connection.write("Say: I'm GTR!!!");
  } else if (data === "f") {
    connection.write("Say: I'm Brandon. Cheers!");
  }

};


module.exports = {setupInput, handleUserInput};