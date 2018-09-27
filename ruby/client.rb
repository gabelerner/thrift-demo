$:.push('.')
require 'client_helper'

[
  'http://localhost:4566/rpc',
  'http://localhost:4567/rpc',
].each do |url|
  Calculator::Client.from(url) do |client|
    puts client.add 1, 1
    begin
      client.add 1, -1
    rescue InvalidOperation => err
      puts err.message
    end
  end
end
