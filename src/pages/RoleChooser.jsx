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
        <div className="mb-8">
          <h1 className="text-4xl font-black mb-2">Smart AI Travel Planner Platform</h1>
          <p className="text-slate-600">Select a role to preview the UI.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <Link
              key={role.label}
              to={role.to}
              className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow glow-ring"
            >
              <h2 className="text-xl font-bold">{role.label}</h2>
              <p className="text-sm text-slate-500 mt-2">{role.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
