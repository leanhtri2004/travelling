import { Link } from "react-router-dom";
import { hotelAccounts } from "../data/hotelAccounts.js";

export default function HotelLogin() {
  return (
    <div className="min-h-screen hotel-shell flex items-center justify-center p-8">
      <div className="hotel-card p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Hotel Portal Login</h1>
        <p className="text-slate-500 mb-6">Choose a hotel account to continue.</p>
        <div className="space-y-3">
          {hotelAccounts.map((hotel) => (
            <Link
              key={hotel.id}
              to={`/hotel/${hotel.id}`}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/70 border border-white/70 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <p className="text-sm font-semibold">{hotel.name}</p>
                <p className="text-xs text-slate-500">{hotel.email}</p>
              </div>
              <span className="material-symbols-outlined text-slate-400">arrow_forward</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
