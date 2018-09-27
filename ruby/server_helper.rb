require 'thrift'

class Server
  THRIFT_HEADER = "application/x-thrift"

  def self.handle(request)
    response = Rack::Response.new([], 200, {'Content-Type' => THRIFT_HEADER})
    transport = Thrift::IOStreamTransport.new request.body, response
    protocol = Thrift::BinaryProtocol.new(transport, false, false)
    processor.process protocol, protocol
    response
  end
end
