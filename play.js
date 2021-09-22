const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host:"135.23.223.133",
    port: 50542
  });

  //interpret buffer as text
  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log(`data is ${data}`);
  });

  return conn;
};

console.log("Connecting...");
connect();

