require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/assets'

get '/' do
  haml :notification
end

get '/featured' do
  haml :featured
end
