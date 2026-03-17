import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerPayments() {
  const statusClass = {
    Paid: "badge badge-success",
    Pending: "badge badge-warning",
  };
  return (
    <TravelerLayout>
      <PageHeader title="Payments" subtitle="Track invoices and payment history." />
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4 font-semibold">Invoice</th>
              <th className="text-left p-4 font-semibold">Date</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["INV-1023", "Jun 10", "Paid", "$520"],
              ["INV-1024", "Jun 12", "Pending", "$18"],
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
    </TravelerLayout>
  );
}
