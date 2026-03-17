import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminBookings() {
  const statusClass = {
    Confirmed: "badge badge-success",
    Paid: "badge badge-info",
    Scheduled: "badge badge-info",
  };
  return (
    <AdminLayout>
      <PageHeader title="Bookings" subtitle="Monitor platform-wide bookings." />
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4 font-semibold">Booking ID</th>
              <th className="text-left p-4 font-semibold">Service</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["BK-1023", "Ocean Blue Resort", "Confirmed", "$520"],
              ["BK-1024", "Hoi An Lantern Tour", "Paid", "$75"],
              ["BK-1025", "Hotel Tour: Ba Na Hills", "Scheduled", "$60"],
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
