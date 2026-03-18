import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerNotifications() {
  return (
    <TravelerLayout>
      <PageHeader title="Notifications" subtitle="System alerts and trip updates." />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        {[
          { msg: "Your hotel booking was confirmed.", tag: "Booking" },
          { msg: "Weather update: Rain expected on Day 2.", tag: "Weather" },
          { msg: "New hotel tour offer available for your trip.", tag: "Offers" },
        ].map((note) => (
          <div key={note.msg} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary">notifications</span>
            <div className="flex-1">
              <p className="text-sm text-slate-600">{note.msg}</p>
              <span className="mt-2 inline-flex px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-500">
                {note.tag}
              </span>
            </div>
            <button className="text-xs font-bold text-primary">Mark read</button>
          </div>
        ))}
      </div>
    </TravelerLayout>
  );
}
