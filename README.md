# shirt-store
This is the app that calculates the price of a shopping cart, giving as big a discount as possible.

*Ruby on Rails, React Native, PostgreSQL*

## Start the app

Clone the repo.

##### Backend Setup:

```sh
cd shirt-store/backend
bundle install
rails db:create db:migrate db:seed
rails s
```

##### Frontend Setup:

```sh
cd ../frontend
npm install
npm run start
```

##### Run the App:
The Backend will run on [`http://localhost:3000/`](http://localhost:3000/)

The Frontend app will run on [`http://localhost:8081/`](http://localhost:8081/)

You can also use a React Native emulator or physical device for the frontend.

## Testing

Run test suit with:

```sh
cd backend
rspec --format documentation
```

### How discounts are calculated

There are 5 shirts in the collection.

One of any of the five shirts costs $8.

If, however, you buy two different shirts, you get a 5% discount on those two shirts.

If you buy 3 different shirts, you get a 10% discount.

If you buy 4 different shirts, you get a 15% discount.

If you buy all 5, you get a 20% discount.

If you buy four shirts, of which 3 are different, you get a 10% discount on the 3 that form part of a set, but the fourth shirt still costs $8.
