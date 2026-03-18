import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { hotels } from "../data/hotels.js";

export default function TravelerHotelDetails() {
  const { hotelId } = useParams();
  const hotel = hotels.find((item) => item.id === hotelId) || hotels[0];
  const bookedHotelId = hotels[0]?.id;
  const isBooked = hotel.id === bookedHotelId;
  const roomOptions = [
    { name: "Deluxe Ocean View", price: 150 },
    { name: "Family Suite", price: 240 },
    { name: "Skyline Studio", price: 120 },
  ];
  const [checkIn, setCheckIn] = useState("2026-06-15");
  const [checkOut, setCheckOut] = useState("2026-06-19");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(roomOptions[0].name);

  const nights = useMemo(() => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)));
    return Number.isNaN(diff) ? 1 : diff;
  }, [checkIn, checkOut]);

  const roomPrice = roomOptions.find((room) => room.name === selectedRoom)?.price || 0;
  const subtotal = roomPrice * nights * rooms;
  const serviceFee = Math.round(subtotal * 0.08);
  const taxes = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee + taxes;

  return (
    <TravelerLayout>
      <PageHeader title="Hotel Details" subtitle="Choose dates, room type, and add-ons." />
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="h-56 lg:h-64 lg:w-80 rounded-2xl bg-slate-100 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                alt={`${hotel.name} overview`}
                src="https://images.unsplash.com/photo-1501117716987-c8e4b3d8f544?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold">{hotel.name}</h3>
              <p className="text-sm text-slate-500 mt-1">
                {hotel.location} • {hotel.rating} rating • {hotel.price}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {hotel.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-200 p-3">
                  <p className="text-xs text-slate-500">Check-in</p>
                  <input
                    className="mt-2 w-full text-sm font-semibold"
                    type="date"
                    value={checkIn}
                    onChange={(event) => setCheckIn(event.target.value)}
                  />
                </div>
                <div className="rounded-xl border border-slate-200 p-3">
                  <p className="text-xs text-slate-500">Check-out</p>
                  <input
                    className="mt-2 w-full text-sm font-semibold"
                    type="date"
                    value={checkOut}
                    onChange={(event) => setCheckOut(event.target.value)}
                  />
                </div>
                <div className="rounded-xl border border-slate-200 p-3">
                  <p className="text-xs text-slate-500">Guests</p>
                  <input
                    className="mt-2 w-full text-sm font-semibold"
                    type="number"
                    min={1}
                    value={guests}
                    onChange={(event) => setGuests(Number(event.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Select Your Room</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {roomOptions.map((room) => (
                <button
                  key={room.name}
                  className={`rounded-2xl border p-4 text-left transition ${
                    selectedRoom === room.name
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-slate-200 bg-white"
                  }`}
                  type="button"
                  onClick={() => setSelectedRoom(room.name)}
                >
                  <p className="text-sm font-semibold">{room.name}</p>
                  <p className="text-xs text-slate-500 mt-1">${room.price}/night</p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-sm font-semibold mb-2">Add-ons</p>
              <div className="space-y-2 text-sm text-slate-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked /> Breakfast buffet
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Airport pickup
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Spa access
                </label>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-sm font-semibold mb-2">Special Requests</p>
              <textarea
                className="w-full min-h-[110px] border border-slate-200 rounded-lg px-3 py-2 text-sm"
                placeholder="Late check-in, high floor, extra pillows..."
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Hotel Tours</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hotel.tours.map((tour) => (
                <div key={tour.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-sm font-semibold">{tour.name}</p>
                  <p className="text-xs text-slate-500">
                    {tour.price} • {tour.seats}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">Route: {tour.route}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tour.activities?.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-full bg-white text-[10px] font-semibold text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <button className="mt-3 text-primary text-xs font-bold">Book Tour</button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Hotel Food Picks</h4>
            {isBooked ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(hotel.foodServices || [
                  { name: "Sunrise Pho Bar", highlight: "Late-night pho & broth flights" },
                  { name: "Lagoon Seafood Grill", highlight: "Chef’s catch, oceanfront tables" },
                  { name: "Lantern Tea House", highlight: "Afternoon tea + local desserts" },
                  { name: "Garden Bento Lab", highlight: "Healthy bowls, vegan friendly" },
                ]).map((food) => (
                  <div key={food.name} className="p-4 rounded-xl bg-white border border-slate-200">
                    <p className="text-sm font-semibold">{food.name}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {food.highlight || `${food.category} • ${food.availability}`}
                    </p>
                    <button className="mt-3 text-primary text-xs font-bold">Reserve Table</button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-600">
                Food recommendations unlock after you complete the hotel booking.
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div>
            <p className="text-sm text-slate-500">Booking Summary</p>
            <h3 className="text-xl font-bold mt-1">{selectedRoom}</h3>
            <p className="text-xs text-slate-500">
              {guests} guests • {rooms} room • {nights} nights
            </p>
          </div>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>${roomPrice} × {nights} nights</span>
              <span className="font-semibold">${roomPrice * nights}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Rooms</span>
              <span className="font-semibold">×{rooms}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Service fee</span>
              <span className="font-semibold">${serviceFee}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Taxes</span>
              <span className="font-semibold">${taxes}</span>
            </div>
            <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-slate-900">
              <span className="font-semibold">Total</span>
              <span className="text-lg font-bold">${total}</span>
            </div>
          </div>
          <Link
            to="/traveler/payments"
            className="w-full inline-flex justify-center px-4 py-3 bg-primary text-white rounded-lg text-sm font-semibold"
          >
            Book & Pay Now
          </Link>
          <p className="text-xs text-slate-500">
            Free cancellation within 24 hours. Confirmation sent instantly after payment.
          </p>
        </div>
      </div>
    </TravelerLayout>
  );
}
