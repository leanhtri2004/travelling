import HotelLayout from "../layouts/HotelLayout.jsx";

export default function HotelDashboard() {
  return (
    <HotelLayout>
      <div>
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <p className="text-slate-500">Real-time performance and operational updates.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-500">Occupancy Rate</span>
            <span className="material-symbols-outlined text-primary">bed</span>
          </div>
          <div>
            <p className="text-3xl font-bold">85%</p>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1 font-medium">
              <span className="material-symbols-outlined text-xs">trending_up</span> +5% from last week
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <p className="text-sm font-medium text-slate-500">Upcoming Check-ins</p>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <p className="text-sm font-medium text-slate-500">Monthly Revenue</p>
          <p className="text-3xl font-bold mt-2">$24,320</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Booking Trends</h3>
          <div className="h-48 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
            Chart Placeholder
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Alerts</h3>
          <div className="space-y-3 text-sm text-slate-600">
            <p>Low inventory for Deluxe Ocean View (3 rooms left).</p>
            <p>3 pending booking confirmations.</p>
            <p>New review requires response.</p>
          </div>
        </div>
      </div>
    </HotelLayout>
  );
}
