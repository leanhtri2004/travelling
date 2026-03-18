import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function HotelChat() {
  return (
    <HotelLayout>
      <PageHeader title="Chat" subtitle="Communicate with guests." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="hotel-card p-4">
          {["Anna Nguyen", "Mark Lee"].map((name) => (
            <div key={name} className="p-3 rounded-lg hover:bg-slate-50">
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-xs text-slate-500">Last message 1h ago</p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-2 hotel-card p-6">
          <div className="h-64 bg-slate-50/80 rounded-xl mb-4" />
          <div className="flex gap-2">
            <input
              className="flex-1 hotel-input text-sm"
              placeholder="Type a message..."
            />
            <button className="px-4 py-2 hotel-button text-sm font-semibold">
              Send
            </button>
          </div>
        </div>
      </div>
    </HotelLayout>
  );
}
