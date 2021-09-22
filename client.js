const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host:"135.23.223.133",
    port: 50542
  });

  //interpret buffer as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log(`successfully connected to game server`);
  });

  conn.write("Name: GTR");

  conn.write("Move: up");

  conn.write("Move: up");

  conn.write("Move: up");

  setTimeout(() => conn.write("Move: left"), 2000);

  let internalFrist = setInterval(() => conn.write("Move: left"), 1000);

  setTimeout(() => clearInterval(internalFrist), 5000);


  return conn;
};

//connect();

module.exports = {connect};

