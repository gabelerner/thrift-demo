const clientFactory = require('./client_helper');

[
  ['localhost', 4566, '/rpc'],
  ['localhost', 4567, '/rpc'],
].forEach(([host, port, path]) => {
  const client = clientFactory(host, port, path);
  client.add(1, 1, (err, val) => {
    console.log(port, val);
  });
  client.add(1, -1, (err, val) => {
    console.log(port, err.message);
  });
});
