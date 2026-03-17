import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerMap() {
  return (
    <TravelerLayout>
      <PageHeader title="Map & Routes" subtitle="Visualize your itinerary and route planning." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm h-96 flex items-center justify-center text-slate-400">
          Map Preview (Google Maps integration placeholder)
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-lg font-bold">Locations</h3>
          {["My Khe Beach", "Cham Museum", "Dragon Bridge"].map((loc) => (
            <div key={loc} className="flex items-center justify-between">
              <span className="text-sm font-medium">{loc}</span>
              <button className="text-primary text-xs font-bold">Route</button>
            </div>
          ))}
        </div>
      </div>
    </TravelerLayout>
  );
}
