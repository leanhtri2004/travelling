import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerGuides() {
  return (
    <TravelerLayout>
      <PageHeader
        title="Guided Tours"
        subtitle="Guides are managed by hotels and included in hotel tours."
      />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl">
        <p className="text-sm text-slate-600">
          We no longer book independent tour guides. Please choose a hotel tour from the
          Hotel Tours section to get a guide assigned by the hotel.
        </p>
      </div>
    </TravelerLayout>
  );
}
