# thrift-demo

Ideas from Airbnb building services [part 1](https://medium.com/airbnb-engineering/building-services-at-airbnb-part-1-c4c1d8fa811b) and [part 2](https://medium.com/airbnb-engineering/building-services-at-airbnb-part-2-142be1c5d506).

Currently, the repo supports `ruby` and `node` servers/clients.  The demo shows each client talking to *all servers* in a consistent way.

# TODO
### Client
- :negative_squared_cross_mark: test coverage
- :negative_squared_cross_mark: test suite helpers
- :negative_squared_cross_mark: standardize validation of args
- :negative_squared_cross_mark: auth
- :negative_squared_cross_mark: timeouts
- :negative_squared_cross_mark: retries
- :negative_squared_cross_mark: errors via Sentry
- :negative_squared_cross_mark: metrics via DataDog
- :negative_squared_cross_mark: logging via Sumo
- :negative_squared_cross_mark: request context / distributed logging
### Server
- :negative_squared_cross_mark: test coverage
- :negative_squared_cross_mark: test suite helpers
- :negative_squared_cross_mark: standardize validation of args
- :negative_squared_cross_mark: auth
- :negative_squared_cross_mark: standardize errors
- :negative_squared_cross_mark: errors via Sentry
- :negative_squared_cross_mark: metrics via DataDog
- :negative_squared_cross_mark: logging via Sumo
- :negative_squared_cross_mark: request context / distributed logging

# Main Files

- [Define your schema](https://github.com/gabelerner/thrift-demo/blob/master/schema/calculator.thrift)
- Regenerate code per instructions below
- Update the servers to handle new signatures [ruby](https://github.com/gabelerner/thrift-demo/blob/master/ruby/server.rb) and [node](https://github.com/gabelerner/thrift-demo/blob/master/js/server.js)
- Update the clients to test new calls [ruby](https://github.com/gabelerner/thrift-demo/blob/master/ruby/client.rb) and [node](https://github.com/gabelerner/thrift-demo/blob/master/js/client.js)

# Regenerate Code

Edit `./schema/calculator.thrift` then
```sh
./bin/generate-types.sh
```

# Start Servers

```sh
cd ruby
bundle
ruby server.rb
```
```sh
cd js
yarn
node server.js
```

# Test Clients

```sh
cd ruby
ruby client.rb
```
```sh
cd js
node client.js
```
