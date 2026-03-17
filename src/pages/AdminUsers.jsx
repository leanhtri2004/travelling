import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminUsers() {
  const statusClass = {
    Active: "badge badge-success",
    Suspended: "badge badge-danger",
  };
  return (
    <AdminLayout>
      <PageHeader title="Users" subtitle="Manage traveler accounts and permissions." />
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4 font-semibold">Name</th>
              <th className="text-left p-4 font-semibold">Email</th>
              <th className="text-left p-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Anna Nguyen", "anna@email.com", "Active"],
              ["Mark Lee", "mark@email.com", "Suspended"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-slate-100">
                <td className="p-4 font-medium">{row[0]}</td>
                <td className="p-4 text-slate-600">{row[1]}</td>
                <td className="p-4">
                  <span className={statusClass[row[2]] || "badge badge-neutral"}>{row[2]}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
