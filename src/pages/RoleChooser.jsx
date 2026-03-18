import { Link } from "react-router-dom";

const roles = [
  { label: "Traveler", to: "/traveler", description: "Plan trips and book services." },
  { label: "Hotel Provider", to: "/hotel", description: "Handle rooms and bookings." },
  { label: "Admin", to: "/admin", description: "Oversee platform operations." },
];

export default function RoleChooser() {
  return (
    <div className="min-h-screen bg-atmosphere flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">SmartTravel AI</p>
          <h1 className="text-4xl font-black mb-3">Choose Your Portal</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Preview tailored experiences for travelers, hotel providers, and platform admins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <Link
              key={role.label}
              to={role.to}
              className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow glow-ring"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold">{role.label}</h2>
                  <p className="text-sm text-slate-500 mt-2">{role.description}</p>
                </div>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                <span className="px-2.5 py-1 rounded-full bg-white/60">Live demo</span>
                <span className="px-2.5 py-1 rounded-full bg-white/60">Role-based UI</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
