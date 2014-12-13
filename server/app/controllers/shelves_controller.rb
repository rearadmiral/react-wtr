class ShelvesController < ApplicationController

  respond_to :json

  def index
    @shelves = Shelf.all
  end
end
