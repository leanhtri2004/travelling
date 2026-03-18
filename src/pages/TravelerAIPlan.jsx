import TravelerLayout from "../layouts/TravelerLayout.jsx";
import { hotels } from "../data/hotels.js";

export default function TravelerAIPlan() {
  const destination = "Da Nang";
  const recommendedTours = hotels
    .filter((hotel) => hotel.location === destination)
    .flatMap((hotel) =>
      hotel.tours.map((tour) => ({
        ...tour,
        hotel: hotel.name,
      }))
    );
  return (
    <TravelerLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">edit_note</span>
              Trip Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 ml-1">
                  Destination
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    location_on
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-primary/5 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 font-medium"
                    type="text"
                    defaultValue="Da Nang, Vietnam"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 ml-1">
                    Dates
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      calendar_month
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-3 bg-primary/5 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 font-medium"
                      type="text"
                      defaultValue="Jun 15 - Jun 20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 ml-1">
                    Travelers
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      group
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-3 bg-primary/5 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 font-medium"
                      type="number"
                      defaultValue="2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1.5 ml-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Budget Range</label>
                  <span className="text-xs font-bold text-primary">$500 - $2000</span>
                </div>
                <div className="relative h-2 bg-primary/10 rounded-full mt-4">
                  <div className="absolute h-full bg-primary rounded-full left-[25%] right-[30%]" />
                  <div className="absolute size-4 bg-white border-2 border-primary rounded-full -top-1 left-[25%] shadow-sm" />
                  <div className="absolute size-4 bg-white border-2 border-primary rounded-full -top-1 right-[30%] shadow-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">
                  Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Culture", "Nature", "Food", "Nightlife"].map((interest) => (
                    <button
                      key={interest}
                      className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold transition-all"
                    >
                      {interest}
                    </button>
                  ))}
                  {["Shopping", "Beach"].map((interest) => (
                    <button
                      key={interest}
                      className="px-4 py-1.5 rounded-full bg-primary/5 text-slate-500 hover:bg-primary/10 text-xs font-bold transition-all"
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
              <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all mt-6">
                <span className="material-symbols-outlined">auto_awesome</span>
                Generate Itinerary
              </button>
            </div>
          </section>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 border-dashed">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-4 bg-primary/20 rounded-full" />
              <div className="h-4 w-1/2 bg-primary/10 rounded" />
            </div>
            <div className="space-y-3">
              <div className="h-3 w-full bg-slate-100 rounded" />
              <div className="h-3 w-5/6 bg-slate-100 rounded" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="bg-primary text-white p-6 rounded-2xl flex justify-between items-center shadow-lg shadow-primary/20">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/70">AI Summary</p>
              <h2 className="text-2xl font-bold mt-1">Da Nang • 5 Days • 2 Travelers</h2>
              <p className="text-sm text-white/80 mt-2">
                Balanced mix of beaches, culture, and local food.
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/70">Estimated Budget</p>
              <p className="text-3xl font-black">$1,350</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">tour</span>
              Recommended Tours for {destination}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedTours.slice(0, 4).map((tour) => (
                <div key={tour.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-sm font-semibold">{tour.name}</p>
                  <p className="text-xs text-slate-500 mt-1">Hotel: {tour.hotel}</p>
                  <p className="text-xs text-slate-500">Route: {tour.route}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tour.highlights?.slice(0, 2).map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-full bg-white text-[10px] font-semibold text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <button className="mt-3 text-primary text-xs font-bold">Add to Itinerary</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              Day-by-Day Preview
            </h3>
            <div className="space-y-4">
              {[
                "Day 1: Beaches + Seafood",
                "Day 2: Heritage & Museum",
                "Day 3: Ba Na Hills",
                "Day 4: Hoi An Ancient Town",
                "Day 5: Relax + Shopping",
              ].map((item) => (
                <div key={item} className="p-4 rounded-xl bg-slate-50 flex justify-between items-center">
                  <span className="text-sm font-semibold">{item}</span>
                  <span className="text-xs text-slate-500">View details</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-3 bg-primary text-white rounded-lg font-bold">
              Save Trip
            </button>
            <button className="px-5 py-3 bg-slate-100 text-slate-700 rounded-lg font-bold">
              Regenerate
            </button>
            <button className="px-5 py-3 bg-slate-100 text-slate-700 rounded-lg font-bold">
              Edit Itinerary
            </button>
          </div>
        </div>
      </div>
    </TravelerLayout>
  );
}
