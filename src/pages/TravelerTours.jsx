import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { hotels } from "../data/hotels.js";

export default function TravelerTours() {
  const bookedHotelId = hotels[0]?.id;
  const bookedHotel = hotels.find((hotel) => hotel.id === bookedHotelId);
  const tours = bookedHotel
    ? bookedHotel.tours.map((tour) => ({ ...tour, hotel: bookedHotel.name }))
    : [];
  return (
    <TravelerLayout>
      <PageHeader
        title="Hotel Tours"
        subtitle="Browse tours managed by your hotel and bundled services."
      />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        {bookedHotel ? (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs text-slate-500 uppercase">Booked Hotel</p>
              <p className="text-lg font-bold">{bookedHotel.name}</p>
              <p className="text-sm text-slate-500">{bookedHotel.location}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
              Active booking
            </span>
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/70 text-sm text-slate-600">
            Please book a hotel first to see tours managed by that hotel.
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_2.1fr] gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold">Tour Filters</h3>
          <div className="space-y-2 text-sm text-slate-600">
            {["Half-day", "Full-day", "Private", "Family-friendly"].map((tag) => (
              <label key={tag} className="flex items-center gap-2">
                <input type="checkbox" /> {tag}
              </label>
            ))}
          </div>
          <button className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
            Apply Filters
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tours.length ? (
          tours.map((tour) => (
          <div
            key={tour.name}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all fade-in-up"
          >
            <div className="h-36 rounded-xl bg-slate-100 mb-4 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                alt={`${tour.name} photo`}
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <h3 className="text-lg font-bold">{tour.name}</h3>
            <p className="text-sm text-slate-500 mt-1">Hotel: {tour.hotel}</p>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
              <span>Price: {tour.price}</span>
              <span>Seats: {tour.seats}</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Route: {tour.route}</p>
            <p className="text-xs text-slate-500">Duration: {tour.duration}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tour.highlights?.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
                Register
              </button>
              <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
                Add to Trip
              </button>
            </div>
          </div>
        ))
        ) : (
          <div className="col-span-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-sm text-slate-600">
            No tours available. Select a booked hotel to see its tours.
          </div>
        )}
      </div>
      </div>
    </TravelerLayout>
  );
}
