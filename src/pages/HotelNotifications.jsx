import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function HotelNotifications() {
  return (
    <HotelLayout>
      <PageHeader title="Notifications" subtitle="Operational alerts and updates." />
      <div className="hotel-card p-6 space-y-3">
        {[
          "New booking request from Anna Nguyen.",
          "Low inventory warning for Family Suite.",
          "Payment processed for INV-1023.",
        ].map((note) => (
          <div key={note} className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">notifications</span>
            <p className="text-sm text-slate-600">{note}</p>
          </div>
        ))}
      </div>
    </HotelLayout>
  );
}
