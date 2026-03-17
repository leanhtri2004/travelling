import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: "dashboard", to: "/traveler" },
  { label: "AI Plan", icon: "temp_preferences_custom", to: "/traveler/ai-plan" },
  { label: "Trips", icon: "flight_takeoff", to: "/traveler/trips" },
  { label: "Itinerary", icon: "calendar_month", to: "/traveler/itinerary" },
  { label: "Bookings", icon: "confirmation_number", to: "/traveler/bookings" },
  { label: "Hotels", icon: "hotel", to: "/traveler/hotels" },
  { label: "Transport", icon: "directions_car", to: "/traveler/transport" },
  { label: "Hotel Tours", icon: "map", to: "/traveler/tours" },
  { label: "Food", icon: "restaurant", to: "/traveler/food" },
  { label: "Food Booking", icon: "restaurant_menu", to: "/traveler/food-booking" },
  { label: "Map", icon: "location_on", to: "/traveler/map" },
  { label: "Payments", icon: "payments", to: "/traveler/payments" },
  { label: "Reviews", icon: "star", to: "/traveler/reviews" },
  { label: "Profile", icon: "person", to: "/traveler/profile" },
  { label: "Notifications", icon: "notifications", to: "/traveler/notifications" },
  { label: "Support", icon: "support", to: "/traveler/support" },
];

const linkClass =
  "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors text-sm font-medium";

export default function TravelerLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-atmosphere text-slate-900">
      <aside className="w-64 border-r border-slate-200 bg-white/90 backdrop-blur-md flex flex-col fixed h-full z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <h1 className="font-bold text-xl tracking-tight">Smart AI Travel</h1>
        </div>
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkClass} ${
                  isActive ? "bg-primary/10 text-primary font-semibold" : "text-slate-600"
                }`
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3 p-2">
            <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Traveler profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKmU6dftLGKeGIEnRrmWKpwjGqZzTYEuMlsZxzkB3WP-C585VtK3uNDejE0MkCwdmt99MTaA0Ws1403MERG4udkzAHF8dEFp3yBCht9U-FFE2ZLMrP8ocnp4zGfWmKGzT44GeTMU_0-scAfR2qdpUamxF9D3ZQCn1MmhsuUzPoa8MLYkEBJxg1UkKhj9inw2rMqvPxJWkaOR9YhmwoDab3HCrBkW6TBdYyh_uXqV1ilXmeeTEULPvLhPLA6MikHJsXg3xXxIQNcreF"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold truncate">Alex Traveler</p>
              <p className="text-xs text-slate-500 truncate">Premium Member</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="ml-64 flex-1 min-h-screen">
        <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm"
                placeholder="Where to next? (e.g. Da Nang, Ha Noi)"
                type="text"
              />
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">
                Da Nang
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Ha Noi
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-slate-100 rounded-lg transition-colors text-sm font-bold text-slate-600">
              <span className="material-symbols-outlined text-lg">payments</span>
              USD
            </button>
          </div>
        </header>
        <div className="p-8 space-y-8">{children}</div>
      </main>
    </div>
  );
}
