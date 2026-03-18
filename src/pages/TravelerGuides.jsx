import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerGuides() {
  return (
    <TravelerLayout>
      <PageHeader
        title="Guided Tours"
        subtitle="Guides are managed by hotels and included in hotel tours."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold">How Guides Work</h3>
          <p className="text-sm text-slate-600">
            Guides are assigned by hotels based on tour availability and your language preferences.
            Choose a tour and we’ll match you with the best guide.
          </p>
          <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/70 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Tell us your preferences</p>
            <div className="mt-3 space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> English speaking
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Photography-friendly
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Family-focused
              </label>
            </div>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
            Save Preferences
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Recommended Hotel Tours</h3>
          <div className="space-y-4">
            {[
              { name: "Hoi An Lantern Night", guide: "Nguyen Thi Lan", lang: "EN/FR" },
              { name: "Ba Na Hills Day Trip", guide: "Le Minh Hoang", lang: "EN/VI" },
            ].map((tour) => (
              <div key={tour.name} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{tour.name}</p>
                  <p className="text-xs text-slate-500">Guide: {tour.guide} • {tour.lang}</p>
                </div>
                <button className="text-primary text-xs font-bold">View Tour</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TravelerLayout>
  );
}
