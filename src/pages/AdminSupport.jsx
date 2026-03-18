import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminSupport() {
  const statusClass = {
    Open: "badge badge-danger",
    Pending: "badge badge-warning",
  };
  return (
    <AdminLayout>
      <PageHeader title="Support Tickets" subtitle="Manage customer issues and SLA." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Open", value: "24" },
          { label: "Pending", value: "12" },
          { label: "Resolved", value: "310" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-500 uppercase">{stat.label}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4 font-semibold">Ticket</th>
              <th className="text-left p-4 font-semibold">User</th>
              <th className="text-left p-4 font-semibold">Priority</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["TK-1001", "Anna Nguyen", "High", "Open"],
              ["TK-1002", "Mark Lee", "Medium", "Pending"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-slate-100">
                <td className="p-4 font-medium">{row[0]}</td>
                <td className="p-4 text-slate-600">{row[1]}</td>
                <td className="p-4 text-slate-600">{row[2]}</td>
                <td className="p-4">
                  <span className={statusClass[row[3]] || "badge badge-neutral"}>{row[3]}</span>
                </td>
                <td className="p-4">
                  <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
