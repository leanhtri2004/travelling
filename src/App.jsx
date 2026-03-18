import { Routes, Route, Navigate } from "react-router-dom";
import RoleChooser from "./pages/RoleChooser.jsx";
import Home from "./pages/Home.jsx";

import TravelerDashboard from "./pages/TravelerDashboard.jsx";
import TravelerAIPlan from "./pages/TravelerAIPlan.jsx";
import TravelerItinerary from "./pages/TravelerItinerary.jsx";
import TravelerBookings from "./pages/TravelerBookings.jsx";
import TravelerHotels from "./pages/TravelerHotels.jsx";
import TravelerHotelDetails from "./pages/TravelerHotelDetails.jsx";
import TravelerGuides from "./pages/TravelerGuides.jsx";
import TravelerTours from "./pages/TravelerTours.jsx";
import TravelerFood from "./pages/TravelerFood.jsx";
import TravelerMap from "./pages/TravelerMap.jsx";
import TravelerPayments from "./pages/TravelerPayments.jsx";
import TravelerReviews from "./pages/TravelerReviews.jsx";
import TravelerProfile from "./pages/TravelerProfile.jsx";
import TravelerNotifications from "./pages/TravelerNotifications.jsx";
import TravelerSupport from "./pages/TravelerSupport.jsx";

import HotelDashboard from "./pages/HotelDashboard.jsx";
import HotelProfile from "./pages/HotelProfile.jsx";
import HotelRooms from "./pages/HotelRooms.jsx";
import HotelBookings from "./pages/HotelBookings.jsx";
import HotelPricing from "./pages/HotelPricing.jsx";
import HotelReviews from "./pages/HotelReviews.jsx";
import HotelChat from "./pages/HotelChat.jsx";
import HotelNotifications from "./pages/HotelNotifications.jsx";
import HotelSupport from "./pages/HotelSupport.jsx";
import HotelTours from "./pages/HotelTours.jsx";
import HotelGuides from "./pages/HotelGuides.jsx";
import HotelFoodServices from "./pages/HotelFoodServices.jsx";
import HotelLogin from "./pages/HotelLogin.jsx";

import AdminOverview from "./pages/AdminOverview.jsx";
import AdminUsers from "./pages/AdminUsers.jsx";
import AdminProviders from "./pages/AdminProviders.jsx";
import AdminHotels from "./pages/AdminHotels.jsx";
import AdminMap from "./pages/AdminMap.jsx";
import AdminApprovals from "./pages/AdminApprovals.jsx";
import AdminBookings from "./pages/AdminBookings.jsx";
import AdminPayments from "./pages/AdminPayments.jsx";
import AdminReviews from "./pages/AdminReviews.jsx";
import AdminSupport from "./pages/AdminSupport.jsx";
import AdminNotifications from "./pages/AdminNotifications.jsx";
import AdminReports from "./pages/AdminReports.jsx";
import AuthLogin from "./pages/AuthLogin.jsx";
import AuthRegister from "./pages/AuthRegister.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roles" element={<RoleChooser />} />

      <Route path="/traveler" element={<TravelerDashboard />} />
      <Route path="/traveler/ai-plan" element={<TravelerAIPlan />} />
      <Route path="/traveler/itinerary" element={<TravelerItinerary />} />
      <Route path="/traveler/bookings" element={<TravelerBookings />} />
      <Route path="/traveler/hotels" element={<TravelerHotels />} />
      <Route path="/traveler/hotels/:hotelId" element={<TravelerHotelDetails />} />
      <Route path="/traveler/guides" element={<TravelerGuides />} />
      <Route path="/traveler/tours" element={<TravelerTours />} />
      <Route path="/traveler/food" element={<TravelerFood />} />
      <Route path="/traveler/map" element={<TravelerMap />} />
      <Route path="/traveler/payments" element={<TravelerPayments />} />
      <Route path="/traveler/reviews" element={<TravelerReviews />} />
      <Route path="/traveler/profile" element={<TravelerProfile />} />
      <Route path="/traveler/notifications" element={<TravelerNotifications />} />
      <Route path="/traveler/support" element={<TravelerSupport />} />

      <Route path="/hotel" element={<HotelLogin />} />
      <Route path="/hotel/:hotelId" element={<HotelDashboard />} />
      <Route path="/hotel/:hotelId/profile" element={<HotelProfile />} />
      <Route path="/hotel/:hotelId/rooms" element={<HotelRooms />} />
      <Route path="/hotel/:hotelId/bookings" element={<HotelBookings />} />
      <Route path="/hotel/:hotelId/tours" element={<HotelTours />} />
      <Route path="/hotel/:hotelId/food" element={<HotelFoodServices />} />
      <Route path="/hotel/:hotelId/guides" element={<HotelGuides />} />
      <Route path="/hotel/:hotelId/pricing" element={<HotelPricing />} />
      <Route path="/hotel/:hotelId/reviews" element={<HotelReviews />} />
      <Route path="/hotel/:hotelId/chat" element={<HotelChat />} />
      <Route path="/hotel/:hotelId/notifications" element={<HotelNotifications />} />
      <Route path="/hotel/:hotelId/support" element={<HotelSupport />} />

      <Route path="/admin" element={<AdminOverview />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/providers" element={<AdminProviders />} />
      <Route path="/admin/hotels" element={<AdminHotels />} />
      <Route path="/admin/map" element={<AdminMap />} />
      <Route path="/admin/approvals" element={<AdminApprovals />} />
      <Route path="/admin/bookings" element={<AdminBookings />} />
      <Route path="/admin/payments" element={<AdminPayments />} />
      <Route path="/admin/reviews" element={<AdminReviews />} />
      <Route path="/admin/support" element={<AdminSupport />} />
      <Route path="/admin/notifications" element={<AdminNotifications />} />
      <Route path="/admin/reports" element={<AdminReports />} />
      <Route path="/auth/login" element={<AuthLogin />} />
      <Route path="/auth/register" element={<AuthRegister />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
