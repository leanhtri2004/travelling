import TravelerLayout from "../layouts/TravelerLayout.jsx";

export default function TravelerDashboard() {
  return (
    <TravelerLayout>
      <section className="relative rounded-2xl overflow-hidden min-h-[320px] flex items-center px-10 bg-gradient-to-r from-primary via-sky-500 to-accent-warm shadow-xl glow-ring">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1559592413-7cea837818e0?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute -top-20 -right-12 size-56 rounded-full bg-white/20 blur-2xl soft-float" />
        <div className="absolute -bottom-24 -left-12 size-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10 max-w-lg space-y-4">
          <h2 className="text-4xl font-black text-white leading-tight">
            Plan Your Next Adventure with AI
          </h2>
          <p className="text-white/90 font-medium">
            Experience personalized travel like never before. Get smart recommendations for
            flights, hotels, and activities based on your taste.
          </p>
          <button className="bg-white text-primary font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-slate-50 flex items-center gap-2 group transition-all">
            <span>Create AI Itinerary</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              auto_awesome
            </span>
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Upcoming Trips</p>
            <h3 className="text-3xl font-black mt-1">2</h3>
          </div>
          <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">event_upcoming</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Active Bookings</p>
            <h3 className="text-3xl font-black mt-1">5</h3>
          </div>
          <div className="size-12 rounded-full bg-accent-warm/10 text-accent-warm flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">book_online</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Spend Estimate</p>
            <h3 className="text-3xl font-black mt-1">$1,200</h3>
          </div>
          <div className="size-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              Upcoming Trip
            </h2>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Da Nang coastline"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGUd-B9Zh9GojHADRadSDm3kCyL4PVUoO0KY1ke_XngVEOxDmD5cA3Ji2M6jDwvAM33bx0FIpjKCSJSodjXLOzyHGCrZqqztEs2cuYqTeVPf8y0bhR25xeA36-J80diIKEl64Zrxb76LlY6hf4bhCuR-EFtpYaz3KKDVfwSRyVoe1dGYJ5CGju_oDUTPlSxn7yBuRWaGjm-stzfDGgBXYnsQ-I1DSgvy54eJkr2qlO_HPnCH-amsNigPtf4KkAItmeFLF3HrimkdEr"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                  <span className="material-symbols-outlined text-accent-warm">wb_sunny</span>
                  <span className="text-xs font-bold">Sunny 30°C</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black">Escape to Da Nang</h3>
                    <p className="text-slate-500 font-medium flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      June 15 - June 20, 2024
                    </p>
                  </div>
                  <button className="bg-slate-100 p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </div>
                <div className="mt-6 flex gap-2">
                  {["Coastal", "Foodie", "Culture"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              AI Suggestions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Sunrise at My Khe Beach",
                "Dragon Bridge night walk",
                "Ba Na Hills day pass",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
                >
                  <p className="text-sm font-semibold text-slate-900">{item}</p>
                  <p className="text-xs text-slate-500 mt-2">Suggested by AI based on your interests.</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Food Picks</h3>
            <div className="space-y-4">
              {[
                { name: "Mi Quang Ba Mua", price: "$4-8", rating: "4.8" },
                { name: "Banh Xeo 76", price: "$3-6", rating: "4.6" },
                { name: "Ca Phe Cong", price: "$2-4", rating: "4.7" },
              ].map((food) => (
                <div key={food.name} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{food.name}</p>
                    <p className="text-xs text-slate-500">{food.price}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <span className="material-symbols-outlined text-sm">star</span>
                    {food.rating}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Notifications</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p>Your hotel booking is confirmed.</p>
              <p>Rain expected on Day 2. Consider indoor activities.</p>
              <p>New tour suggestion available.</p>
            </div>
          </div>
        </div>
      </div>
    </TravelerLayout>
  );
}
