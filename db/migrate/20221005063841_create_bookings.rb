class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.integer :accommodation_id
      t.string :checkin
      t.string :checkout

      t.timestamps
    end
  end
end
