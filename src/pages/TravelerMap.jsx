import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerMap() {
  return (
    <TravelerLayout>
      <PageHeader title="Map & Routes" subtitle="Visualize your itinerary and route planning." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm h-96 flex items-center justify-center text-slate-400">
          Map Preview (Interactive map placeholder)
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-lg font-bold">Locations</h3>
          {[
            { name: "My Khe Beach", time: "15 mins", mode: "Ride-share" },
            { name: "Cham Museum", time: "10 mins", mode: "Walk" },
            { name: "Dragon Bridge", time: "12 mins", mode: "Taxi" },
          ].map((loc) => (
            <div key={loc.name} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{loc.name}</p>
                <p className="text-xs text-slate-500">{loc.time} • {loc.mode}</p>
              </div>
              <button className="text-primary text-xs font-bold">Route</button>
            </div>
          ))}
          <button className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
            Optimize Route
          </button>
        </div>
      </div>
    </TravelerLayout>
  );
}
