import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerTransport() {
  return (
    <TravelerLayout>
      <PageHeader
        title="Transportation & Pickup"
        subtitle="Suggested routes and pickup services based on your itinerary."
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="space-y-6">
          {[
            {
              title: "Airport → Hotel",
              time: "25 mins",
              cost: "$18",
              note: "Private sedan • Meet & greet",
            },
            {
              title: "Hotel → Hoi An",
              time: "45 mins",
              cost: "$22",
              note: "SUV • Flexible stops",
            },
          ].map((route) => (
            <div key={route.title} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-1">{route.title}</h3>
                  <p className="text-sm text-slate-500">
                    Estimated time: {route.time} • Cost: {route.cost}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{route.note}</p>
                </div>
                <span className="material-symbols-outlined text-primary">directions_car</span>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-200 p-3">
                  <p className="text-xs text-slate-500">Pickup time</p>
                  <input className="mt-2 w-full text-sm font-semibold" type="time" defaultValue="09:00" />
                </div>
                <div className="rounded-xl border border-slate-200 p-3">
                  <p className="text-xs text-slate-500">Passengers</p>
                  <input className="mt-2 w-full text-sm font-semibold" type="number" min={1} defaultValue={2} />
                </div>
                <div className="rounded-xl border border-slate-200 p-3">
                  <p className="text-xs text-slate-500">Luggage</p>
                  <input className="mt-2 w-full text-sm font-semibold" type="number" min={0} defaultValue={2} />
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
                  Book Pickup
                </button>
                <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
                  Compare Options
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Saved Drivers</h3>
          <div className="space-y-3">
            {[
              { name: "Hai Tran", car: "Toyota Vios • 4 seats", rating: "4.9" },
              { name: "Linh Vu", car: "SUV • 6 seats", rating: "4.8" },
            ].map((driver) => (
              <div key={driver.name} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{driver.name}</p>
                  <p className="text-xs text-slate-500">{driver.car}</p>
                </div>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">star</span>
                  {driver.rating}
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
            View All Drivers
          </button>
        </div>
      </div>
    </TravelerLayout>
  );
}
