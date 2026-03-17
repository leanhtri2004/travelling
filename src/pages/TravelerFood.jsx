import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerFood() {
  return (
    <TravelerLayout>
      <PageHeader title="Food Recommendations" subtitle="Local specialties and top-rated restaurants." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Mi Quang", place: "Ba Mua", price: "$4-8" },
          { name: "Banh Xeo", place: "76 Street", price: "$3-6" },
          { name: "Seafood Platter", place: "My Khe", price: "$15-25" },
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
            <p className="text-sm text-slate-500">Price: {food.price}</p>
            <button className="mt-4 px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
              Add to Itinerary
            </button>
          </div>
        ))}
      </div>
    </TravelerLayout>
  );
}
