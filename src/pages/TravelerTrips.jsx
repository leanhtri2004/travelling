import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerTrips() {
  return (
    <TravelerLayout>
      <PageHeader
        title="Trips"
        subtitle="Manage all your saved trips and active journeys."
        action={<button className="px-4 py-2 bg-primary text-white rounded-lg font-bold">New Trip</button>}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {["Da Nang Escape", "Ha Noi Heritage"].map((trip) => (
          <div key={trip} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold">{trip}</h3>
            <p className="text-sm text-slate-500 mt-1">5 days • 2 travelers • Budget $1,200</p>
            <div className="flex items-center gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                Active
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                Coastal
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold mb-4">Passengers</h3>
        <div className="space-y-3 text-sm text-slate-600">
          <div className="flex items-center justify-between">
            <span>Nguyen Thi Mai • 28</span>
            <button className="text-primary text-xs font-bold">Edit</button>
          </div>
          <div className="flex items-center justify-between">
            <span>Tran Hoang Minh • 30</span>
            <button className="text-primary text-xs font-bold">Edit</button>
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
          Add Passenger
        </button>
      </div>
    </TravelerLayout>
  );
}
