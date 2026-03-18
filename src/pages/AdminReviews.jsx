import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminReviews() {
  return (
    <AdminLayout>
      <PageHeader title="Reviews Moderation" subtitle="Flagged reviews requiring action." />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        {[
          { id: "Review #1023", reason: "Flagged for abuse", rating: 1 },
          { id: "Review #1029", reason: "Flagged for spam", rating: 2 },
        ].map((item) => (
          <div key={item.id} className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold">{item.id}</p>
              <p className="text-xs text-slate-500">{item.reason}</p>
              <div className="mt-2 flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined text-sm">
                    star
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold">
                Hide
              </button>
              <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold">
                Restore
              </button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
