import TravelerLayout from "../layouts/TravelerLayout.jsx";

export default function TravelerItinerary() {
  return (
    <TravelerLayout>
      <div className="space-y-6">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-black tracking-tight">Day 1: Coastal Wonders</h1>
            <p className="text-slate-500 text-lg font-medium">Monday, October 12</p>
          </div>
          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
            Add Activity
          </button>
        </div>

        <div className="border-b border-slate-200">
          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map((day, index) => (
              <button
                key={day}
                className={`flex flex-col items-center justify-center pb-3 pt-2 px-1 whitespace-nowrap ${
                  index === 0
                    ? "border-b-2 border-primary text-primary font-bold"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <span className="text-sm font-bold">{day}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <div className="flex gap-4">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined">thunderstorm</span>
            </div>
            <div>
              <p className="text-slate-900 text-base font-bold">Rain expected at 4 PM</p>
              <p className="text-slate-500 text-sm">
                Heavy showers forecasted for the afternoon. Consider indoor activities.
              </p>
            </div>
          </div>
          <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-xs font-bold whitespace-nowrap">
            Optimize Itinerary
          </button>
        </div>

        <div className="space-y-6">
          {[
            {
              time: "08:00 AM",
              title: "Breakfast at Mi Quang Ba Mua",
              desc: "Try the authentic local turmeric noodles with shrimp and pork.",
              icon: "wb_sunny",
            },
            {
              time: "02:00 PM",
              title: "Cham Museum of Sculpture",
              desc: "World's largest collection of Cham sculpture from the 7th century.",
              icon: "museum",
            },
            {
              time: "07:30 PM",
              title: "Dragon Bridge Night Show",
              desc: "Fire and water show every weekend night.",
              icon: "nightlife",
            },
          ].map((item) => (
            <div
              key={item.time}
              className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">drag_indicator</span>
                  <time className="font-bold text-primary">{item.time}</time>
                </div>
                <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">
                  edit
                </span>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-500">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TravelerLayout>
  );
}
