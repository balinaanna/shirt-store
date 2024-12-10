require 'rails_helper'

RSpec.describe ShirtsController, type: :request do
  let!(:shirt1) { Shirt.create(name: 'Shirt 1', price: 8) }
  let!(:shirt2) { Shirt.create(name: 'Shirt 2', price: 8) }

  describe "GET /index" do
    it 'returns all shirts' do
      get '/shirts'

      expect(response).to have_http_status(200)
      json_response = JSON.parse(response.body)
      expect(json_response.size).to be(2)
      expect(json_response).to include(shirt1.as_json)
      expect(json_response).to include(shirt2.as_json)
    end
  end
end
