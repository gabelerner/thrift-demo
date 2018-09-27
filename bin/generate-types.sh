rm ./ruby/types/*
thrift -out ./ruby/types --gen rb ./schema/calculator.thrift
rm ./js/types/*
thrift -out ./js/types --gen js:node ./schema/calculator.thrift
