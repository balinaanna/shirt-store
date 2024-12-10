class ShoppingCartService
  DISCOUNTS = {
    1 => 0,
    2 => 0.05,
    3 => 0.1,
    4 => 0.15,
    5 => 0.2
  }.freeze

  def initialize(cart_items)
    @cart_items = cart_items.map do |item|
      shirt = Shirt.find(item["id"])
      { id: item["id"], quantity: item["quantity"], price: shirt.price }
    end
  end

  def calculate_total
    groups = group_shirts
    groups.sum { |group| calculate_group_price(group) }
  end

  private

  def group_shirts
    cart_copy = @cart_items.map(&:dup)
    groups = []

    while cart_copy.any? { |item| item[:quantity] > 0 }
      group = []
      cart_copy.each do |item|
        next if item[:quantity] == 0

        group << { id: item[:id], price: item[:price] }
        item[:quantity] -= 1
      end
      groups << group
    end

    groups
  end

  def calculate_group_price(group)
    discount = DISCOUNTS[group.size]
    group_price = group.sum { |item| item[:price] }
    group_price * (1 - discount)
  end
end
