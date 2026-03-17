import { useState } from "react";

const roleData = {
  traveler: {
    title: "Personalized Travel Like Never Before",
    desc: "Get a hyper-personalized itinerary that updates in real-time based on weather, crowds, and your current mood. No more rigid schedules.",
    list: ["Smart Recommendations", "Real-time Adjustments", "Exclusive App-only Discounts"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS1cDNGzbwBdwiPo9jY3AjRFdv8RnRRVoeWmcGcVmlabXTWfakEvMNGV7VN2sOKbTYboY29qJzj2ZP727IUSEjsUYwKS2hLQKYZGkjzOQX3CkNVDpjsM2bx9_EvSDL7NPQOIlg9FEwS1ZiQMznfB9daeLQ03NoDnRA_5s5RPE6rwnClE4tedHwxqp2qyvmsa-QwMIq756Z381AQXIs-v6zHNE7z7L08Y6E7hoWkDHNaKvQegDRfJwbFxiHqWAkXZca0XPS01wUHT0q",
  },
  guide: {
    title: "Showcase Your Expertise",
    desc: "Empower your guiding business with AI-assisted scheduling and client matchmaking. Reach more travelers who match your niche expertise.",
    list: ["Automated Scheduling", "Seamless Client Payments", "Profile Analytics Dashboard"],
    img: "https://images.unsplash.com/photo-1520110120385-c285d6b21c7d?auto=format&fit=crop&q=80&w=800",
  },
  hotel: {
    title: "Optimize Your Bookings",
    desc: "Integrate your property directly into travelers' AI plans. Get high-intent leads that perfectly fit your room availability and amenities.",
    list: ["Dynamic Pricing Insights", "Direct Booking Integration", "Guest Preference Data"],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  },
};

export default function Home() {
  const [role, setRole] = useState("traveler");
  const active = roleData[role];
  return (
    <div className="font-sans text-slate-800 bg-accent-sand leading-relaxed">
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand rounded-custom flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">SmartTravel AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
              <a className="hover:text-brand transition-colors" href="#">
                Destinations
              </a>
              <a className="hover:text-brand transition-colors" href="#">
                How it Works
              </a>
              <a className="hover:text-brand transition-colors" href="#">
                Pricing
              </a>
              <button className="bg-brand text-white px-6 py-2.5 rounded-custom font-semibold hover:bg-brand-dark transition-all shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Da Nang Golden Bridge"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAj9IM3r_iZEqg6HMRvLDag1PtwoZb5es9DVy6GKMLb8NB-VwvgUmHVkGELQHiqcTo3w4ipINhKm4T1tiv2fV1_OEz5tBZ5G82Xju5HTPfaXTlvRNcFSmrCFVytzwvREO8tVBbGJi6_5mvuEzCqCHBvtG6N4c8bBH2KnHCajMiZKBlKktj4gaCd4nDYhoGSvde0hli8TT0ltcEHdtBOhqEMjonrKr0bZ_urP2MHAZ4RiF_yPsg5CrcIjjg4d7_xKAdqSoQPWChyQGK"
          />
          <div className="absolute inset-0 hero-gradient bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6 border border-white/30">
            The New Way to Travel
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 drop-shadow-lg leading-tight">
            Your Next Adventure,
            <br />
            <span className="text-accent-sun italic">Perfected by AI</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Custom-tailored itineraries, curated local experiences, and stress-free bookings. Let
            artificial intelligence handle the details while you make the memories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-accent-sun text-white font-bold rounded-custom text-lg hover:scale-105 transition-transform shadow-xl">
              Start Planning
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/40 font-bold rounded-custom text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <path
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              Watch Video
            </button>
          </div>
        </div>
      </section>

      <main className="relative z-20">
        <section className="py-24 px-4 bg-accent-sand">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Redefining the Travel Experience
              </h2>
              <div className="h-1 w-20 bg-brand mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-custom soft-elevation border border-slate-100 group hover:-translate-y-2 transition-transform">
                <div className="w-14 h-14 bg-brand-light rounded-custom flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Powered Itineraries</h3>
                <p className="text-slate-600">
                  Smart algorithms create personalized daily schedules based on your pace,
                  interests, and budget.
                </p>
              </div>
              <div className="bg-white p-8 rounded-custom soft-elevation border border-slate-100 group hover:-translate-y-2 transition-transform">
                <div className="w-14 h-14 bg-brand-light rounded-custom flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Verified Local Guides</h3>
                <p className="text-slate-600">
                  Connect with local experts who bring history and culture to life with authentic
                  storytelling.
                </p>
              </div>
              <div className="bg-white p-8 rounded-custom soft-elevation border border-slate-100 group hover:-translate-y-2 transition-transform">
                <div className="w-14 h-14 bg-brand-light rounded-custom flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Seamless Hotel Bookings</h3>
                <p className="text-slate-600">
                  Curated accommodations that match your style, with instant confirmation and
                  best-price guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Planning in Three Simple Steps
              </h2>
              <p className="text-slate-500">Effortless travel from inspiration to destination.</p>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative">
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10"></div>
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-brand/30">
                  1
                </div>
                <h4 className="text-xl font-bold mb-2">Input Preferences</h4>
                <p className="text-slate-600">
                  Tell us where, when, and what you love. From culinary tours to mountain hikes.
                </p>
              </div>
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-brand/30">
                  2
                </div>
                <h4 className="text-xl font-bold mb-2">AI Generates Plan</h4>
                <p className="text-slate-600">
                  Our AI analyzes thousands of data points to build your dream itinerary in
                  seconds.
                </p>
              </div>
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-brand/30">
                  3
                </div>
                <h4 className="text-xl font-bold mb-2">Book &amp; Go</h4>
                <p className="text-slate-600">
                  Review, adjust, and book everything in one click. Your digital guide is ready!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                Empowering the Ecosystem
              </h2>
              <div className="flex justify-center border-b border-slate-200">
                <button
                  className={`px-8 py-4 font-bold transition-all border-b-2 ${
                    role === "traveler" ? "tab-active" : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                  onClick={() => setRole("traveler")}
                >
                  For Travelers
                </button>
                <button
                  className={`px-8 py-4 font-bold transition-all border-b-2 ${
                    role === "guide" ? "tab-active" : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                  onClick={() => setRole("guide")}
                >
                  For Guides
                </button>
                <button
                  className={`px-8 py-4 font-bold transition-all border-b-2 ${
                    role === "hotel" ? "tab-active" : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                  onClick={() => setRole("hotel")}
                >
                  For Hotels
                </button>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-custom soft-elevation flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{active.title}</h3>
                <p className="text-slate-600 mb-6">{active.desc}</p>
                <ul className="space-y-3">
                  {active.list.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <img alt={active.title} className="rounded-custom shadow-lg" src={active.img} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Trending in Vietnam</h2>
                <p className="text-slate-500">
                  Discover the magic of the Orient with our curated picks.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-full border border-slate-200 text-sm font-medium hover:bg-brand hover:text-white hover:border-brand transition-all">
                  Beach
                </button>
                <button className="px-4 py-2 rounded-full border border-slate-200 text-sm font-medium hover:bg-brand hover:text-white hover:border-brand transition-all">
                  Culture
                </button>
                <button className="px-4 py-2 rounded-full bg-brand text-white text-sm font-medium">
                  Popular
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Da Nang",
                  desc: "Coastal city known for its sandy beaches and history as a French colonial port.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa2SIfgd1xlFLI7ZYKfgzRNIbLWbG7dYn4iCj1I34xWyZEcutfvm2c-691Km7uDOpU9bKVnBmrc5B49D2uxvpxX8NvUGlwSjmRTG4TP46SvD4OVut8OhCQKWdvGPB4CqqPxLlp_WHBxUk5La4WB0nPkbvAW6QKUed3_sCE3XOGTSMlHLcDlsXF6vVJjKvuayG444u-ebH9xw5KXCqK41JBfxQx-bu9zvCVTqq2MsM80IL2t8Iw-4g2l5ZXKz8G5rc-zB1rWkQ_Vpac",
                },
                {
                  title: "Hoi An",
                  desc: "UNESCO World Heritage site with exceptionally well-preserved ancient town architecture.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXXK7YyZjd0_yx3CDWEqU9yc65du6m3-citcCqrzTUHH4OieaQ2fINRWPkpiactVRv8FAn44h_l6SVaAVz825lf8L9PAAP2tA04ock-hzjH5qRhCThPnXltFbnCKjPa6611vFYmjPNUumG69f95cY0xEd-4yeZR0w9awC7NFaMulGxMO_pzRTA_Ui0jTUTGd6ihoj03xrEpiT8ooqrcG61hLPdL30x1IvMmyM3jkJzk8QnCZAzgIXxbat758_CECTn27M0O4ROaBBw",
                },
                {
                  title: "Ha Noi",
                  desc: "The vibrant capital known for its centuries-old architecture and rich culture.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYCSWFdN_5YUNqy1wAJaDnvMxjDT8BtpM6rvK4zq-FOGgUUc189vkYVoOON5rxUAfBv2k_5cAMJIattT-x80eTzd70jgS-rSY7-QjHfRW-_si2PamxAJ-oY-zEZo1MsgttDg1-EEdjg74oFrhkBnv6YT9Rp58ivpWHZvgRZj-Xv3iOAZZ26A4aPjGc8e8OCMGmus6R34VcXWjoXj5UpH1muflY_br9w_77X6HcWuCWaWvDt2YL6GPAspDyAOksOMmqTWxgpdAD1Zvc",
                },
              ].map((card) => (
                <div key={card.title} className="group relative overflow-hidden rounded-custom aspect-[3/4]">
                  <img
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={card.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h4 className="text-2xl font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-white/80 text-sm mb-4">{card.desc}</p>
                    <button className="px-6 py-2 bg-white text-slate-900 rounded-custom font-bold text-sm hover:bg-accent-sun hover:text-white transition-colors">
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-accent-sand">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
              Loved by Adventurers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Jenkins",
                  role: "Backpacker",
                  quote:
                    "The AI recommended a hidden cafe in Hoi An that I never would have found on my own. It changed the whole vibe of my trip!",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkd0MHdm1wlaQd7FepZBPfh50Eg8nsivfdaaYaQyV0A8BqZ55qJgBIE3ibzY3QAkQ6uDqPOAdhqxne9bMCJiodgdKrxwEuXAtwPRvIzqBkscxvHnQa66JKUZXrrtvg_88SannE3zGmlAAjXk7iKe6DsDhIHMpr21uxeKDJ-sVNjfa-Kofo_T7A7h6z-mIkqt5k-xhAAWMFr0rI8braUFsCH1-g-acvX6AqmaQJ9QAt1_YgtVG57IR9oOyoveA78aGjrvBYcbhXNqAP",
                },
                {
                  name: "Marcus Wong",
                  role: "Business Traveler",
                  quote:
                    "Efficiency is key for me. Booking flights and the hotel in one flow with an AI-optimized schedule was a lifesaver.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIOvkhvZuGqaSPbxSl1yOoDFEFWroaBmIamw09O7P086wLu9ljHaE56UGidZm_oMMWXZhWUr4U8Z9nlDhRcxOL2i6cgFOtUSHOAj5u3WowkncA5J8pTiJ6SUxihYEPbLU-Zz40VmUhD8j4knJUE7UKe1pNMb2T3zprRCoVgB2HCHAPdxbSZU9sge51gKPNpqnt6D5p8hSZCBtzJGcYeDY8gjcEopnm9HwBWZRRQGmR4Tn6V_m0MICuSS5wu3yfsq1BIxI53vgDRygi",
                },
                {
                  name: "Elena Rodriguez",
                  role: "Family Explorer",
                  quote:
                    "Traveling with kids is hard. SmartTravel AI helped find family-friendly spots that kept everyone happy and engaged.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxhcCS2zuSv7EgU5liQtN-eTlIRaeEvMHrkPLABTizs60khF1a6X65xLtGZikQtCsrYsJiZsIQdoRsWuDvGEXaV91t-fQ8EK3l2fDSogAulJkCFk3UDePU7m5oZmisxymQwAEP5tulHdQI2-aRvg5gOKs4scWYoNevvfF3ZBux1Khp1LSXjyhRx5NE4ZFN5K7vq7qgct7cVZwouBQGnHE54dRxj0nOKK4LKvBu-a2lZV4v8UynpOPV6mw-XbwlbLnIkezfqdOqCC0J",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="bg-white p-8 rounded-custom soft-elevation border border-slate-100 italic"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img alt={review.name} className="w-12 h-12 rounded-full object-cover" src={review.img} />
                    <div>
                      <h5 className="font-bold not-italic">{review.name}</h5>
                      <span className="text-slate-400 text-sm not-italic">{review.role}</span>
                    </div>
                  </div>
                  <p className="text-slate-600">{review.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-brand rounded-[2rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent-sun/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                Join over 50,000 travelers who are exploring the world smarter, faster, and better
                with AI.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <input
                  className="w-full sm:w-80 px-6 py-4 rounded-custom text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent-sun"
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="w-full sm:w-auto px-10 py-4 bg-accent-sun text-white font-bold rounded-custom hover:bg-orange-500 transition-colors shadow-lg">
                  Join the Future
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand rounded-custom flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-serif text-lg font-bold">SmartTravel AI</span>
            </div>
            <p className="text-slate-400 text-sm">
              Empowering travelers with artificial intelligence to create unforgettable journeys
              since 2024.
            </p>
          </div>
          <div>
            <h6 className="font-bold mb-6 text-slate-800">Company</h6>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>
                <a className="hover:text-brand" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-brand" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-brand" href="#">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-6 text-slate-800">Support</h6>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>
                <a className="hover:text-brand" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-brand" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-brand" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-6 text-slate-800">Social</h6>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white cursor-pointer transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </div>
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white cursor-pointer transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-100 mt-12 pt-8 text-center text-slate-400 text-sm">
          © 2024 SmartTravel AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
