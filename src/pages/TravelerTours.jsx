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
            <p className="text-sm text-slate-500">Price: {tour.price}</p>
            <p className="text-sm text-slate-500">Seats: {tour.seats}</p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Register
            </button>
          </div>
        ))}
      </div>
    </TravelerLayout>
  );
}
