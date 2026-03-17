import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { useParams } from "react-router-dom";
import { hotels } from "../data/hotels.js";

export default function TravelerHotelDetails() {
  const { hotelId } = useParams();
  const hotel = hotels.find((item) => item.id === hotelId) || hotels[0];
  return (
    <TravelerLayout>
      <PageHeader
        title="Hotel Details"
        subtitle="Pick a hotel to see rooms, tours, and services."
      />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="h-48 lg:h-56 lg:w-72 rounded-xl bg-slate-100" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold">{hotel.name}</h3>
            <p className="text-sm text-slate-500 mt-1">
              {hotel.location} • {hotel.rating} rating • {hotel.price}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {hotel.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600"
                >
                  {amenity}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
                Book Hotel
              </button>
              <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
                View Rooms
              </button>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-3">Hotel Tours</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hotel.tours.map((tour) => (
              <div key={tour.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold">{tour.name}</p>
                <p className="text-xs text-slate-500">
                  {tour.price} • {tour.seats}
                </p>
                <button className="mt-3 text-primary text-xs font-bold">Book Tour</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TravelerLayout>
  );
}
