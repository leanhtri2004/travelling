import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerReviews() {
  const statusClass = {
    Submitted: "badge badge-success",
    "Pending Review": "badge badge-warning",
  };
  return (
    <TravelerLayout>
      <PageHeader title="Reviews & Ratings" subtitle="Share feedback for services you've used." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "Ocean Blue Resort", rating: "5", status: "Submitted" },
          { name: "Hoi An Lantern Tour", rating: "-", status: "Pending Review" },
        ].map((item) => (
          <div key={item.name} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <div className="mt-3 flex items-center gap-1 text-amber-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="material-symbols-outlined text-sm">
                  star
                </span>
              ))}
            </div>
            <div className="mt-2">
              <span className={statusClass[item.status] || "badge badge-neutral"}>{item.status}</span>
            </div>
            <textarea
              className="mt-4 w-full min-h-[100px] border border-slate-200 rounded-lg px-3 py-2 text-sm"
              placeholder="Share details about your experience..."
            />
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Leave Review
            </button>
          </div>
        ))}
      </div>
    </TravelerLayout>
  );
}
