require 'sinatra'

$:.push('.')
require 'server_helper'

$:.push('types')
require 'calculator'

class CalculatorHandler < Server
  def self.processor
    Calculator::Processor.new(self.new)
  end

  def add(n1, n2)
    if n1 <= 0 || n2 <= 0
      raise InvalidOperation.new('Numbers must be positive!')
    end
    return n1 + n2
  end
end

post '/rpc' do
  CalculatorHandler.handle(request)
end
