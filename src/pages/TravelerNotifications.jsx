import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerNotifications() {
  return (
    <TravelerLayout>
      <PageHeader title="Notifications" subtitle="System alerts and trip updates." />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        {[
          "Your hotel booking was confirmed.",
          "Weather update: Rain expected on Day 2.",
          "New hotel tour offer available for your trip.",
        ].map((note) => (
          <div key={note} className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">notifications</span>
            <p className="text-sm text-slate-600">{note}</p>
          </div>
        ))}
      </div>
    </TravelerLayout>
  );
}
