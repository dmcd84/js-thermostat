require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base

get '/' do
  'You is well cool!'
end

get '/temperature' do
  30.to_json
end



end
