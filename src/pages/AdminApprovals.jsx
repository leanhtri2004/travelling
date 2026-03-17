import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminApprovals() {
  return (
    <AdminLayout>
      <PageHeader title="Service Approvals" subtitle="Verify providers and service listings." />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        {["Ocean Blue Resort", "Hoi An Food Tour", "Le Minh Hoang"].map((item) => (
          <div key={item} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{item}</p>
              <p className="text-xs text-slate-500">Submitted 2 days ago</p>
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
    </AdminLayout>
  );
}
