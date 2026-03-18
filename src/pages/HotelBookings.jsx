import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function HotelBookings() {
  const statusClass = {
    Confirmed: "badge badge-success",
    Pending: "badge badge-warning",
    Scheduled: "badge badge-info",
  };
  return (
    <HotelLayout>
      <PageHeader title="Bookings" subtitle="Manage guest reservations and status." />
      <div className="hotel-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50/80 text-slate-500">
            <tr>
              <th className="text-left p-4 font-semibold">Guest</th>
              <th className="text-left p-4 font-semibold">Dates</th>
              <th className="text-left p-4 font-semibold">Room</th>
              <th className="text-left p-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Anna Nguyen", "Jun 15 - Jun 20", "Deluxe Ocean View", "Confirmed"],
              ["Mark Lee", "Jun 18 - Jun 21", "Family Suite", "Pending"],
              ["Anna Nguyen", "Jun 19", "Hotel Tour: Ba Na Hills", "Scheduled"],
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
    </HotelLayout>
  );
}
