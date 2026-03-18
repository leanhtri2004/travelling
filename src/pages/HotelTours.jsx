import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Dialog from "../components/ui/dialog.jsx";
import { useState } from "react";

export default function HotelTours() {
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openPlanB, setOpenPlanB] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  return (
    <HotelLayout>
      <PageHeader
        title="Tour Management"
        subtitle="Create and manage hotel-operated tours with assigned guides."
        action={
          <button
            className="px-4 py-2 hotel-button text-sm font-semibold"
            onClick={() => setOpenCreate(true)}
          >
            New Tour
          </button>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          {
            name: "Hoi An Lantern Night Tour",
            guide: "Nguyen Thi Lan",
            status: "Active",
            route: "Da Nang → Hoi An Old Town → Lantern River",
            activities: ["Lantern walk", "Night market", "River cruise"],
            duration: "4 hours",
            weather: "Clear",
            impact: "No changes required",
            bookings: "12 travelers • 2 upcoming dates",
          },
          {
            name: "Ba Na Hills Day Trip",
            guide: "Le Minh Hoang",
            status: "Draft",
            route: "Da Nang → Ba Na Hills → Golden Bridge",
            activities: ["Cable car", "Village tour", "Bridge photo stop"],
            duration: "8 hours",
            weather: "Storm risk",
            impact: "Shift to museum + cafe circuit",
            bookings: "8 travelers • 1 upcoming date",
          },
        ].map((tour) => (
          <div key={tour.name} className="hotel-card p-6 hotel-card-hover">
            <div className="h-36 rounded-2xl bg-slate-100 mb-4 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                alt={`${tour.name} preview`}
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <h3 className="text-lg font-bold">{tour.name}</h3>
            <p className="text-sm text-slate-500 mt-1">Assigned Guide: {tour.guide}</p>
            <p className="text-sm text-slate-500 mt-1">Route: {tour.route}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tour.activities.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3">Duration: {tour.duration}</p>
            <div className="mt-4 rounded-xl border border-slate-200 p-3 bg-slate-50/70">
              <p className="text-xs font-semibold text-slate-500 uppercase">Traveler Bookings</p>
              <p className="text-sm text-slate-700 mt-1">{tour.bookings}</p>
              <p className="text-xs text-slate-500 mt-2">
                Weather: <span className="font-semibold">{tour.weather}</span> • {tour.impact}
              </p>
            </div>
            <div className="mt-4 rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-500 uppercase">AI Ops Plan (Per Tour)</p>
                <button className="text-xs font-semibold text-primary">Generate</button>
              </div>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="rounded-lg border border-slate-200 p-2">
                  <p className="text-[10px] text-slate-500 uppercase">Weather</p>
                  <select className="w-full mt-2 hotel-input text-xs">
                    <option>Clear</option>
                    <option>Rain</option>
                    <option>Storm risk</option>
                  </select>
                </div>
                <div className="rounded-lg border border-slate-200 p-2">
                  <p className="text-[10px] text-slate-500 uppercase">Guests</p>
                  <input className="w-full mt-2 hotel-input text-xs" placeholder="Expected" />
                </div>
                <div className="rounded-lg border border-slate-200 p-2">
                  <p className="text-[10px] text-slate-500 uppercase">Priority</p>
                  <select className="w-full mt-2 hotel-input text-xs">
                    <option>Safety</option>
                    <option>Experience</option>
                    <option>Cost</option>
                  </select>
                </div>
              </div>
              <div className="mt-3 rounded-lg border border-slate-200 p-3 bg-slate-50/70">
                <p className="text-xs font-semibold text-slate-600">AI Suggested Update</p>
                <p className="text-xs text-slate-500 mt-2">
                  Shift outdoor segments earlier and replace riverside stop with indoor craft workshop.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 hotel-button text-xs font-semibold">
                    Apply to This Tour
                  </button>
                  <button className="px-3 py-1.5 hotel-button-ghost text-xs font-semibold">
                    Notify Travelers
                  </button>
                  <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold">
                    Save Plan B
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <span className={tour.status === "Active" ? "badge badge-success" : "badge badge-warning"}>
                {tour.status}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                className="px-4 py-2 hotel-button text-sm font-semibold"
                onClick={() => {
                  setSelectedTour(tour.name);
                  setOpenEdit(true);
                }}
              >
                Manage
              </button>
              <button className="px-4 py-2 hotel-button-ghost text-sm font-semibold">
                Assign Guide
              </button>
              <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
                Notify Travelers
              </button>
            </div>
            <div className="mt-3 flex gap-2">
              <button
                className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-semibold"
                onClick={() => {
                  setSelectedTour(tour.name);
                  setOpenPlanB(true);
                }}
              >
                AI Suggest Plan B
              </button>
              <button className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-semibold">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="hotel-card p-6">
        <h3 className="text-lg font-bold mb-4">Tour Bookings</h3>
        <div className="overflow-hidden rounded-lg border border-slate-100">
          <table className="w-full text-sm">
            <thead className="bg-slate-50/80 text-slate-500">
              <tr>
                <th className="text-left p-4 font-semibold">Tour</th>
                <th className="text-left p-4 font-semibold">Traveler</th>
                <th className="text-left p-4 font-semibold">Date</th>
                <th className="text-left p-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Hoi An Lantern Night Tour", "Anna Nguyen", "Jun 18", "Confirmed"],
                ["Ba Na Hills Day Trip", "Mark Lee", "Jun 19", "Pending"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-slate-100">
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 text-slate-600">{row[1]}</td>
                  <td className="p-4 text-slate-600">{row[2]}</td>
                  <td className="p-4">
                    <span className={row[3] === "Confirmed" ? "badge badge-success" : "badge badge-warning"}>
                      {row[3]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog
        open={openPlanB}
        onClose={() => setOpenPlanB(false)}
        title={`AI Weather Plan B${selectedTour ? `: ${selectedTour}` : ""}`}
        actions={
          <>
            <button
              className="px-4 py-2 hotel-button-ghost text-sm font-semibold"
              onClick={() => setOpenPlanB(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 hotel-button text-sm font-semibold">
              Apply To All Bookings
            </button>
          </>
        }
      >
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            AI detects heavy rain during the original outdoor segment. Suggested indoor-first
            itinerary maintains 85% of the original experience while improving comfort.
          </p>
          <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/70">
            <p className="text-xs font-semibold text-slate-500 uppercase">Updated Route</p>
            <p className="mt-2 text-slate-900 font-semibold">
              City Museum → Indoor Craft Workshop → Riverside Coffee → Night Market
            </p>
            <p className="text-xs text-slate-500 mt-2">Schedule: 5:30 PM - 9:30 PM</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase">Notifications</p>
            <p className="text-xs text-slate-500 mt-2">
              Send updated itinerary to all travelers + push notification reminder 2 hours before start.
            </p>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        title="Create Hotel Tour"
        actions={
          <>
            <button
              className="px-4 py-2 hotel-button-ghost text-sm font-semibold"
              onClick={() => setOpenCreate(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 hotel-button text-sm font-semibold">
              Save
            </button>
          </>
        }
      >
        <input className="w-full hotel-input text-sm" placeholder="Tour name" />
        <input className="w-full hotel-input text-sm" placeholder="Price" />
        <input className="w-full hotel-input text-sm" placeholder="Capacity" />
        <input className="w-full hotel-input text-sm" placeholder="Route / Itinerary" />
        <input className="w-full hotel-input text-sm" placeholder="Meeting point" />
        <input className="w-full hotel-input text-sm" placeholder="Duration (e.g., 4 hours)" />
        <input className="w-full hotel-input text-sm" placeholder="Schedule (e.g., 5 PM - 9 PM)" />
        <select className="w-full hotel-input text-sm">
          <option>Assign guide</option>
          <option>Le Minh Hoang</option>
          <option>Nguyen Thi Lan</option>
        </select>
        <textarea
          className="w-full hotel-input text-sm min-h-[100px]"
          placeholder="Tour description"
        />
        <textarea
          className="w-full hotel-input text-sm min-h-[100px]"
          placeholder="Highlights & activities (comma-separated)"
        />
      </Dialog>

      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        title={`Edit Tour${selectedTour ? `: ${selectedTour}` : ""}`}
        actions={
          <>
            <button
              className="px-4 py-2 hotel-button-ghost text-sm font-semibold"
              onClick={() => setOpenEdit(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 hotel-button text-sm font-semibold">
              Save
            </button>
          </>
        }
      >
        <input className="w-full hotel-input text-sm" placeholder="Tour name" />
        <input className="w-full hotel-input text-sm" placeholder="Price" />
        <input className="w-full hotel-input text-sm" placeholder="Capacity" />
        <input className="w-full hotel-input text-sm" placeholder="Route / Itinerary" />
        <input className="w-full hotel-input text-sm" placeholder="Meeting point" />
        <input className="w-full hotel-input text-sm" placeholder="Duration (e.g., 4 hours)" />
        <input className="w-full hotel-input text-sm" placeholder="Schedule (e.g., 5 PM - 9 PM)" />
        <select className="w-full hotel-input text-sm">
          <option>Assign guide</option>
          <option>Le Minh Hoang</option>
          <option>Nguyen Thi Lan</option>
        </select>
        <textarea
          className="w-full hotel-input text-sm min-h-[100px]"
          placeholder="Tour description"
        />
        <textarea
          className="w-full hotel-input text-sm min-h-[100px]"
          placeholder="Highlights & activities (comma-separated)"
        />
      </Dialog>
    </HotelLayout>
  );
}
