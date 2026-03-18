import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerFoodBooking() {
  return (
    <TravelerLayout>
      <PageHeader
        title="Food Booking"
        subtitle="Reserve restaurants or local food experiences."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold">Book a Table</h3>
          <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Restaurant name" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" type="date" />
            <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" type="time" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Guests" type="number" />
            <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm">
              <option>Indoor seating</option>
              <option>Outdoor seating</option>
              <option>Chef table</option>
            </select>
          </div>
          <textarea
            className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm min-h-[100px]"
            placeholder="Special requests"
          />
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <input type="checkbox" defaultChecked />
            Notify me if earlier slots open.
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
            Confirm Booking
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Suggested Food Spots</h3>
          <div className="space-y-4">
            {[
              { name: "Mi Quang Ba Mua", time: "Tonight 7:00 PM" },
              { name: "Banh Xeo 76", time: "Tomorrow 12:30 PM" },
              { name: "Seafood My Khe", time: "Fri 6:30 PM" },
            ].map((spot) => (
              <div key={spot.name} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{spot.name}</p>
                  <p className="text-xs text-slate-500">{spot.time}</p>
                </div>
                <button className="text-primary text-xs font-bold">Book</button>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 p-4 bg-slate-50/70">
            <p className="text-sm font-semibold">Dining perks</p>
            <p className="text-xs text-slate-500 mt-1">
              Free dessert for reservations made before 3 PM.
            </p>
          </div>
        </div>
      </div>
    </TravelerLayout>
  );
}
