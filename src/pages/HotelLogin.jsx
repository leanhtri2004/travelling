import { Link } from "react-router-dom";
import { hotelAccounts } from "../data/hotelAccounts.js";

export default function HotelLogin() {
  return (
    <div className="min-h-screen bg-atmosphere flex items-center justify-center p-8">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-slate-200 shadow-sm w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Hotel Portal Login</h1>
        <p className="text-slate-500 mb-6">Choose a hotel account to continue.</p>
        <div className="space-y-3">
          {hotelAccounts.map((hotel) => (
            <Link
              key={hotel.id}
              to={`/hotel/${hotel.id}`}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 hover:shadow-sm transition-shadow"
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
