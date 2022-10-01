//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Restaurant = require('./models/Restaurant')
const Reservation = require('./models/Reservation')
const Review = require('./models/Review')

//associations could go here!

User.belongsTo(Restaurant)
Restaurant.hasMany(User)

Review.belongsTo(User)
User.hasMany(Review)

Reservation.belongsTo(User)
User.hasMany(Reservation)

Restaurant.belongsToMany(Reservation, {through: 'restaurantReservation'})
Reservation.belongsToMany(Restaurant, {through: 'restaurantReservation'})

Restaurant.belongsToMany(Review, {through: 'restaurantReview'})
Review.belongsToMany(Restaurant, {through: 'restaurantReview'})

module.exports = {
  db,
  models: {
    User,
    Restaurant,
    Reservation,
    Review
  },
}
