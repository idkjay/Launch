class StarshipsController < ApplicationController
  def index
    @starships = Starship.all
  end

  def show
    @starship = Starship.find(params["id"])
  end

  def new
    @starship = Starship.new
  end

  def create
    @starship = Starship.new(:starship_params)

    if @starship.save
      redirect_to @starship
    else
      render :new
    end
  end
end
