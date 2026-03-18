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
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_2.1fr] gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold">Refine Your Stay</h3>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Price Range</p>
            <div className="mt-3 flex items-center gap-2">
              <input className="w-24 px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="$80" />
              <span className="text-slate-400">to</span>
              <input className="w-24 px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="$260" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Amenities</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Pool", "Beachfront", "Spa", "Breakfast", "Airport Pickup"].map((amenity) => (
                <span
                  key={amenity}
                  className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Rating</p>
            <div className="mt-2 flex items-center gap-2 text-amber-500 text-sm font-semibold">
              {[5, 4, 3].map((star) => (
                <div
                  key={star}
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50"
                >
                  <span className="material-symbols-outlined text-sm">star</span>
                  {star}+
                </div>
              ))}
            </div>
          </div>
          <button className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
            Apply Filters
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="h-40 rounded-xl bg-slate-100 mb-4 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  alt={`${hotel.name} cover`}
                  src="https://images.unsplash.com/photo-1501117716987-c8e4b3d8f544?q=80&w=1200&auto=format&fit=crop"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">{hotel.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {hotel.location} • {hotel.price}
                  </p>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <p>From</p>
                  <p className="text-lg font-bold text-slate-900">{hotel.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 text-amber-500 text-sm font-semibold">
                <span className="material-symbols-outlined text-sm">star</span>
                {hotel.rating}
                <span className="text-slate-400 text-xs">• 420 reviews</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {hotel.amenities.slice(0, 3).map((amenity) => (
                  <span
                    key={amenity}
                    className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <Link
                  to={`/traveler/hotels/${hotel.id}`}
                  className="flex-1 inline-flex justify-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold"
                >
                  View Details
                </Link>
                <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TravelerLayout>
  );
}
