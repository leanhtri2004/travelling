import AdminLayout from "../layouts/AdminLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Dialog from "../components/ui/dialog.jsx";
import { useState } from "react";

export default function AdminHotels() {
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openReset, setOpenReset] = useState(false);
  const [openLock, setOpenLock] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  return (
    <AdminLayout>
      <PageHeader
        title="Hotel Management"
        subtitle="Register and manage hotel accounts."
        action={
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold"
            onClick={() => setOpenCreate(true)}
          >
            Register Hotel
          </button>
        }
      />
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden fade-in-up">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4 font-semibold">Hotel</th>
              <th className="text-left p-4 font-semibold">Location</th>
              <th className="text-left p-4 font-semibold">Account</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Ocean Blue Resort", "Da Nang", "ocean@hotel.com", "Active"],
              ["Grand Marina Hotel", "Ha Noi", "marina@hotel.com", "Active"],
              ["Sunrise Riverside", "Hoi An", "sunrise@hotel.com", "Pending"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-slate-100">
                <td className="p-4 font-medium">{row[0]}</td>
                <td className="p-4 text-slate-600">{row[1]}</td>
                <td className="p-4 text-slate-600">{row[2]}</td>
                <td className="p-4">
                  <span className={row[3] === "Active" ? "badge badge-success" : "badge badge-warning"}>
                    {row[3]}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold">
                      View
                    </button>
                    <button
                      className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold"
                      onClick={() => {
                        setSelectedHotel(row[0]);
                        setOpenEdit(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold"
                      onClick={() => {
                        setSelectedHotel(row[0]);
                        setOpenReset(true);
                      }}
                    >
                      Reset PW
                    </button>
                    <button
                      className="px-3 py-1.5 bg-amber-100 text-amber-700 rounded-lg text-xs font-semibold"
                      onClick={() => {
                        setSelectedHotel(row[0]);
                        setOpenLock(true);
                      }}
                    >
                      Lock
                    </button>
                    <button
                      className="px-3 py-1.5 bg-rose-100 text-rose-700 rounded-lg text-xs font-semibold"
                      onClick={() => {
                        setSelectedHotel(row[0]);
                        setOpenDelete(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        title="Register Hotel"
        actions={
          <>
            <button
              className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold"
              onClick={() => setOpenCreate(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Create
            </button>
          </>
        }
      >
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Hotel name" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Location" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Email" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Phone" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Username" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Temporary password" />
      </Dialog>

      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        title={`Edit Hotel${selectedHotel ? `: ${selectedHotel}` : ""}`}
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
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Hotel name" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Location" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Email" />
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Username" />
        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm">
          <option>Status: Active</option>
          <option>Status: Pending</option>
          <option>Status: Suspended</option>
        </select>
      </Dialog>

      <Dialog
        open={openReset}
        onClose={() => setOpenReset(false)}
        title="Reset Hotel Password"
        actions={
          <>
            <button
              className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold"
              onClick={() => setOpenReset(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              Reset
            </button>
          </>
        }
      >
        <p className="text-sm text-slate-600">
          Reset password for <strong>{selectedHotel || "this hotel"}</strong>.
        </p>
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="New password" />
      </Dialog>

      <Dialog
        open={openLock}
        onClose={() => setOpenLock(false)}
        title="Lock/Unlock Account"
        actions={
          <>
            <button
              className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold"
              onClick={() => setOpenLock(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold">
              Lock
            </button>
          </>
        }
      >
        <p className="text-sm text-slate-600">
          Lock access for <strong>{selectedHotel || "this hotel"}</strong>. You can unlock later.
        </p>
      </Dialog>

      <Dialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        title="Delete Hotel"
        actions={
          <>
            <button
              className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold"
              onClick={() => setOpenDelete(false)}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-semibold">
              Delete
            </button>
          </>
        }
      >
        <p className="text-sm text-slate-600">
          Are you sure you want to delete <strong>{selectedHotel || "this hotel"}</strong>?
          This action cannot be undone.
        </p>
      </Dialog>
    </AdminLayout>
  );
}
