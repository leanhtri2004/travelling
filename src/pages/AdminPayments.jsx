import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminPayments() {
  const statusClass = {
    Completed: "badge badge-success",
    Disputed: "badge badge-danger",
  };
  return (
    <AdminLayout>
      <PageHeader title="Payments" subtitle="Track transactions and disputes." />
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4 font-semibold">Transaction</th>
              <th className="text-left p-4 font-semibold">User</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["TX-2041", "Anna Nguyen", "Completed", "$520"],
              ["TX-2042", "Mark Lee", "Disputed", "$75"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-slate-100">
                <td className="p-4 font-medium">{row[0]}</td>
                <td className="p-4 text-slate-600">{row[1]}</td>
                <td className="p-4">
                  <span className={statusClass[row[2]] || "badge badge-neutral"}>{row[2]}</span>
                </td>
                <td className="p-4 font-semibold">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
