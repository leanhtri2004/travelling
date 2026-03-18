import { useState } from "react";
import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { hotels } from "../data/hotels.js";

export default function TravelerItinerary() {
  const [activeTrip, setActiveTrip] = useState(null);
  const destination = "Da Nang";
  const suggestedTours = hotels
    .filter((hotel) => hotel.location === destination)
    .flatMap((hotel) =>
      hotel.tours.map((tour) => ({
        ...tour,
        hotel: hotel.name,
      }))
    );
  return (
    <TravelerLayout>
      <PageHeader
        title="Itinerary"
        subtitle="Everything for your trip, from overview to daily schedule."
        action={
          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
            Add Activity
          </button>
        }
      />
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Da Nang Escape",
              days: "5 days",
              travelers: "2 travelers",
              budget: "$1,200",
              status: "Active",
              theme: "Coastal",
              progress: 70,
            },
            {
              name: "Ha Noi Heritage",
              days: "4 days",
              travelers: "1 traveler",
              budget: "$820",
              status: "Draft",
              theme: "Culture",
              progress: 35,
            },
            {
              name: "Hoi An Slow Life",
              days: "3 days",
              travelers: "2 travelers",
              budget: "$640",
              status: "Saved",
              theme: "Foodie",
              progress: 55,
            },
          ].map((trip) => (
            <div key={trip.name} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">{trip.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {trip.days} • {trip.travelers} • Budget {trip.budget}
                  </p>
                </div>
                <button className="p-2 rounded-lg bg-slate-100">
                  <span className="material-symbols-outlined text-slate-500">more_horiz</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                  {trip.status}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                  {trip.theme}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Planning progress</span>
                  <span>{trip.progress}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${trip.progress}%` }} />
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <button
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold"
                  onClick={() => setActiveTrip(trip.name)}
                  type="button"
                >
                  Open Trip
                </button>
                <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Passenger Details</h3>
            <div className="space-y-4 text-sm text-slate-600">
              {[
                { name: "Nguyen Thi Mai", age: "28", passport: "Valid • VN" },
                { name: "Tran Hoang Minh", age: "30", passport: "Valid • VN" },
              ].map((guest) => (
                <div key={guest.name} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{guest.name}</p>
                    <p className="text-xs text-slate-500">
                      Age {guest.age} • {guest.passport}
                    </p>
                  </div>
                  <button className="text-primary text-xs font-bold">Edit</button>
                </div>
              ))}
            </div>
            <button className="mt-4 px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
              Add Passenger
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Upcoming Timeline</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">flight_takeoff</span>
                Flight check-in opens in 2 days.
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">hotel</span>
                Hotel pre-arrival form pending.
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">tour</span>
                1 tour booking requires confirmation.
              </div>
            </div>
          </div>
        </div>
        {activeTrip ? (
          <div className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-4 rounded-xl border border-primary/15 bg-primary/5 p-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">Active Trip</p>
                <h2 className="text-2xl font-bold mt-2">{activeTrip}</h2>
                <p className="text-sm text-slate-500">Here’s your detailed day-by-day schedule.</p>
              </div>
              <button
                className="px-4 py-2 rounded-lg bg-white text-primary border border-primary/20 text-sm font-semibold"
                type="button"
                onClick={() => setActiveTrip(null)}
              >
                Close Itinerary
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
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white/80 p-6 text-sm text-slate-600">
            Choose a trip above and tap “Open Trip” to reveal the detailed day-by-day itinerary.
          </div>
        )}

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Suggested Tours for {destination}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestedTours.slice(0, 4).map((tour) => (
              <div key={tour.name} className="rounded-xl border border-slate-200 p-4 bg-slate-50/70">
                <p className="text-sm font-semibold">{tour.name}</p>
                <p className="text-xs text-slate-500">Hotel: {tour.hotel}</p>
                <p className="text-xs text-slate-500">Route: {tour.route}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tour.activities?.slice(0, 2).map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-full bg-white text-[10px] font-semibold text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <button className="mt-3 text-primary text-xs font-bold">Add to Trip</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TravelerLayout>
  );
}
