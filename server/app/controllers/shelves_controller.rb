class ShelvesController < ApplicationController

  respond_to :json

  def index
    @shelves = Shelf.all
    
    render json: @shelves
  end
end
