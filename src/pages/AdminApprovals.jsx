import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminApprovals() {
  return (
    <AdminLayout>
      <PageHeader title="Service Approvals" subtitle="Verify providers and service listings." />
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_2.1fr] gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold">Approval Filters</h3>
          <div className="space-y-2 text-sm text-slate-600">
            {["Hotels", "Tours", "Guides", "Transport"].map((tag) => (
              <label key={tag} className="flex items-center gap-2">
                <input type="checkbox" /> {tag}
              </label>
            ))}
          </div>
          <button className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
            Apply Filters
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          {["Ocean Blue Resort", "Hoi An Food Tour", "Le Minh Hoang"].map((item) => (
            <div key={item} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">{item}</p>
                <p className="text-xs text-slate-500">Submitted 2 days ago • Verification pending</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold">
                  Approve
                </button>
                <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
