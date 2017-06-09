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
  JSON.parse(File.read("userThermostat.json"))["temp"]
end

post '/temperature' do
  File.write("userThermostat.json", params.to_json)
  redirect '/temperature'
end

end
