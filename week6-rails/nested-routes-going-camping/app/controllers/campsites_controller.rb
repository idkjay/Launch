class CampsitesController < ApplicationController
  def index
    @title = "All Campsites:"
    @campsites = Campsite.all
  end

  def show
    @campsite = Campsite.find(params["id"])
    @camper = Camper.new
  end

end
