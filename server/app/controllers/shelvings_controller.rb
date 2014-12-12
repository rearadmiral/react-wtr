class ShelvingsController < ApplicationController
  respond_to :json

  def index
    @shelvings = Shelving.all
    render json: @shelvings
  end

end
