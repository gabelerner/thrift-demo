const express = require('express');
const thrift = require('thrift');
const Calculator = require('./types/Calculator');
const types = require('./types/calculator_types');
const serverHandler = require('./server_helper');
const bodyParser = require('body-parser');
const app = express();
const port = 4566;

const processor = new Calculator.Processor({
  add: (n1, n2, result) => {
    if (n1 <= 0 || n2 <= 0) {
      result(new types.InvalidOperation({ message: 'Numbers must be positive!' }));
    } else {
      result(null, n1 + n2);
    }
  }
});

app.post('/rpc', bodyParser.raw({ type: 'application/x-thrift' }), (req, res) => {
  serverHandler(processor, req, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
