const net = require("net");
const {IP, PORT} = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`successfully connected to game server`);
  });

  return conn;
};

//connect();

module.exports = {connect};

