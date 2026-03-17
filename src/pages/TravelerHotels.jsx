import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { hotels } from "../data/hotels.js";
import { Link } from "react-router-dom";

export default function TravelerHotels() {
  return (
    <TravelerLayout>
      <PageHeader
        title="Hotels"
        subtitle="Search and filter hotels by price, stars, and amenities."
        action={<button className="px-4 py-2 bg-primary text-white rounded-lg font-bold">Filter</button>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.name}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all fade-in-up"
          >
            <div className="h-40 rounded-xl bg-slate-100 mb-4 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                alt={`${hotel.name} cover`}
                src="https://images.unsplash.com/photo-1501117716987-c8e4b3d8f544?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <h3 className="text-lg font-bold">{hotel.name}</h3>
            <p className="text-sm text-slate-500 mt-1">{hotel.location} • {hotel.price}</p>
            <div className="flex items-center gap-2 mt-3 text-amber-500 text-sm font-semibold">
              <span className="material-symbols-outlined text-sm">star</span>
              {hotel.rating}
            </div>
            <Link
              to={`/traveler/hotels/${hotel.id}`}
              className="mt-4 inline-flex px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </TravelerLayout>
  );
}
