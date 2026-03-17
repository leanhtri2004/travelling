import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerSupport() {
  return (
    <TravelerLayout>
      <PageHeader title="Support & Chat" subtitle="Open a ticket or chat with providers." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold">Create Support Ticket</h3>
          <input
            className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
            placeholder="Subject"
          />
          <textarea
            className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm min-h-[120px]"
            placeholder="Describe your issue..."
          />
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
            Submit Ticket
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Recent Chats</h3>
          <div className="space-y-3">
            {["Ocean Blue Resort", "Tour Guide Le Minh Hoang"].map((chat) => (
              <div key={chat} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{chat}</p>
                  <p className="text-xs text-slate-500">Last message 2h ago</p>
                </div>
                <button className="text-primary text-xs font-bold">Open</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TravelerLayout>
  );
}
