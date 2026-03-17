import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function AdminReviews() {
  return (
    <AdminLayout>
      <PageHeader title="Reviews Moderation" subtitle="Flagged reviews requiring action." />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        {["Review #1023 flagged for abuse", "Review #1029 flagged for spam"].map((item) => (
          <div key={item} className="flex items-center justify-between">
            <p className="text-sm font-medium">{item}</p>
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
