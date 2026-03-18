import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Dialog from "../components/ui/dialog.jsx";
import { useState } from "react";

export default function HotelRooms() {
  const statusClass = (status) =>
    status.toLowerCase().includes("left") ? "badge badge-warning" : "badge badge-success";
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  return (
    <HotelLayout>
      <PageHeader
        title="Rooms & Inventory"
        subtitle="Manage room types and availability."
        action={
          <button
            className="text-primary hover:bg-primary/10 px-4 py-2 rounded-lg text-sm font-semibold"
            onClick={() => setOpenCreate(true)}
          >
            Add Room Type
          </button>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "Deluxe Ocean View", price: "$150/night", status: "3 Available" },
          { name: "Family Suite", price: "$250/night", status: "1 Left" },
        ].map((room) => (
          <div key={room.name} className="hotel-card overflow-hidden hotel-card-hover">
            <div className="h-40 bg-slate-100">
              <img
                className="h-full w-full object-cover"
                alt={`${room.name} room`}
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">{room.name}</h3>
                <p className="text-primary font-bold text-lg">{room.price}</p>
              </div>
              <span className={statusClass(room.status)}>{room.status}</span>
              <div className="flex items-center gap-3">
                <button
                  className="flex-1 hotel-button text-sm font-semibold h-10 px-4"
                  onClick={() => {
                    setSelectedRoom(room.name);
                    setOpenEdit(true);
                  }}
                >
                  Edit Room
                </button>
                <button className="hotel-button-ghost text-sm font-semibold h-10 px-4">
                  Manage Inventory
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        title={`Edit Room${selectedRoom ? `: ${selectedRoom}` : ""}`}
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
        <input className="w-full hotel-input text-sm" placeholder="Room name" />
        <input className="w-full hotel-input text-sm" placeholder="Price per night" />
        <input className="w-full hotel-input text-sm" placeholder="Capacity" />
        <textarea
          className="w-full hotel-input text-sm min-h-[100px]"
          placeholder="Description"
        />
      </Dialog>

      <Dialog
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        title="Create Room Type"
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
        <input className="w-full hotel-input text-sm" placeholder="Room name" />
        <input className="w-full hotel-input text-sm" placeholder="Price per night" />
        <input className="w-full hotel-input text-sm" placeholder="Capacity" />
        <textarea
          className="w-full hotel-input text-sm min-h-[100px]"
          placeholder="Description"
        />
      </Dialog>
    </HotelLayout>
  );
}
