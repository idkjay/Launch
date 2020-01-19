require 'sinatra'
require_relative 'config/application'

set :bind, '0.0.0.0'  # bind to all interfaces

enable :sessions

get '/' do
  @contacts = Contact.limit(3)
  erb :index
end


get '/contacts/new' do
  erb:new
end

post '/contacts/new' do
  Contact.create(params)
  redirect '/'
end

get '/contacts/:id' do
  @contact = Contact.find(params["id"])
  erb:show
end
