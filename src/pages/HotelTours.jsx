import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Dialog from "../components/ui/dialog.jsx";
import { useState } from "react";

export default function HotelTours() {
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  return (
    <HotelLayout>
      <PageHeader
        title="Tour Management"
        subtitle="Create and manage hotel-operated tours with assigned guides."
        action={
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold"
            onClick={() => setOpenCreate(true)}
          >
            New Tour
          </button>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          { name: "Hoi An Lantern Night Tour", guide: "Nguyen Thi Lan", status: "Active" },
          { name: "Ba Na Hills Day Trip", guide: "Le Minh Hoang", status: "Draft" },
        ].map((tour) => (
          <div
            key={tour.name}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all fade-in-up"
          >
            <div className="h-36 rounded-xl bg-slate-100 mb-4 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                alt={`${tour.name} preview`}
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <h3 className="text-lg font-bold">{tour.name}</h3>
            <p className="text-sm text-slate-500 mt-1">Assigned Guide: {tour.guide}</p>
            <div className="mt-3">
              <span className={tour.status === "Active" ? "badge badge-success" : "badge badge-warning"}>
                {tour.status}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold"
                onClick={() => {
                  setSelectedTour(tour.name);
                  setOpenEdit(true);
                }}
              >
                Manage
              </button>
              <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
                Assign Guide
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold mb-4">Tour Bookings</h3>
        <div className="overflow-hidden rounded-lg border border-slate-100">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500">
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
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        title="Create Hotel Tour"
        actions={
          <>
            <button
              className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold"
              onClick={() => setOpenCreate(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Save
            </button>
          </>
        }
      >
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Tour name" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Price" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Capacity" />
        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm">
          <option>Assign guide</option>
          <option>Le Minh Hoang</option>
          <option>Nguyen Thi Lan</option>
        </select>
        <textarea
          className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm min-h-[100px]"
          placeholder="Tour description"
        />
      </Dialog>

      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        title={`Edit Tour${selectedTour ? `: ${selectedTour}` : ""}`}
        actions={
          <>
            <button
              className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold"
              onClick={() => setOpenEdit(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Save
            </button>
          </>
        }
      >
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Tour name" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Price" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Capacity" />
        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm">
          <option>Assign guide</option>
          <option>Le Minh Hoang</option>
          <option>Nguyen Thi Lan</option>
        </select>
        <textarea
          className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm min-h-[100px]"
          placeholder="Tour description"
        />
      </Dialog>
    </HotelLayout>
  );
}
