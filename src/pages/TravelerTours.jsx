import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { hotels } from "../data/hotels.js";

export default function TravelerTours() {
  const tours = hotels.flatMap((hotel) =>
    hotel.tours.map((tour) => ({ ...tour, hotel: hotel.name }))
  );
  return (
    <TravelerLayout>
      <PageHeader
        title="Hotel Tours"
        subtitle="Browse tours managed by your hotel and bundled services."
      />
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
        {tours.map((tour) => (
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
        ))}
      </div>
      </div>
    </TravelerLayout>
  );
}
