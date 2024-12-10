class ShoppingCartsController < ApplicationController
  def calculate_total
    cart_items = params.require(:cart_items)
    service = ShoppingCartService.new(cart_items)
    total = service.calculate_total

    render json: { total: total }
  end
end
