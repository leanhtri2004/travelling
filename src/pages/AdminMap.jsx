import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Dialog from "../components/ui/dialog.jsx";
import { useState } from "react";
import { hotels } from "../data/hotels.js";

export default function AdminMap() {
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <AdminLayout>
      <PageHeader
        title="Map Management"
        subtitle="Manage hotel locations and map data."
        action={
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold"
            onClick={() => setOpenEdit(true)}
          >
            Update Location
          </button>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm h-96 flex items-center justify-center text-slate-400">
          Map View Placeholder (hotel pins)
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Hotels</h3>
          <div className="mb-4 rounded-xl border border-slate-200 p-3 bg-slate-50/70 text-sm text-slate-600">
            Select a hotel to update location or view details.
          </div>
          <div className="space-y-3">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{hotel.name}</p>
                  <p className="text-xs text-slate-500">{hotel.location}</p>
                </div>
                <button className="text-primary text-xs font-bold">Edit</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        title="Update Hotel Location"
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
        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm">
          {hotels.map((hotel) => (
            <option key={hotel.id}>{hotel.name}</option>
          ))}
        </select>
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Address" />
        <div className="grid grid-cols-2 gap-3">
          <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Latitude" />
          <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Longitude" />
        </div>
      </Dialog>
    </AdminLayout>
  );
}
