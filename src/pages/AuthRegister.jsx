import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const roleOptions = [
  { label: "Traveler", value: "traveler", icon: "person_pin_circle" },
];

export default function AuthRegister() {
  const [searchParams] = useSearchParams();
  const initialRole = useMemo(() => {
    const fromQuery = searchParams.get("role");
    const valid = roleOptions.find((role) => role.value === fromQuery);
    return valid ? valid.value : "traveler";
  }, [searchParams]);
  const [role, setRole] = useState(initialRole);

  return (
    <div className="min-h-screen bg-atmosphere flex items-center justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm w-full">
          <h1 className="text-2xl font-bold mb-2">Create account</h1>
          <p className="text-slate-500 mb-6">Join the Smart AI Travel Planner Platform.</p>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Role</p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {roleOptions.map((option) => (
                  <label
                    key={option.value}
                    className="cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={option.value}
                      checked={role === option.value}
                      onChange={() => setRole(option.value)}
                      className="peer sr-only"
                    />
                    <div className="flex items-center gap-2 peer-checked:text-primary">
                      <span className="material-symbols-outlined text-base">{option.icon}</span>
                      {option.label}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Full name" />
            <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Email" />
            <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Phone number" />
            <input
              className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
              placeholder="Password"
              type="password"
            />
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <input type="checkbox" /> I agree to the Terms & Privacy Policy.
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <input type="checkbox" defaultChecked /> Send me travel deals & tips.
            </div>
            <button className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Create Account
            </button>
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/70 text-xs text-slate-500">
              Your account includes itinerary backups, priority support, and AI travel insights.
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col justify-between rounded-3xl p-10 text-white bg-gradient-to-br from-amber-400 via-primary to-sky-500 shadow-2xl gradient-move">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-white/80">Get Started</p>
            <h1 className="text-4xl font-black mt-4">Build your dream trip in minutes.</h1>
            <p className="text-white/90 mt-4">
              AI recommendations, hotel-managed tours, and seamless bookings.
            </p>
          </div>
          <div className="bg-white/15 border border-white/20 rounded-2xl p-4 backdrop-blur-md">
            <p className="text-sm font-semibold">AI Plan Preview</p>
            <p className="text-xs text-white/80">5-day coastal itinerary</p>
          </div>
        </div>
      </div>
    </div>
  );
}
