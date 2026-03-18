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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Bookings", value: "8,420" },
          { label: "Pending", value: "96" },
          { label: "Cancellations", value: "34" },
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
              <th className="text-left p-4 font-semibold">Booking ID</th>
              <th className="text-left p-4 font-semibold">Service</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Amount</th>
              <th className="text-left p-4 font-semibold">Action</th>
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
