import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function HotelSupport() {
  return (
    <HotelLayout>
      <PageHeader title="Support" subtitle="Contact platform support for provider issues." />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-xl">
        <input
          className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm mb-3"
          placeholder="Subject"
        />
        <textarea
          className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm min-h-[120px] mb-3"
          placeholder="Describe the issue..."
        />
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
          Send
        </button>
      </div>
    </HotelLayout>
  );
}
