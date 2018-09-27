const thrift = require('thrift');
const Calculator = require('./types/Calculator');

module.exports = (host, port, path) => {
  const options = {
     transport: thrift.TBufferedTransport,
     protocol: thrift.TBinaryProtocol,
     path: path,
     headers: { "Connection": "close", "Content-Type": "application/x-thrift" },
     https: false
  };
  const connection = thrift.createHttpConnection(host, port, options);
  connection.on('error', err => {
    console.error(err);
  });
  const client = thrift.createHttpClient(Calculator, connection);
  return client;
};
