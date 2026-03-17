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
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4 font-semibold">Ticket</th>
              <th className="text-left p-4 font-semibold">User</th>
              <th className="text-left p-4 font-semibold">Priority</th>
              <th className="text-left p-4 font-semibold">Status</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
