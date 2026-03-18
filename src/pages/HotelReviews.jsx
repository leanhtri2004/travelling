import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function HotelReviews() {
  return (
    <HotelLayout>
      <PageHeader title="Reviews" subtitle="Guest feedback and responses." />
      <div className="hotel-card p-6 space-y-4">
        {[
          { name: "Anna Nguyen", comment: "Beautiful view and friendly staff." },
          { name: "Mark Lee", comment: "Great breakfast and clean rooms." },
        ].map((review) => (
          <div key={review.name} className="border-b border-slate-100 pb-4">
            <p className="text-sm font-semibold">{review.name}</p>
            <p className="text-sm text-slate-500">{review.comment}</p>
            <button className="mt-2 text-primary text-xs font-bold">Reply</button>
          </div>
        ))}
      </div>
    </HotelLayout>
  );
}
