import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminReports() {
  return (
    <AdminLayout>
      <PageHeader title="Reports" subtitle="Generate and export platform analytics." />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl">
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
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
            Download Report
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
