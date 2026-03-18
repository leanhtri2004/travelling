import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const roleOptions = [
  { label: "Traveler", value: "traveler", icon: "person_pin_circle" },
  { label: "Hotel", value: "hotel", icon: "hotel" },
];

export default function AuthLogin() {
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
        <div className="hidden lg:flex flex-col justify-between rounded-3xl p-10 text-white bg-gradient-to-br from-primary via-sky-500 to-amber-400 shadow-2xl gradient-move">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-white/80">Smart AI Travel</p>
            <h1 className="text-4xl font-black mt-4">Welcome back to your next adventure.</h1>
            <p className="text-white/90 mt-4">
              Access your itineraries, bookings, and AI travel insights in one place.
            </p>
          </div>
          <div className="bg-white/15 border border-white/20 rounded-2xl p-4 backdrop-blur-md">
            <p className="text-sm font-semibold">Last trip</p>
            <p className="text-xs text-white/80">Da Nang • 5 days • $1,200</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm w-full">
          <h1 className="text-2xl font-bold mb-2">Sign in</h1>
          <p className="text-slate-500 mb-6">Use your account to continue.</p>
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
            <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Email" />
            <input
              className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
              placeholder="Password"
              type="password"
            />
            <div className="flex items-center justify-between text-xs text-slate-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Remember me
              </label>
              <button className="text-primary font-semibold">Forgot password?</button>
            </div>
            <button className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Sign In
            </button>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <div className="h-px flex-1 bg-slate-200" />
              or continue with
              <div className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold">
                Google
              </button>
              <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold">
                Apple
              </button>
            </div>
            <button className="w-full px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
              Create an account
            </button>
            <p className="text-xs text-slate-400">
              Protected by SmartTravel secure login • 2FA available in settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
