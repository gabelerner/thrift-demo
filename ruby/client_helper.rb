$:.push('types')

require 'thrift'
require 'calculator'

module Calculator
  class Client
    def self.from(url, &block)
      transport = Thrift::HTTPClientTransport.new(url)
      protocol = Thrift::BinaryProtocol.new(transport, false, false)

      transport.open
      yield self.new(protocol)
      transport.close
    end
  end
end
