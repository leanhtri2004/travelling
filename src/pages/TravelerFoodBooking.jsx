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
          <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Date & time" />
          <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Number of guests" />
          <textarea
            className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm min-h-[100px]"
            placeholder="Special requests"
          />
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
        </div>
      </div>
    </TravelerLayout>
  );
}
