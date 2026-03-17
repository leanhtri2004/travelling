import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function HotelProfile() {
  return (
    <HotelLayout>
      <PageHeader title="Hotel Profile" subtitle="Update property details and amenities." />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 max-w-3xl">
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Hotel Name" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Address" />
        <textarea
          className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm min-h-[120px]"
          placeholder="Description"
        />
        <div className="flex flex-wrap gap-2">
          {["Pool", "Spa", "Breakfast", "Airport Shuttle"].map((amenity) => (
            <span
              key={amenity}
              className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600"
            >
              {amenity}
            </span>
          ))}
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
          Save Changes
        </button>
      </div>
    </HotelLayout>
  );
}
