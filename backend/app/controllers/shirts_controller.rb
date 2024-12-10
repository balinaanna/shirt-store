class ShirtsController < ApplicationController
  def index
    shirts = Shirt.all

    render json: shirts
  end
end
