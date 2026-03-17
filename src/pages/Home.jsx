import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-atmosphere">
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-primary text-white flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <span className="text-lg font-bold">Smart AI Travel</span>
        </div>
        <div className="flex items-center gap-3">
          <Link className="text-sm font-semibold text-slate-600 hover:text-primary" to="/auth/login">
            Login
          </Link>
          <Link className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold" to="/auth/register">
            Sign Up
          </Link>
        </div>
      </header>

      <main className="px-8 pb-20">
        <section className="relative overflow-hidden rounded-[32px] border border-white/30 bg-gradient-to-br from-sky-500 via-primary to-amber-400 text-white p-14 shadow-2xl gradient-move">
          <div className="absolute -top-24 -right-16 size-72 rounded-full bg-white/20 blur-3xl float-slow" />
          <div className="absolute bottom-0 left-0 size-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-12 bottom-12 size-20 rounded-full bg-white/20 blur-xl sparkle" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="uppercase tracking-[0.3em] text-xs text-white/80">AI Travel Platform</p>
              <h1 className="text-5xl font-black leading-tight">
                Curate trips, book hotels, and explore food like a local.
              </h1>
              <p className="text-white/90 text-lg max-w-xl">
                A premium travel hub for personalized itineraries, hotel-managed tours, and curated
                dining experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className="px-5 py-3 bg-white text-primary rounded-xl font-bold" to="/auth/register">
                  Start Free
                </Link>
                <Link className="px-5 py-3 bg-white/10 border border-white/30 rounded-xl font-semibold" to="/roles">
                  Explore Roles
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="h-40 w-full rounded-2xl object-cover shadow-lg fade-in-up stagger-1"
                  alt="Da Nang beach"
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
                />
                <img
                  className="h-40 w-full rounded-2xl object-cover shadow-lg fade-in-up stagger-2"
                  alt="Hoi An lanterns"
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop"
                />
                <img
                  className="h-40 w-full rounded-2xl object-cover shadow-lg fade-in-up stagger-2"
                  alt="Vietnam food"
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop"
                />
                <img
                  className="h-40 w-full rounded-2xl object-cover shadow-lg fade-in-up stagger-3"
                  alt="Mountain tour"
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                />
              </div>
              <div className="absolute -bottom-6 right-6 rounded-2xl bg-white/20 border border-white/20 p-4 shadow-xl backdrop-blur-md fade-in-up stagger-3">
                <p className="text-sm font-semibold">Hotel + Tours</p>
                <p className="text-xs text-white/80">Ocean Blue Resort</p>
                <div className="mt-2 text-xs text-white/80">2 tours booked</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Itinerary",
              desc: "Generate day-by-day schedules tailored to interests and budget.",
              icon: "auto_awesome",
            },
            {
              title: "Hotel + Tours",
              desc: "Book hotels and hotel-managed tours with built-in guides.",
              icon: "hotel",
            },
            {
              title: "Food Discovery",
              desc: "Curated local cuisine trails and restaurant bookings.",
              icon: "restaurant",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:-translate-y-1 transition-all fade-in-up ${
                index === 0 ? "stagger-1" : index === 1 ? "stagger-2" : "stagger-3"
              }`}
            >
              <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold mt-4">{item.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending Destinations</h2>
            <span className="text-sm text-slate-500">Handpicked by travelers</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Da Nang Coastline",
                img: "https://images.unsplash.com/photo-1501117716987-c8e4b3d8f544?q=80&w=1400&auto=format&fit=crop",
                tag: "Beach",
              },
              {
                title: "Ha Noi Old Quarter",
                img: "https://images.unsplash.com/photo-1478118330274-ff72cf9d1d7d?q=80&w=1400&auto=format&fit=crop",
                tag: "Culture",
              },
              {
                title: "Hoi An Riverside",
                img: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1400&auto=format&fit=crop",
                tag: "Heritage",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:-translate-y-1 transition-all fade-in-up"
              >
                <img className="h-56 w-full object-cover" alt={item.title} src={item.img} />
                <div className="p-6">
                  <span className="badge badge-info">{item.tag}</span>
                  <h3 className="text-xl font-bold mt-3">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Tours</h2>
            <Link className="text-sm font-semibold text-primary" to="/traveler/tours">
              View all tours
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Hoi An Lantern Night Tour",
                img: "https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=1200&auto=format&fit=crop",
                price: "$35",
              },
              {
                title: "Ba Na Hills Day Trip",
                img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
                price: "$60",
              },
              {
                title: "Ha Long Day Cruise",
                img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
                price: "$70",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:-translate-y-1 transition-all fade-in-up"
              >
                <img className="h-44 w-full object-cover" alt={item.title} src={item.img} />
                <div className="p-5">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-2">From {item.price} / person</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Food & Local Experiences</h2>
            <Link className="text-sm font-semibold text-primary" to="/traveler/food">
              Explore food
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Mi Quang Trail",
                img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
                desc: "Discover the best noodle spots in Da Nang.",
              },
              {
                title: "Hoi An Night Market",
                img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
                desc: "Lantern-lit street food with local guides.",
              },
              {
                title: "Cafe Hop",
                img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
                desc: "Handpicked cafes with scenic city views.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:-translate-y-1 transition-all fade-in-up"
              >
                <img className="h-44 w-full object-cover" alt={item.title} src={item.img} />
                <div className="p-5">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Traveler Reviews</h2>
            <div className="space-y-5">
              {[
                {
                  name: "Minh Anh",
                  quote: "The AI itinerary was spot on. Hotels and tours were seamless.",
                },
                {
                  name: "James L.",
                  quote: "Loved the food trails and the hotel-managed tours.",
                },
                {
                  name: "Thanh Hoa",
                  quote: "Beautiful UI, easy bookings, and great suggestions.",
                },
              ].map((review) => (
                <div key={review.name} className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Travel Blog</h2>
            <div className="space-y-5">
              {[
                {
                  title: "5 Coastal Spots in Da Nang You Can't Miss",
                  date: "Mar 12, 2026",
                },
                {
                  title: "Street Food in Hoi An: Best Night Markets",
                  date: "Feb 28, 2026",
                },
                {
                  title: "Ha Noi in 48 Hours: Culture & Coffee",
                  date: "Feb 14, 2026",
                },
              ].map((post) => (
                <div key={post.title}>
                  <p className="text-sm font-semibold">{post.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{post.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black">Plan faster. Travel smarter.</h2>
              <p className="text-slate-500 mt-3">
                One platform to generate itineraries, book hotels, and manage tours. Built for
                travelers and hotel partners.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link className="px-5 py-3 bg-primary text-white rounded-xl font-semibold" to="/auth/register">
                Create account
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-slate-200 pt-10 pb-6 text-sm text-slate-500">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-base font-semibold text-slate-700">Smart AI Travel</p>
              <p className="mt-2">AI travel planning and booking platform.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-700">Services</p>
              <div className="mt-2 space-y-1">
                <p>AI Itinerary</p>
                <p>Hotel Tours</p>
                <p>Food Booking</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-slate-700">Destinations</p>
              <div className="mt-2 space-y-1">
                <p>Da Nang</p>
                <p>Hoi An</p>
                <p>Ha Noi</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-slate-700">Contact</p>
              <div className="mt-2 space-y-1">
                <p>support@smarttravel.ai</p>
                <p>+84 123 456 789</p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-slate-400">© 2026 Smart AI Travel. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
