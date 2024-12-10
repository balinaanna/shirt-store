require 'rails_helper'

RSpec.describe ShoppingCartService do
  let(:shirt1) { Shirt.create(name: 'Shirt 1', price: 8) }
  let(:shirt2) { Shirt.create(name: 'Shirt 2', price: 8) }
  let(:shirt3) { Shirt.create(name: 'Shirt 3', price: 8) }
  let(:shirt4) { Shirt.create(name: 'Shirt 4', price: 8) }
  let(:shirt5) { Shirt.create(name: 'Shirt 5', price: 8) }

  describe '#calculate_total' do
    it 'applies a 5% discount for only two different shirts' do
      cart_items = [
        { "id" => shirt1.id, "quantity" => 1 },
        { "id" => shirt2.id, "quantity" => 1 }
      ]
      service = ShoppingCartService.new(cart_items)
      expect(service.calculate_total).to eq(15.20)
    end

    it 'applies a 10% discount for only three different shirts' do
      cart_items = [
        { "id" => shirt1.id, "quantity" => 1 },
        { "id" => shirt2.id, "quantity" => 1 },
        { "id" => shirt3.id, "quantity" => 1 }
      ]
      service = ShoppingCartService.new(cart_items)
      expect(service.calculate_total).to eq(21.60)
    end

    it 'applies a 15% discount for only four different shirts' do
      cart_items = [
        { "id" => shirt1.id, "quantity" => 1 },
        { "id" => shirt2.id, "quantity" => 1 },
        { "id" => shirt3.id, "quantity" => 1 },
        { "id" => shirt4.id, "quantity" => 1 }
      ]
      service = ShoppingCartService.new(cart_items)
      expect(service.calculate_total).to eq(27.20)
    end

    it 'applies a 20% discount for only five different shirts' do
      cart_items = [
        { "id" => shirt1.id, "quantity" => 1 },
        { "id" => shirt2.id, "quantity" => 1 },
        { "id" => shirt3.id, "quantity" => 1 },
        { "id" => shirt4.id, "quantity" => 1 },
        { "id" => shirt5.id, "quantity" => 1 }
      ]
      service = ShoppingCartService.new(cart_items)
      expect(service.calculate_total).to eq(32.0)
    end

    it 'calculates the total with the biggest discount' do
      cart_items = [
        { "id" => shirt1.id, "quantity" => 2 },
        { "id" => shirt2.id, "quantity" => 2 },
        { "id" => shirt3.id, "quantity" => 2 },
        { "id" => shirt4.id, "quantity" => 1 },
        { "id" => shirt5.id, "quantity" => 1 }
      ]
      service = ShoppingCartService.new(cart_items)
      expect(service.calculate_total).to eq(53.60)
    end

    it 'returns 0 for an empty cart' do
      service = ShoppingCartService.new([])
      expect(service.calculate_total).to eq(0)
    end

    it 'applies no discount for all shirts of the same type' do
      cart_items = [{ "id" => shirt1.id, "quantity" => 30 }]
      service = ShoppingCartService.new(cart_items)
      expect(service.calculate_total).to eq(30 * 8.0)
    end

    it 'raises an error for a non-existent shirt ID' do
      cart_items = [{ "id" => 99999, "quantity" => 1 }]
      expect { ShoppingCartService.new(cart_items) }.to raise_error(ActiveRecord::RecordNotFound)
    end

    it 'returns 0 for a cart with quantities of 0' do
      cart_items = [
        { "id" => shirt1.id, "quantity" => 0 },
        { "id" => shirt2.id, "quantity" => 0 }
      ]
      service = ShoppingCartService.new(cart_items)
      expect(service.calculate_total).to eq(0)
    end
  end
end
