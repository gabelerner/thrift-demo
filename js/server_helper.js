const thrift = require('thrift');
const Calculator = require('./types/Calculator');

const THRIFT_HEADER = "application/x-thrift"

module.exports = (processor, req, res) => {
  res.setHeader('Content-Type', THRIFT_HEADER);

  const outTransport = new thrift.TBufferedTransport(null, msg => res.status(200).send(msg));
  const outProtocol = new thrift.TBinaryProtocol(outTransport, false, false);

  thrift.TBufferedTransport.receiver((trans, seqId) => {
    const inProtocol = new thrift.TBinaryProtocol(trans, false, false);
    inProtocol._seqId = seqId;
    processor.process(inProtocol, outProtocol);
  })(req.body);
};
