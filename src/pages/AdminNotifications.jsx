import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminNotifications() {
  return (
    <AdminLayout>
      <PageHeader title="Notifications" subtitle="System alerts and updates." />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        {[
          "New provider submission awaiting approval.",
          "Spike in booking cancellations detected.",
          "Payment gateway latency alert.",
        ].map((note) => (
          <div key={note} className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">notifications</span>
            <p className="text-sm text-slate-600">{note}</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
