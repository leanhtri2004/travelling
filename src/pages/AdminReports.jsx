import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminReports() {
  return (
    <AdminLayout>
      <PageHeader title="Reports" subtitle="Generate and export platform analytics." />
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_2.1fr] gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Date Range</label>
              <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Last 30 days" />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Report Type</label>
              <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm">
                <option>Bookings Summary</option>
                <option>Revenue by Service</option>
                <option>User Growth</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase">Export Format</label>
              <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm">
                <option>PDF</option>
                <option>CSV</option>
                <option>XLSX</option>
              </select>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Download Report
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold">Scheduled Reports</h3>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Weekly Revenue Summary</span>
              <span className="text-xs text-slate-500">Every Monday</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Monthly Bookings Breakdown</span>
              <span className="text-xs text-slate-500">1st of month</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
            Create Schedule
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
