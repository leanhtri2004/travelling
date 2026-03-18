import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { hotels } from "../data/hotels.js";

export default function TravelerTrips() {
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
        title="Trips"
        subtitle="Manage all your saved trips and active journeys."
        action={<button className="px-4 py-2 bg-primary text-white rounded-lg font-bold">New Trip</button>}
      />
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
              <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
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
    </TravelerLayout>
  );
}
