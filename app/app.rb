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
  @user_temp = 20
  @user_temp.to_json
end

post '/temperature' do
  p @user_temp = JSON.parse(params["temp"])
  redirect '/temperature'
end

end
