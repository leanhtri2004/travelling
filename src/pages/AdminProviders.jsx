import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminProviders() {
  const statusClass = {
    Active: "badge badge-success",
    Pending: "badge badge-warning",
  };
  return (
    <AdminLayout>
      <PageHeader title="Providers" subtitle="Hotels, transport, and hotel-managed tours." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "Ocean Blue Resort", type: "Hotel", status: "Active" },
          { name: "Hoi An Lantern Tour", type: "Hotel Tour", status: "Pending" },
        ].map((provider) => (
          <div key={provider.name} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold">{provider.name}</h3>
            <p className="text-sm text-slate-500">Type: {provider.type}</p>
            <div className="mt-2">
              <span className={statusClass[provider.status] || "badge badge-neutral"}>
                {provider.status}
              </span>
            </div>
            <button className="mt-4 px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
