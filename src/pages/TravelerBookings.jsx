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
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4 font-semibold">Service</th>
              <th className="text-left p-4 font-semibold">Date</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Amount</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TravelerLayout>
  );
}
