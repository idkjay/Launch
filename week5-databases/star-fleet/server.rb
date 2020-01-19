require 'sinatra'
require 'pry'
require_relative 'config/application'

set :bind, '0.0.0.0'  # bind to all interfaces

enable :sessions

# Any classes you add to the models folder will automatically be made available in this server file

get '/' do
  redirect '/starships'
end

get '/starships' do
  # Use a custom Starship class that inherits from ActiveRecord to retrieve your database objects
  # You should be using ActiveRecord CRUD methods to aid you.
  # E.g. Planet.where(planet_type: "gas giant"), etc.
  @ships = Ship.all
  erb :'starships/index'
end

get '/crew-members' do
  @members = Member.order(:last_name)
  erb:'crew-members/index'
end

get '/starships/new' do
  erb:'starships/new'
end

post '/crew-members' do
  @first_name = params["first_name"]
  @last_name = params["last_name"]
  @specialty_division = params["specialty_division"]

  @ship = Ship.find(params["ship_id"])
  @member = Member.new(params)

  if @member.save
    flash[:notice] = 'Crew Member was added successfully.'
    redirect "/crew-members"
  else
    flash.now[:notice] = @member.errors.full_messages.to_sentence
    erb:"/starships/show"
  end
end

post '/starships/new' do
  @id = params["id"]
  @ship_name = params["ship_name"]
  @ship_class = params["ship_class"]
  @ship_location = params["ship_location"]

  @ship = Ship.new(params)

  if @ship.save
    flash[:notice] = 'Ship was created successfully.'
    redirect "/starships/#{@ship.id}"
  else
    flash.now[:notice] = @ship.errors.full_messages.to_sentence
    erb:'starships/new'
  end
end

get '/starships/:id' do
  @ship = Ship.find(params["id"])
  erb:'starships/show'
end

get '/crew-members/:id' do
  @member = Member.find(params["id"])
  erb:'crew-members/show'
end
