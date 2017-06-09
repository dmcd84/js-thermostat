require 'sinatra/base'
require 'json'
require 'sinatra/cross_origin'

class Thermostat < Sinatra::Base

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

get '/' do
  'You is well cool!'
end

get '/temperature' do
  30.to_json
end



end
