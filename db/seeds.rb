# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Accommodation.create(
    name: 'Beach House', location: 'Malindi'
)
Accommodation.create(
    name: 'Charming House', location: 'Kakamega'
)
Accommodation.create(
    name: 'Lisbon Flat', location: 'Portugal'
)
Accommodation.create(
    name: 'heights', location: 'Langata'
)



def time_rand from = 0.0, to = Time.now
    Time.at(from + rand * (to.to_f - from.to_f))
end

5.times do 
    Booking.create(
    accommodation_id: rand(1..3), checkin:time_rand, checkout:time_rand
    )
end
