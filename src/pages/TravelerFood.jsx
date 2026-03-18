import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerFood() {
  return (
    <TravelerLayout>
      <PageHeader title="Food Recommendations" subtitle="Local specialties and top-rated restaurants." />
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_2.1fr] gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold">Taste Preferences</h3>
          <div className="space-y-2 text-sm text-slate-600">
            {["Local street food", "Seafood", "Vegetarian", "Fine dining"].map((tag) => (
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
          {[
            { name: "Mi Quang", place: "Ba Mua", price: "$4-8", rating: "4.8" },
            { name: "Banh Xeo", place: "76 Street", price: "$3-6", rating: "4.7" },
            { name: "Seafood Platter", place: "My Khe", price: "$15-25", rating: "4.6" },
            { name: "Banh Mi Queen", place: "Old Quarter", price: "$2-5", rating: "4.9" },
          ].map((food) => (
            <div key={food.name} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="h-32 rounded-xl bg-slate-100 mb-3 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  alt={`${food.name} photo`}
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop"
                />
              </div>
              <h3 className="text-lg font-bold">{food.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{food.place}</p>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-500">
                <span>Price: {food.price}</span>
                <span className="flex items-center gap-1 text-amber-500 font-semibold">
                  <span className="material-symbols-outlined text-sm">star</span>
                  {food.rating}
                </span>
              </div>
              <div className="mt-4 flex gap-3">
                <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
                  Add to Itinerary
                </button>
                <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
                  Reserve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TravelerLayout>
  );
}
