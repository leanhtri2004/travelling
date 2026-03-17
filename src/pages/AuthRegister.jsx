export default function AuthRegister() {
  return (
    <div className="min-h-screen bg-atmosphere flex items-center justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm w-full">
          <h1 className="text-2xl font-bold mb-2">Create account</h1>
          <p className="text-slate-500 mb-6">Join the Smart AI Travel Planner Platform.</p>
          <div className="space-y-4">
            <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Full name" />
            <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Email" />
            <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Phone number" />
            <input
              className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
              placeholder="Password"
              type="password"
            />
            <button className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Create Account
            </button>
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
