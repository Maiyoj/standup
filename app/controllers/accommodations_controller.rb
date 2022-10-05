class AccommodationsController < ApplicationController
    def index
        accommodations = Accommodation.all
        render json: accommodations.joins(:bookings).select('accommodations.*,bookings.*')
    end
end
