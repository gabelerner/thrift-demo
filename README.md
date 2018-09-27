# thrift-demo

Ideas from Airbnb building services [part 1](https://medium.com/airbnb-engineering/building-services-at-airbnb-part-1-c4c1d8fa811b) and [part 2](https://medium.com/airbnb-engineering/building-services-at-airbnb-part-2-142be1c5d506)

# Regenerate Schema

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
