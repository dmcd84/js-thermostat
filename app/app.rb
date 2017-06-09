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
  @user_temp = 30
  @user_temp.to_json
end



end
