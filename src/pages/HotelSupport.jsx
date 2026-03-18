import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function HotelSupport() {
  return (
    <HotelLayout>
      <PageHeader title="Support" subtitle="Contact platform support for provider issues." />
      <div className="hotel-card p-6 max-w-xl">
        <input
          className="w-full hotel-input text-sm mb-3"
          placeholder="Subject"
        />
        <textarea
          className="w-full hotel-input text-sm min-h-[120px] mb-3"
          placeholder="Describe the issue..."
        />
        <button className="px-4 py-2 hotel-button text-sm font-semibold">
          Send
        </button>
      </div>
    </HotelLayout>
  );
}
