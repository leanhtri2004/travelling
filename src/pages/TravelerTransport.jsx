import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerTransport() {
  return (
    <TravelerLayout>
      <PageHeader
        title="Transportation & Pickup"
        subtitle="Suggested routes and pickup services based on your itinerary."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-2">Airport → Hotel</h3>
          <p className="text-sm text-slate-500">Estimated time: 25 mins • Cost: $18</p>
          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Book Pickup
            </button>
            <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
              View Alternatives
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-2">Hotel → Hoi An</h3>
          <p className="text-sm text-slate-500">Estimated time: 45 mins • Cost: $22</p>
          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Reserve Driver
            </button>
            <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
              Compare Options
            </button>
          </div>
        </div>
      </div>
    </TravelerLayout>
  );
}
