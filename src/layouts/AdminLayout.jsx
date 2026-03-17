import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Overview", icon: "dashboard", to: "/admin" },
  { label: "Users", icon: "group", to: "/admin/users" },
  { label: "Providers", icon: "storefront", to: "/admin/providers" },
  { label: "Hotels", icon: "hotel", to: "/admin/hotels" },
  { label: "Map", icon: "map", to: "/admin/map" },
  { label: "Service Approvals", icon: "verified_user", to: "/admin/approvals" },
  { label: "Bookings", icon: "calendar_today", to: "/admin/bookings" },
  { label: "Payments", icon: "payments", to: "/admin/payments" },
  { label: "Reviews", icon: "star", to: "/admin/reviews" },
  { label: "Support Tickets", icon: "support", to: "/admin/support" },
  { label: "Notifications", icon: "notifications", to: "/admin/notifications" },
  { label: "Reports", icon: "bar_chart", to: "/admin/reports" },
];

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-background-light text-slate-900">
      <aside className="w-64 border-r border-slate-200 bg-white flex flex-col fixed h-full">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">dashboard_customize</span>
            </div>
            <div>
              <h1 className="text-sm font-bold uppercase tracking-wider">Admin Panel</h1>
              <p className="text-xs text-slate-500">Management Suite</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                  isActive
                    ? "bg-primary text-white font-medium"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3 p-2">
            <div
              className="size-10 rounded-full bg-slate-200 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3t0ItxrOnprwgJzyv93fXJgVhmBVQB7BAURAWJBg16O9fImj7noCpSz1vCSEIBbRCNlACVS4ea519sUDkyVYzvkrCLuCNvN5xNOjBolfHweIo-A07UcbqV_lQasGj4tu2FNm2dJCFim8v-0x1yplY-mCTY6e3tc4DPxDh-JX7NI5zakqj2u22S_Qd48pHeU7430EeIu0_FSPInp2IIBN6jJvgjRfijGUTkSZcSwm8Pi1oAmIkdZOU2wvxi1_NmGBNV2ntwfCyNbGx')",
              }}
            />
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate">Alex Johnson</p>
              <p className="text-xs text-slate-500 truncate">System Admin</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="ml-64 flex-1 min-h-screen">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold tracking-tight">Dashboard Overview</h2>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-xs font-medium text-slate-600">
              Live Updates
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
                placeholder="Global search..."
                type="text"
              />
            </div>
            <button className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>
        <div className="p-8 space-y-8 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
