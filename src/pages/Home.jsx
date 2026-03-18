import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const roleData = {
  traveler: {
    title: "Personalized Travel Like Never Before",
    desc: "Get a hyper-personalized itinerary that updates in real-time based on weather, crowds, and your current mood. No more rigid schedules.",
    list: ["Smart Recommendations", "Real-time Adjustments", "Exclusive App-only Discounts"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaxJgUqpGSP8pdsG93LwBJaht8E3nP2j8rd_WkHE9zSXb6JIE_TcubMHxErMMMh5qnWcEmoTMmhDbncZKCazNwOq9B4lN49f13Nt4DjlMLp8xP4ssBHRsf5773_r5O2ibCGudxe0-G6O8ghXdcTP7VWvz0dJgnLGzgWfvATHIY68vk3R591ASNEWghmxhWMXT9mx5KviUK2Y8bM1wnVXTc-xvny6HA9osEIbV2vAV854UCAN1GwL_jJbUVCBHC2n6ajJ_7lGYCjthZ",
  },
  guide: {
    title: "Showcase Your Elite Expertise",
    desc: "Empower your guiding business with AI-assisted scheduling and client matchmaking. Reach refined travelers who match your niche expertise.",
    list: ["Automated Scheduling", "Seamless Client Payments", "Profile Analytics Dashboard"],
    img: "https://images.unsplash.com/photo-1520110120385-c285d6b21c7d?auto=format&fit=crop&q=80&w=1200",
  },
  hotel: {
    title: "Optimize Your Premium Bookings",
    desc: "Integrate your property directly into travelers' AI plans. Get high-intent leads that perfectly fit your room availability and amenities.",
    list: ["Dynamic Pricing Insights", "Direct Booking Integration", "Guest Preference Data"],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
  },
};

export default function Home() {
  const [role, setRole] = useState("traveler");
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);
  const active = roleData[role];

  const handleScroll = (targetId) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-accent-sand leading-relaxed antialiased">
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/20" ref={menuRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand to-accent-ocean rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                S
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight bg-slate-900 bg-clip-text text-transparent">
                SmartTravel AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600 relative">
              {[
                {
                  key: "destinations",
                  label: "Destinations",
                  desc: "Curated regions and signature experiences.",
                  target: "destinations",
                  items: [
                    { title: "Da Nang Coastal", sub: "Golden Bridge, My Khe, Son Tra", target: "destinations" },
                    { title: "Hoi An Ancient", sub: "Lantern nights, riverside dining", target: "destinations" },
                    { title: "Ha Noi Cultural", sub: "Old Quarter, museums, street food", target: "destinations" },
                  ],
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDeJ2OCqcCK9qdfRA73S7UQPwXtBXrfjo2qz9YHT6r__gu2dI8gn_qAAAj83UPvWpQuJ_9q7qfBvEVz-AE8OEXleDIG2may1NyQDHAAI6ChaP-7UhL0Kt4uLIpG5GFv0oEV2h7iSR2ZBqOsaKN12KbeT9_tZSvDOKkNHd60-S0wOLl-PshONupAW4YWy7j7Je7PnrVkw3Gc4Urx9bIX1g3nt3HahlKAmHwVT-zPwCb-bjJRCAU0PVALQWQHLhPHxYayJ3eOx78430ab",
                },
                {
                  key: "how",
                  label: "How it Works",
                  desc: "From inspiration to a ready itinerary.",
                  target: "how-it-works",
                  items: [
                    { title: "Tell Us Your Style", sub: "Budget, vibe, pace, must-sees", target: "how-it-works" },
                    { title: "AI Orchestration", sub: "Optimize time, routes, and flows", target: "how-it-works" },
                    { title: "Confirm & Go", sub: "Book stays and tours in one flow", target: "how-it-works" },
                  ],
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCM-MHR6WvZVNr2R5VeVa6Fx4I9R-m65idYgKq5spPS2a3iKlCey16FqCiXz4mQQe4QZGLHZuqJuSSXxiBCf6cho74DID_bRqvzmktD7KGBL3vHRHxnzfW76_BSF7MBxSWfwL1-FhjLe66nqInsGkUGAFrlCLLSr1Uar0hK08mpkxVt-PgrdBpe_1g1AK1FbriR7ADNUrv4vjs7ODHzSv5q3KSAp906KDuF7MK2CEFvtyp17-cmYjb3nysavzMnX5pIsbvecs5MEeu5",
                },
                {
                  key: "about",
                  label: "About Us",
                  desc: "A travel studio blending AI with local expertise.",
                  target: "about-us",
                  items: [
                    { title: "Our Story", sub: "Built in Vietnam for modern explorers", target: "about-us" },
                    { title: "Local Partners", sub: "Guides, hosts, and artisans we trust", target: "about-us" },
                    { title: "Sustainability", sub: "Travel that gives back to communities", target: "about-us" },
                  ],
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBaxJgUqpGSP8pdsG93LwBJaht8E3nP2j8rd_WkHE9zSXb6JIE_TcubMHxErMMMh5qnWcEmoTMmhDbncZKCazNwOq9B4lN49f13Nt4DjlMLp8xP4ssBHRsf5773_r5O2ibCGudxe0-G6O8ghXdcTP7VWvz0dJgnLGzgWfvATHIY68vk3R591ASNEWghmxhWMXT9mx5KviUK2Y8bM1wnVXTc-xvny6HA9osEIbV2vAV854UCAN1GwL_jJbUVCBHC2n6ajJ_7lGYCjthZ",
                },
              ].map((menu) => (
                <div
                  key={menu.key}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(menu.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className={`hover:text-brand transition-colors text-sm uppercase tracking-wider font-semibold ${
                      openMenu === menu.key ? "text-brand" : ""
                    }`}
                    onClick={() => handleScroll(menu.target)}
                    type="button"
                  >
                    {menu.label}
                  </button>
                  {openMenu === menu.key && (
                    <div className="absolute left-0 top-full mt-4 w-[520px] rounded-3xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl p-6 menu-panel">
                      <div className="grid grid-cols-[1.2fr_1fr] gap-6">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-brand font-bold mb-2">
                            {menu.label}
                          </p>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{menu.desc}</h4>
                          <div className="space-y-3 mt-4">
                            {menu.items.map((item) => (
                              <button
                                key={item.title}
                                type="button"
                                onClick={() => handleScroll(item.target)}
                                className="w-full text-left rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 hover:border-brand/30 hover:bg-white transition"
                              >
                                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                                <p className="text-xs text-slate-500">{item.sub}</p>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl">
                          <img
                            alt={menu.label}
                            className="h-full w-full object-cover"
                            src={menu.image}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                              Featured
                            </p>
                            <p className="text-base font-semibold">{menu.label}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/auth/login"
                className="px-4 py-2 rounded-full text-sm font-bold text-slate-700 hover:text-brand transition-colors"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="px-5 py-2.5 rounded-full text-sm font-bold bg-slate-900 text-white hover:bg-brand transition-all shadow-md hover:shadow-brand/20"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover hero-video hero-video-slide delay-1"
            autoPlay
            muted
            loop
            playsInline
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuDUJjfb9mcI6-0WWxl3xi4Oxdyzz6wEjVxsZ8PW_wtWoNsEMM4ZjW40FKlqgVEmhIFhqV7Ttx8sibrdpmgF0nFizy_EsvgsWv6KdBya3p5MHudX9h-ayKLdEo2bqJ3eC-gBcIUiyIjbWzQiiqJHu3lyDrXkA_CrG7PcRPrRK4u4yr8RWCf3diBYrRxhypbYX7XN4fdQw0r4B2n9rqOlPgJhTyxx2_Hd7Okg08gmBqv4SqEF6ttGt4gObkXi_L19TMgyuBBycrxY23-p"
          >
            <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
          </video>
          <video
            className="absolute inset-0 w-full h-full object-cover hero-video hero-video-slide delay-2"
            autoPlay
            muted
            loop
            playsInline
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuDeJ2OCqcCK9qdfRA73S7UQPwXtBXrfjo2qz9YHT6r__gu2dI8gn_qAAAj83UPvWpQuJ_9q7qfBvEVz-AE8OEXleDIG2may1NyQDHAAI6ChaP-7UhL0Kt4uLIpG5GFv0oEV2h7iSR2ZBqOsaKN12KbeT9_tZSvDOKkNHd60-S0wOLl-PshONupAW4YWy7j7Je7PnrVkw3Gc4Urx9bIX1g3nt3HahlKAmHwVT-zPwCb-bjJRCAU0PVALQWQHLhPHxYayJ3eOx78430ab"
          >
            <source src="https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4" type="video/mp4" />
          </video>
          <video
            className="absolute inset-0 w-full h-full object-cover hero-video hero-video-slide delay-3"
            autoPlay
            muted
            loop
            playsInline
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuAlNfHCMQQiHSrmsnjIenGYkj2PG6GN9FODyvRjY2H3dOauP_vcvKSj6_M7p4537AQn7l2hrdN47WKAhZ-ufTRywCtrq8WniAEube1CNJvoS_nIV2J1Mp7gDozUpyXDerMhqEXAXNX6vXg_RQLjbunWo8bTjC4WjIC2RkWF-J7N0HHjCIvmzbsGMrRoXMye31OCjL2wa1UbWhAYj7GNKpS_YjLxKvtX0WqDAX3_yJbDc4TaZH0Osm83pJecwW15QI98ZG7aGPM9hgyf"
          >
            <source src="https://storage.googleapis.com/coverr-main/mp4/Tropical_Beach.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto reveal"
          data-reveal
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-8 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-accent-sun animate-pulse"></span>
            The Future of Exploration
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 drop-shadow-2xl leading-[1.1] tracking-tight">
            Your Next Adventure,
            <br />
            <span className="text-gradient italic font-extrabold">Perfected by AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Bespoke itineraries and local secrets, curated by advanced intelligence for the modern explorer. Experience Vietnam like never before.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-accent-sun text-white font-bold rounded-full text-lg hover:bg-white hover:text-accent-sun transition-all shadow-2xl shadow-accent-sun/20 transform hover:-translate-y-1">
              Start Your Journey
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-full text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3 group">
              <div className="bg-white/20 p-2 rounded-full group-hover:bg-brand transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
              Experience AI
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest font-bold">Discover More</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M19 14l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </div>
      </section>

      <main className="relative z-20">
        <section className="py-32 px-4 bg-accent-sand relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 reveal" data-reveal>
              <span className="text-brand font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                Travel Redefined
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900">
                Curating the Exceptional
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-brand to-accent-sun mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="premium-card-glass p-10 rounded-[2rem] deep-shadow group reveal" data-reveal>
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Intelligent Itineraries</h3>
                <p className="text-slate-500 leading-relaxed">
                  Our proprietary AI orchestrates every detail, learning your preferences to craft the perfect flow of activities.
                </p>
              </div>
              <div
                className="premium-card-glass p-10 rounded-[2rem] deep-shadow group reveal reveal-delay-1"
                data-reveal
              >
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Curated Local Insights</h3>
                <p className="text-slate-500 leading-relaxed">
                  Access a network of elite local guides and off-the-beaten-path experiences that don't exist in guidebooks.
                </p>
              </div>
              <div
                className="premium-card-glass p-10 rounded-[2rem] deep-shadow group reveal reveal-delay-2"
                data-reveal
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Seamless Reservations</h3>
                <p className="text-slate-500 leading-relaxed">
                  From boutique stays to private yachts, our AI manages all bookings with a single, elegant interface.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 bg-white scroll-section" id="how-it-works">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24 reveal" data-reveal>
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900">
                Planning Elevated
              </h2>
              <p className="text-slate-500 text-lg">Three steps to your most sophisticated journey yet.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-16 relative">
              <div className="relative text-center group reveal" data-reveal>
                <div className="mb-10 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200 aspect-square">
                  <img
                    alt="Travel inspiration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvPlOFWXyIu7l72vltAUQ8jLGqbWAlx8sQHqhmsdmEuOG00Vk6X6u_qW153mKXcm-xqFYakquFlliGtyX9HXQwNiju9UjTNBLaAHq4qDC5Yfx-guRfsBETL8pLOdGLS_Lqx9juNc9OjHCiJMFRe3LeBc6oHBPJ1qfNOiLzXTAJkUhbqCt3BAfuJDU-6kKyJNeoQL6xi1PjXbSp-31Fg_G4-V0tFgjZBCSK5rZ_hE50xILBcauvIa1G-IgSPNiZNFnMXS_fzgeSZ3_e"
                  />
                  <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10 shadow-xl">
                  1
                </div>
                <h4 className="text-2xl font-bold mb-4">Define Your Vision</h4>
                <p className="text-slate-500 leading-relaxed">
                  Share your aesthetic, interests, and pace. Our engine begins crafting your custom world.
                </p>
              </div>
              <div className="relative text-center group reveal reveal-delay-1" data-reveal>
                <div className="mb-10 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200 aspect-square">
                  <img
                    alt="AI Planning"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM-MHR6WvZVNr2R5VeVa6Fx4I9R-m65idYgKq5spPS2a3iKlCey16FqCiXz4mQQe4QZGLHZuqJuSSXxiBCf6cho74DID_bRqvzmktD7KGBL3vHRHxnzfW76_BSF7MBxSWfwL1-FhjLe66nqInsGkUGAFrlCLLSr1Uar0hK08mpkxVt-PgrdBpe_1g1AK1FbriR7ADNUrv4vjs7ODHzSv5q3KSAp906KDuF7MK2CEFvtyp17-cmYjb3nysavzMnX5pIsbvecs5MEeu5"
                  />
                  <div className="absolute inset-0 bg-accent-sun/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10 shadow-xl">
                  2
                </div>
                <h4 className="text-2xl font-bold mb-4">AI Orchestration</h4>
                <p className="text-slate-500 leading-relaxed">
                  Our intelligence synthesizes millions of data points into a cohesive, fluid masterplan.
                </p>
              </div>
              <div className="relative text-center group reveal reveal-delay-2" data-reveal>
                <div className="mb-10 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200 aspect-square">
                  <img
                    alt="Ready to travel"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZf374KU4HeXevpP1flTl6FGUfsFjkd9KT0cQDVc4AlwMb1_RayVqT-Y4nZg78ZG7CeNweUgoFA4MdvsYNIR-zNzbXSok6SN3HDmy2wAz4tw0yCUZ_apPWb3kqiz5lsMVo3VRK3-MBkYstdefDvHA7Boqe2f_TjcQa0DVexdlIm7axFVv7sf1t6Ey9WF8l9evj9PyZBeHgw9xOhxxDx0a2ozf9QepNLLyonAyYRQijRgALmduF4WZSnQr2OpyHbMLBE0daJd2oiuaM"
                  />
                  <div className="absolute inset-0 bg-accent-ocean/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="w-14 h-14 bg-accent-sun text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10 shadow-xl">
                  3
                </div>
                <h4 className="text-2xl font-bold mb-4">Venture Forward</h4>
                <p className="text-slate-500 leading-relaxed">
                  Experience complete peace of mind with real-time updates and effortless mobile integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal" data-reveal>
              <h2 className="text-4xl font-serif mb-10">An Ecosystem of Excellence</h2>
              <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100 rounded-full w-fit mx-auto">
                <button
                  className={`px-8 py-3 font-bold transition-all rounded-full ${
                    role === "traveler"
                      ? "bg-white shadow-sm text-brand"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  onClick={() => setRole("traveler")}
                >
                  Travelers
                </button>
                <button
                  className={`px-8 py-3 font-bold transition-all rounded-full ${
                    role === "guide"
                      ? "bg-white shadow-sm text-brand"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  onClick={() => setRole("guide")}
                >
                  Guides
                </button>
                <button
                  className={`px-8 py-3 font-bold transition-all rounded-full ${
                    role === "hotel"
                      ? "bg-white shadow-sm text-brand"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  onClick={() => setRole("hotel")}
                >
                  Hotels
                </button>
              </div>
            </div>
            <div
              className="bg-white p-6 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200 flex flex-col lg:flex-row items-center gap-16 reveal"
              data-reveal
            >
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-serif mb-6 text-slate-900">{active.title}</h3>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">{active.desc}</p>
                <ul className="space-y-4">
                  {active.list.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-medium text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-brand to-accent-sun rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    alt={active.title}
                    className="relative rounded-[2.5rem] shadow-2xl object-cover w-full h-[500px]"
                    src={active.img}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 bg-white scroll-section" id="destinations">
          <div className="max-w-7xl mx-auto">
            <div
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal"
              data-reveal
            >
              <div className="max-w-2xl">
                <span className="text-brand font-bold tracking-widest text-xs uppercase mb-3 block">
                  Curated Collections
                </span>
                <h2 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900">Trending in Vietnam</h2>
                <p className="text-slate-500 text-lg">
                  From misty mountains to neon skylines, discover our most coveted destinations.
                </p>
              </div>
              <div className="flex p-1 bg-slate-50 rounded-full border border-slate-100">
                <button className="px-6 py-2 rounded-full text-sm font-bold text-slate-400 hover:text-slate-900">
                  Beach
                </button>
                <button className="px-6 py-2 rounded-full text-sm font-bold text-slate-400 hover:text-slate-900">
                  Culture
                </button>
                <button className="px-6 py-2 rounded-full bg-white shadow-sm text-brand text-sm font-bold">
                  Popular
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Da Nang",
                  desc: "The city of bridges where the Han River meets the East Sea. A perfect blend of modernity and tradition.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeJ2OCqcCK9qdfRA73S7UQPwXtBXrfjo2qz9YHT6r__gu2dI8gn_qAAAj83UPvWpQuJ_9q7qfBvEVz-AE8OEXleDIG2may1NyQDHAAI6ChaP-7UhL0Kt4uLIpG5GFv0oEV2h7iSR2ZBqOsaKN12KbeT9_tZSvDOKkNHd60-S0wOLl-PshONupAW4YWy7j7Je7PnrVkw3Gc4Urx9bIX1g3nt3HahlKAmHwVT-zPwCb-bjJRCAU0PVALQWQHLhPHxYayJ3eOx78430ab",
                },
                {
                  title: "Hoi An",
                  desc: "Step back in time in the ancient town of lanterns. A tapestry of history, silk, and culinary wonders.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDspHlwEelurKkkZYSdCL-ZTBvXsvo-wQ9RMKgOpmnv9NfHGiUd6dIeRYYI6f57rQR3vQANwByOyLkX13QPJULnOd86zDNFcVwD35tJ0J-lQqp_NZHw-8oAmE1ZkwiHx2ZQTFsF9nssMTK6mnh0ptnArhtKw9634SfuMyfeef200RZqgh97hLUHOYo9FSAuzQQDGksdAUeGQiftiLtlBGP1l-lrKXwmbpa-BjtoyqTb3ns4nfWvsvX9WiwrM0MKttj9DIBFk4yWMpcb",
                },
                {
                  title: "Ha Noi",
                  desc: "The vibrant capital known for its centuries-old architecture and rich culture. A sensory feast in the heart of the North.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlNfHCMQQiHSrmsnjIenGYkj2PG6GN9FODyvRjY2H3dOauP_vcvKSj6_M7p4537AQn7l2hrdN47WKAhZ-ufTRywCtrq8WniAEube1CNJvoS_nIV2J1Mp7gDozUpyXDerMhqEXAXNX6vXg_RQLjbunWo8bTjC4WjIC2RkWF-J7N0HHjCIvmzbsGMrRoXMye31OCjL2wa1UbWhAYj7GNKpS_YjLxKvtX0WqDAX3_yJbDc4TaZH0Osm83pJecwW15QI98ZG7aGPM9hgyf",
                },
              ].map((card, index) => (
                <div
                  key={card.title}
                  className={`group relative overflow-hidden rounded-[2.5rem] h-[600px] shadow-2xl reveal ${
                    index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
                  }`}
                  data-reveal
                >
                  <img
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    src={card.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-3xl font-serif text-white mb-3">{card.title}</h4>
                    <p className="text-white/70 text-sm mb-8 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {card.desc}
                    </p>
                    <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-brand hover:text-white transition-all transform hover:scale-105">
                      Explore Destination
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-4 bg-white scroll-section" id="about-us">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal" data-reveal>
              <span className="text-brand font-bold tracking-[0.2em] text-sm uppercase mb-3 block">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900">
                Crafted Journeys, Rooted in Vietnam
              </h2>
              <p className="text-slate-500 text-lg">
                We blend intelligent planning with local insight to create meaningful travel across Vietnam.
              </p>
            </div>
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div className="space-y-6 reveal" data-reveal>
                <h3 className="text-3xl font-serif text-slate-900">
                  A modern travel collective powered by AI and real people.
                </h3>
                <p className="text-slate-500 text-lg">
                  SmartTravel AI was born from a love of Vietnam’s coastlines, mountains, and heritage towns.
                  We partner with local guides, boutique hotels, and family-run experiences to help travelers
                  go beyond the highlights.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Local-first network",
                      desc: "Handpicked hosts and artisans in every region.",
                    },
                    {
                      title: "Thoughtful itineraries",
                      desc: "Balanced days with culture, rest, and discovery.",
                    },
                    {
                      title: "Sustainable travel",
                      desc: "Programs that support communities and protect nature.",
                    },
                    {
                      title: "24/7 travel support",
                      desc: "We’re with you before, during, and after each trip.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                      <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative reveal reveal-delay-1" data-reveal>
                <div className="absolute -inset-6 bg-gradient-to-br from-brand/20 to-accent-sun/20 rounded-[3rem] blur-2xl"></div>
                <img
                  alt="About SmartTravel AI"
                  className="relative rounded-[2.5rem] shadow-2xl object-cover w-full h-[520px]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDspHlwEelurKkkZYSdCL-ZTBvXsvo-wQ9RMKgOpmnv9NfHGiUd6dIeRYYI6f57rQR3vQANwByOyLkX13QPJULnOd86zDNFcVwD35tJ0J-lQqp_NZHw-8oAmE1ZkwiHx2ZQTFsF9nssMTK6mnh0ptnArhtKw9634SfuMyfeef200RZqgh97hLUHOYo9FSAuzQQDGksdAUeGQiftiLtlBGP1l-lrKXwmbpa-BjtoyqTb3ns4nfWvsvX9WiwrM0MKttj9DIBFk4yWMpcb"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 bg-accent-sand">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 reveal" data-reveal>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Loved by Modern Adventurers</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Jenkins",
                  role: "Backpacker",
                  quote:
                    "The AI recommended a hidden cafe in Hoi An that I never would have found on my own. It changed the whole vibe of my trip!",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuNVo-Y4Bghy_oY_w5yY5c-TcfMPMKI9bs3DFOv0s39ejfmpT2J8n2ELDgjiBMEJctzilmXiKsQpVJUOiqeaVFFDZTL2kV5m9vBBhrTUQ6txD-CampfLb34wyczIqhZQ37glF4vuTJSajr_QjETzsGnnoVepDQJMrr-u17nic4uLdlr3GLQ80Zvz3ZArWfLYFpxFDwgdM6FExv02OP97qbuvctOTQVi0GhXx-JjdKtp1L1Kh0TrhbaYw2JSWVl5n5tttM0856ry2mn",
                  accent: "text-brand",
                  ring: "ring-brand-light",
                  card: "bg-white/50",
                },
                {
                  name: "Marcus Wong",
                  role: "Business Traveler",
                  quote:
                    "Efficiency is key for me. Booking flights and the hotel in one flow with an AI-optimized schedule was a lifesaver.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdstj6CSV3sNQrHgB7bNleBuYBGnXFLkeU7mGNEz5l42rPXR4MuzaR_0U34OLJAkpolo7qzfvHsZhoy7a_5zOmsG9-Q4bxudB_COzOO-RmIIdO48NfWXg4D7dYjEi58aUCsuKXRREwR8kgS4XOrrnIlj0MLk0fS0UVHmCn3hiwNZugjevED8wO64dbc_fhAbmfCvfLzccoVsBeYTvrEuRFzOA9nDDUWSI5PpbW-OZxSFc3C2HoWNM67efkV4PN0noDbOQfhs-9lCIG",
                  accent: "text-orange-500",
                  ring: "ring-orange-50",
                  card: "bg-white",
                },
                {
                  name: "Elena Rodriguez",
                  role: "Family Explorer",
                  quote:
                    "Traveling with kids is hard. SmartTravel AI helped find family-friendly spots that kept everyone happy and engaged.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiGhdoCrGhiBrjoG-eVA2FF8v-y1eyAtWeDDJAIK3MM_7y5-eXreunbhsLBiwAYzDYCcak4bc4FdG2Tt3M23tDE9h1DlnuB7D7vhnSYKDuHAKIffRBLO3ghC8VvvoXkuMrykxS-52lj74idankmLUyL3qfZxnvLMqXO_JlrLUnFSdi2xvMDMaugFhQon7gHJoluVjCXmWwJSIeXH82tAuJ3szhF9IXaYLC9h5--5SLgA0k77NRVRTixhEx8jZK-1ZtLuvjrSULn5Aw",
                  accent: "text-accent-ocean",
                  ring: "ring-blue-50",
                  card: "bg-white/50",
                },
              ].map((review, index) => (
                <div
                  key={review.name}
                  className={`${review.card} ${
                    index === 1 ? "transform scale-105 z-10" : ""
                  } backdrop-blur-sm p-10 rounded-[2.5rem] border border-white deep-shadow italic relative reveal ${
                    index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
                  }`}
                  data-reveal
                >
                  <div className="flex items-center gap-4 mb-8">
                    <img
                      alt={review.name}
                      className={`w-14 h-14 rounded-full object-cover ring-4 ${review.ring}`}
                      src={review.img}
                    />
                    <div>
                      <h5 className="font-bold not-italic text-slate-900">{review.name}</h5>
                      <span className={`${review.accent} text-xs font-bold uppercase tracking-widest not-italic`}>
                        {review.role}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">{review.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div
              className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] reveal"
              data-reveal
            >
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand/20 rounded-full blur-[100px]"></div>
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-sun/20 rounded-full blur-[100px]"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                  Ready to Journey Beyond the Ordinary?
                </h2>
                <p className="text-slate-400 text-xl mb-12 font-light">
                  Join over 50,000 global travelers who are redefining exploration with SmartTravel AI.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
                  <input
                    className="w-full sm:flex-1 px-8 py-5 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                    type="email"
                  />
                  <button className="w-full sm:w-auto px-12 py-5 bg-brand text-white font-bold rounded-full hover:bg-white hover:text-brand transition-all shadow-xl">
                    Join the Circle
                  </button>
                </div>
                <p className="mt-8 text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Limited beta access available now
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24 reveal" data-reveal>
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">
                  S
                </div>
                <span className="font-serif text-xl font-bold text-slate-900">SmartTravel AI</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Pioneering the intersection of artificial intelligence and global exploration. Discover the soul of Vietnam through a new lens.
              </p>
            </div>
            <div>
              <h6 className="font-bold mb-8 text-slate-900 uppercase tracking-widest text-xs">Curations</h6>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Da Nang Coastal
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Hoi An Ancient
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Ha Noi Cultural
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Saigon Modern
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-8 text-slate-900 uppercase tracking-widest text-xs">Intelligence</h6>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    How It Works
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Our Engine
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Privacy First
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    API Access
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-8 text-slate-900 uppercase tracking-widest text-xs">Connect</h6>
              <div className="flex gap-4">
                <a
                  className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all shadow-sm"
                  href="#"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all shadow-sm"
                  href="#"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest reveal"
            data-reveal
          >
            <p>© 2024 SmartTravel AI. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-slate-900 transition-colors" href="#">
                Terms
              </a>
              <a className="hover:text-slate-900 transition-colors" href="#">
                Privacy
              </a>
              <a className="hover:text-slate-900 transition-colors" href="#">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
