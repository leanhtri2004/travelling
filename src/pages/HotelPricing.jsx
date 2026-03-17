import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function HotelPricing() {
  return (
    <HotelLayout>
      <PageHeader title="Pricing & Promotions" subtitle="Manage seasonal rates and discounts." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-3">Seasonal Pricing</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Summer Peak</span>
              <span className="text-sm font-semibold">$180/night</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Off Season</span>
              <span className="text-sm font-semibold">$120/night</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-3">Active Promotions</h3>
          <p className="text-sm text-slate-500">10% early booking discount</p>
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
            Create Promo
          </button>
        </div>
      </div>
    </HotelLayout>
  );
}
