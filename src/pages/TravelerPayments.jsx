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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
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
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-lg font-bold">Payment Method</h3>
          <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50/80">
            <p className="text-sm font-semibold">Visa •••• 4821</p>
            <p className="text-xs text-slate-500">Expires 10/27</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-sm font-semibold">Upcoming Payment</p>
            <p className="text-xs text-slate-500 mt-1">Airport pickup • Jun 15</p>
            <p className="text-lg font-bold mt-2">$18</p>
          </div>
          <button className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
            Manage Cards
          </button>
        </div>
      </div>
    </TravelerLayout>
  );
}
