import TravelerLayout from "../layouts/TravelerLayout.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function TravelerProfile() {
  return (
    <TravelerLayout>
      <PageHeader title="Profile" subtitle="Manage personal info and security." />
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl space-y-4">
        <div className="flex items-center gap-4">
          <div className="size-16 rounded-full bg-slate-200 overflow-hidden" />
          <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
            Upload Photo
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Full name" />
          <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Phone number" />
        </div>
        <input className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Email" />
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
            Save Changes
          </button>
          <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">
            Change Password
          </button>
        </div>
      </div>
    </TravelerLayout>
  );
}
