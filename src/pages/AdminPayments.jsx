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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Volume", value: "$98k" },
          { label: "Disputes", value: "12" },
          { label: "Payouts Pending", value: "$4.3k" },
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
              <th className="text-left p-4 font-semibold">Transaction</th>
              <th className="text-left p-4 font-semibold">User</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Amount</th>
              <th className="text-left p-4 font-semibold">Action</th>
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
