import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import HotelLayout from "../layouts/HotelLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { hotels } from "../data/hotels.js";

export default function HotelFoodServices() {
  const { hotelId } = useParams();
  const hotel = hotels.find((item) => item.id === hotelId) || hotels[0];
  const [search, setSearch] = useState("");

  const foodItems = hotel.foodServices || [];
  const filteredItems = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return foodItems;
    return foodItems.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(term))
    );
  }, [foodItems, search]);

  return (
    <HotelLayout>
      <PageHeader
        title="Food Services"
        subtitle="Manage hotel dining packages, schedules, and traveler reservations."
        action={
          <button className="hotel-button px-5 py-2.5 text-sm font-semibold">Add New Menu</button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          { label: "Active Menus", value: foodItems.length || 0, icon: "restaurant" },
          { label: "Upcoming Reservations", value: 18, icon: "event" },
          { label: "Avg. Guest Rating", value: "4.7", icon: "star" },
        ].map((card) => (
          <div key={card.label} className="hotel-card hotel-card-hover p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <span className="material-symbols-outlined">{card.icon}</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">{card.label}</p>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
        <div className="hotel-card p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold">Dining Packages</h3>
              <p className="text-sm text-slate-500">These packages show up for travelers after booking.</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                className="hotel-input w-64"
                placeholder="Search menu, category, tag..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <button className="hotel-button-ghost px-4 py-2 text-sm font-semibold">Filter</button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                  <span className="material-symbols-outlined">restaurant_menu</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base font-semibold">{item.name}</h4>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{item.availability}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white text-[10px] font-semibold text-slate-500 border border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{item.price}</p>
                  <p className="text-xs text-amber-500 font-semibold">★ {item.rating}</p>
                  <div className="mt-3 flex gap-2">
                    <button className="hotel-button-ghost px-3 py-2 text-xs font-semibold">Edit</button>
                    <button className="hotel-button px-3 py-2 text-xs font-semibold">Publish</button>
                  </div>
                </div>
              </div>
            ))}
            {!filteredItems.length && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white/70 p-5 text-sm text-slate-500">
                No menus found. Try a different keyword or add a new menu item.
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="hotel-card p-6">
            <h3 className="text-lg font-bold mb-4">New Menu Draft</h3>
            <div className="space-y-4">
              <input className="hotel-input" placeholder="Menu name" />
              <input className="hotel-input" placeholder="Category (Breakfast/Lunch/Dinner)" />
              <input className="hotel-input" placeholder="Price per guest" />
              <input className="hotel-input" placeholder="Availability schedule" />
              <textarea
                className="hotel-input min-h-[120px]"
                placeholder="Highlights, ingredients, special notes..."
              />
              <button className="hotel-button w-full py-2.5 text-sm font-semibold">Save Draft</button>
            </div>
          </div>
          <div className="hotel-card p-6">
            <h3 className="text-lg font-bold mb-4">Upcoming Requests</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Ocean Blue Breakfast Buffet</span>
                <span className="text-xs font-semibold text-slate-500">8 reservations</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sunset BBQ Terrace</span>
                <span className="text-xs font-semibold text-slate-500">5 reservations</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sea Breeze Seafood Set</span>
                <span className="text-xs font-semibold text-slate-500">3 reservations</span>
              </div>
            </div>
            <button className="hotel-button-ghost mt-4 w-full py-2 text-sm font-semibold">
              View All Requests
            </button>
          </div>
        </div>
      </div>
    </HotelLayout>
  );
}
