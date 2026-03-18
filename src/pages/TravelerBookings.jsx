import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerBookings() {
  const statusClass = {
    Confirmed: "badge badge-success",
    Pending: "badge badge-warning",
    Paid: "badge badge-info",
    Scheduled: "badge badge-info",
  };
  return (
    <TravelerLayout>
      <PageHeader title="Bookings" subtitle="Track all your hotel, tour, and transport reservations." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Bookings", value: "5", icon: "event_available" },
          { label: "Upcoming Trips", value: "2", icon: "calendar_today" },
          { label: "Pending Payments", value: "$93", icon: "payments" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 uppercase">{stat.label}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
              </div>
              <span className="material-symbols-outlined text-primary">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4 font-semibold">Service</th>
              <th className="text-left p-4 font-semibold">Date</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Amount</th>
              <th className="text-left p-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Ocean Blue Hotel", "Jun 15 - Jun 20", "Confirmed", "$520"],
              ["Airport Pickup", "Jun 15", "Pending", "$18"],
              ["Hoi An Night Tour", "Jun 18", "Paid", "$75"],
              ["Hotel Tour: Ba Na Hills", "Jun 19", "Scheduled", "$60"],
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
    </TravelerLayout>
  );
}
