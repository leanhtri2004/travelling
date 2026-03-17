import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Dialog from "../components/ui/dialog.jsx";
import { useState } from "react";

export default function HotelGuides() {
  const [openCreate, setOpenCreate] = useState(false);
  const [openAssign, setOpenAssign] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);
  return (
    <HotelLayout>
      <PageHeader
        title="Guide Management"
        subtitle="Manage internal guides, availability, and assignments."
        action={
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold"
            onClick={() => setOpenCreate(true)}
          >
            Add Guide
          </button>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Guide Roster</h3>
          <div className="space-y-3">
            {[
              { name: "Le Minh Hoang", lang: "EN/VI", status: "Available" },
              { name: "Nguyen Thi Lan", lang: "EN/FR", status: "On Tour" },
              { name: "Tran Quang Huy", lang: "VI", status: "Available" },
            ].map((guide) => (
              <div key={guide.name} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{guide.name}</p>
                  <p className="text-xs text-slate-500">Languages: {guide.lang}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={guide.status === "Available" ? "badge badge-success" : "badge badge-warning"}>
                    {guide.status}
                  </span>
                  <button
                    className="text-xs font-semibold text-primary"
                    onClick={() => {
                      setSelectedGuide(guide.name);
                      setOpenEdit(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Assignments</h3>
          <p className="text-sm text-slate-500 mb-4">
            Assign available guides to hotel tours.
          </p>
          <button
            className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold"
            onClick={() => setOpenAssign(true)}
          >
            Assign Guide
          </button>
        </div>
      </div>

      <Dialog
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        title="Add Guide"
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
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Guide name" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Languages" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Rate" />
      </Dialog>

      <Dialog
        open={openAssign}
        onClose={() => setOpenAssign(false)}
        title="Assign Guide to Tour"
        actions={
          <>
            <button
              className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold"
              onClick={() => setOpenAssign(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Assign
            </button>
          </>
        }
      >
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Tour name" />
        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm">
          <option>Select guide</option>
          <option>Le Minh Hoang</option>
          <option>Nguyen Thi Lan</option>
          <option>Tran Quang Huy</option>
        </select>
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Date & time" />
      </Dialog>

      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        title={`Edit Guide${selectedGuide ? `: ${selectedGuide}` : ""}`}
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
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Guide name" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Languages" />
        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm">
          <option>Status: Available</option>
          <option>Status: On Tour</option>
          <option>Status: Off Duty</option>
        </select>
      </Dialog>
    </HotelLayout>
  );
}
