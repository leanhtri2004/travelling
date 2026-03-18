import { NavLink, useParams } from "react-router-dom";
import { hotels } from "../data/hotels.js";

export default function HotelLayout({ children }) {
  const { hotelId } = useParams();
  const hotel = hotels.find((item) => item.id === hotelId) || hotels[0];
  const navItems = [
    { label: "Dashboard", icon: "dashboard", to: `/hotel/${hotel.id}` },
    { label: "Hotel Profile", icon: "hotel", to: `/hotel/${hotel.id}/profile` },
    { label: "Rooms & Inventory", icon: "meeting_room", to: `/hotel/${hotel.id}/rooms` },
    { label: "Bookings", icon: "calendar_month", to: `/hotel/${hotel.id}/bookings` },
    { label: "Tour Management", icon: "tour", to: `/hotel/${hotel.id}/tours` },
    { label: "Guide Management", icon: "badge", to: `/hotel/${hotel.id}/guides` },
    { label: "Pricing & Promotions", icon: "sell", to: `/hotel/${hotel.id}/pricing` },
    { label: "Reviews", icon: "star", to: `/hotel/${hotel.id}/reviews` },
    { label: "Chat", icon: "chat", to: `/hotel/${hotel.id}/chat` },
    { label: "Notifications", icon: "notifications", to: `/hotel/${hotel.id}/notifications` },
    { label: "Support", icon: "support", to: `/hotel/${hotel.id}/support` },
  ];
  return (
    <div className="flex min-h-screen hotel-shell text-slate-900">
      <aside className="w-72 hotel-sidebar flex flex-col fixed h-full">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-accent-ocean flex items-center justify-center text-white shadow-lg">
            <span className="material-symbols-outlined">tsunami</span>
          </div>
          <div>
            <h1 className="font-bold leading-tight">{hotel.name}</h1>
            <p className="text-xs text-slate-500">Provider Portal</p>
          </div>
        </div>
        <nav className="flex-1 mt-4">
          <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Main Menu
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hotel-navlink ${isActive ? "hotel-navlink-active" : ""}`
              }
            >
              <span className="material-symbols-outlined text-slate-400">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200/70">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white/70 border border-white/60 shadow-sm">
            <div
              className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD44na3ofGsZVFYswMxH4OW356O6DuXHlcAjryLuWH6ybHIxmLpjEreAu3x8hgHwc4jktg3_DHKnMjHCpbq4vhxzff8eIt0wj_DsAO59O1ZBE3p67eceSZ_gk5ta58j5eEKLU3RW15imlr-SfQ4NVzAyh9z9tc-hwswsULGaPce02BegnIm4_3o5yVRv5wZq6nHinDgQYy42pkH1u9T3WoWeEVn0OIardjAAEBdxiygnBnlMsd_s1fGphiVI0blRqOiBkvCAltvk0tI')",
              }}
            />
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate">Alex Rivera</p>
              <p className="text-xs text-slate-500 truncate">General Manager</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="ml-72 flex-1 min-h-screen">
        <header className="sticky top-0 z-10 hotel-topbar px-8 py-4 flex justify-end items-center">
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-white/70 rounded-lg relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-2 text-slate-500 hover:bg-white/70 rounded-lg">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>
        <div className="p-8 space-y-8">{children}</div>
      </main>
    </div>
  );
}
