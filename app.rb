require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/assets'

get '/' do
#  haml
end

get '/notification' do
  haml :notification
end
