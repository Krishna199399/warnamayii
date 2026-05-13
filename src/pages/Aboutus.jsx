import {
  Eye,
  Flower2,
  HeartPulse,
  Leaf,
  Package,
  ShieldPlus,
  ShoppingBag,
  Sprout,
  Target,
  UtensilsCrossed,
  Phone, Users, 
  Handshake, ArrowRight, Sparkles,Star
} from "lucide-react";
import heroBg from "../assets/heroBg.png";
import heroTractor from "../assets/hero-tractor.jpg";

function Aboutus() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-emerald-950 to-green-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-lime-400/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl items-center justify-center px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200 shadow-[0_0_0_10px_rgba(16,185,129,0.08)]">
              <Sprout size={16} />
              About Waranamayii
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              About Waranamayii
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl lg:text-2xl">
              Building a sustainable future with nature-driven solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-br from-white via-emerald-50 to-lime-50 py-16 text-slate-950 sm:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-emerald-950/12 via-white/55 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-emerald-50 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-lime-200/35 blur-3xl" />
        <div className="pointer-events-none absolute left-[15%] top-0 h-full w-px bg-slate-100" />

        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12">
          <div className="relative grid gap-8 lg:grid-cols-[575px_300px_1fr] lg:grid-rows-[96px_170px_165px] lg:gap-x-7 lg:gap-y-0">
            <div className="hidden h-px w-28 self-start bg-emerald-500 lg:col-start-1 lg:row-start-1 lg:mt-9 lg:block" />

            <div className="pointer-events-none absolute right-6 top-0 hidden h-8 w-8 bg-[#00241C] lg:block" />
            <div className="pointer-events-none absolute right-0 top-10 hidden h-9 w-9 bg-emerald-500 lg:block" />

            <h2 className="max-w-190 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:col-start-1 lg:row-start-1 lg:ml-36">
              Who We Are
            </h2>

            <div className="overflow-hidden rounded-md lg:col-start-1 lg:row-span-2 lg:row-start-2">
              <img
                src={heroBg}
                alt="Waranamayii natural products and sustainable solutions"
                className="h-82.5 w-full object-cover lg:h-83.75"
              />
            </div>

            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:w-[640px]">
              Waranamayii is a purpose-driven organization focused on
              eco-friendly and bio-based products across agriculture, wellness,
              personal care, and daily-use needs. We promote healthier living
              and sustainable practices through innovative natural solutions.
            </p>

            <div className="flex items-center gap-5 lg:col-start-2 lg:row-start-3 lg:block">
              <div className="relative flex h-24 w-24 shrink-0 animate-pulse items-center justify-center rounded-full text-emerald-950">
                <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/60" />
                <div className="absolute inset-5 rounded-full bg-[#00241C]" />
                <ArrowRight
                  size={25}
                  className="relative -rotate-45 text-white"
                  strokeWidth={2.5}
                />
              </div>
              <p className="max-w-36 text-[10px] font-bold uppercase leading-4 tracking-[0.22em] text-slate-500 lg:mt-3">
                Leading better nature-based solutions
              </p>
            </div>

            <div className="overflow-hidden rounded-md   lg:col-span-2 lg:col-start-2 lg:row-start-3 lg:ml-44 lg:w-[390px]">
              <img
                src={heroTractor}
                alt="Agriculture team and field operations"
                className="h-48.75 w-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-emerald-50 to-lime-50 py-20 text-slate-900 sm:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white/40 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/45 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-12 h-64 w-64 rounded-full bg-lime-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-200/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.26em] text-emerald-700 shadow-sm">
              <Target size={16} />
              Mission & Vision
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Our Mission & Vision
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[2.25rem] border border-emerald-100/80 bg-linear-to-br from-emerald-500 via-green-600 to-teal-700 p-8 text-white shadow-[0_35px_100px_-55px_rgba(5,150,105,0.5)] sm:p-10">
              <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-white/12 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-full bg-lime-300/18 blur-3xl" />

              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-white/14 backdrop-blur-sm">
                  <Target size={24} />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100">
                  Our Mission
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Our Mission
                </h3>

                <div className="mt-6 space-y-5 text-base leading-8 text-emerald-50/95 sm:text-lg">
                  <p>
                    To provide high-quality, natural, and sustainable products that improve
                    everyday life while protecting the environment.
                  </p>
                  <p>
                    We aim to empower people with better choices that support long-term health and
                    growth.
                  </p>
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/72 p-8 shadow-[0_35px_100px_-55px_rgba(16,185,129,0.28)] ring-1 ring-emerald-100/70 backdrop-blur-xl sm:p-10">
              <div className="pointer-events-none absolute -right-8 top-8 h-36 w-36 rounded-full bg-emerald-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-lime-200/40 blur-3xl" />

              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500/12 text-emerald-700">
                  <Eye size={24} />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                  Our Vision
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Our Vision
                </h3>

                <div className="mt-6 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
                  <p>
                    To become a trusted leader in bio-based and eco-friendly solutions by building
                    a strong network and creating a positive impact on society and the planet.
                  </p>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                  Positive impact on society and the planet
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

   <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-lime-50 py-24 text-slate-900">

   {/* Background Effects */}
      <div className="absolute -top-20 left-0 h-72 w-72 bg-emerald-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-80 w-80 bg-lime-200/40 blur-3xl rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-16">

        {/* Heading */}
        <div className="max-w-7xl">
          <p className="text-sm uppercase text-center tracking-[0.3em] text-emerald-600">
            What We Do
          </p>
          <h2 className="mt-4 text-5xl font-black text-center leading-tight">
            Our Work Speaks Through Impact
          </h2>
          <p className="mt-6 text-lg text-center text-slate-600">
            From agriculture to daily life, we provide sustainable solutions 
            that improve health, productivity, and environment.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {/* Card */}
          <div className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-emerald-100 p-7 shadow-lg hover:shadow-emerald-200/50 transition">
            <h4 className="text-xl font-bold">🌾 Agriculture Solutions</h4>
            <p className="mt-3 text-slate-600 text-sm">
              Bio fertilizers that improve soil health and crop productivity.
            </p>
          </div>

          <div className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-emerald-100 p-7 shadow-lg hover:shadow-cyan-200/50 transition">
            <h4 className="text-xl font-bold">🧼 Smart Cleaning</h4>
            <p className="mt-3 text-slate-600 text-sm">
              Bio enzyme-based cleaning solutions for safer homes.
            </p>
          </div>

          <div className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-emerald-100 p-7 shadow-lg hover:shadow-violet-200/50 transition">
            <h4 className="text-xl font-bold">💊 Wellness & Care</h4>
            <p className="mt-3 text-slate-600 text-sm">
              Natural products designed for healthier living.
            </p>
          </div>

          <div className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-emerald-100 p-7 shadow-lg hover:shadow-rose-200/50 transition">
            <h4 className="text-xl font-bold">🐄 Animal Nutrition</h4>
            <p className="mt-3 text-slate-600 text-sm">
              Nutritional solutions supporting livestock health.
            </p>
          </div>

          <div className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-emerald-100 p-7 shadow-lg hover:shadow-amber-200/50 transition">
            <h4 className="text-xl font-bold">🛍️ Daily Essentials</h4>
            <p className="mt-3 text-slate-600 text-sm">
              FMCG products made with sustainability in mind.
            </p>
          </div>

          <div className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-emerald-100 p-7 shadow-lg hover:shadow-fuchsia-200/50 transition">
            <h4 className="text-xl font-bold">🌿 Herbal & Nutrition</h4>
            <p className="mt-3 text-slate-600 text-sm">
              Herbal cosmetics and nutraceutical solutions.
            </p>
          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 rounded-2xl bg-emerald-600 text-white p-8 text-center shadow-xl">
          <p className="text-lg font-semibold">
            Designed for people. Powered by nature. Built for the future 🌍
          </p>
        </div>

      </div>
  </section>

 
    
   <section className="relative overflow-hidden py-10 bg-gradient-to-br from-white via-emerald-50 to-lime-50 text-slate-900">
      
      {/* 1. Subtle Background Grid Pattern for the Outer Section */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-emerald-100 opacity-30 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="outer-grid"
            width={40}
            height={40}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 40V.5H40" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#outer-grid)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* 2. Main High-Contrast CTA Card */}
        <div className="relative h-110 isolate overflow-hidden bg-slate-950 px-8 py-20 shadow-2xl rounded-[3rem] sm:px-16 sm:py-28 lg:flex lg:items-center lg:gap-x-12 lg:px-24">
          
          {/* 3. Intense Glow Behind the Card (Mesh Gradient) */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-lime-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>

          {/* 4. Inside Grid Pattern Overlay */}
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="inner-grid"
                width={40}
                height={40}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 40V.5H40" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#inner-grid)" />
          </svg>

          {/* 5. Left Column: Text & Content */}
          <div className="relative z-10 w-full lg:max-w-2xl lg:flex-auto">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20 mb-8">
              <Sparkles size={14} className="text-emerald-300" />
              <span>Shape the future with us</span>
            </div>

            {/* Bold Heading with Gradient "Journey" */}
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">Journey</span>
            </h2>
            
            {/* Body Text */}
            <p className="mt-8 text-lg leading-8 text-slate-300">
              Be a part of <span className="font-bold text-white">Waranamayii</span> and contribute to a healthier and more sustainable future. 
              Whether you are a customer or a distributor, we welcome you to grow with us.
            </p>

            {/* 6. Buttons Flex Container */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              
              {/* Primary Contact Button (Solid Green with Shine Effect) */}
              <button className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] active:scale-95">
                <Phone size={20} className="transition-transform group-hover:-rotate-12" />
                Contact Us
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Network Button (Dark and Bordered) */}
              <button className="group flex items-center gap-3 rounded-full border-2 border-slate-700 bg-slate-900/50 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-slate-800 active:scale-95">
                <Handshake size={20} className="text-emerald-400" />
                Join Our Network
              </button>
            </div>
          </div>

          {/* 7. Right Column: Decorative Glowing Badge (Desktop Only) */}
          <div className="relative mt-16 hidden h-80 lg:mt-0 lg:flex lg:flex-none justify-center items-center">
             <div className="relative flex h-64 w-64 items-center justify-center">
                
                {/* 8. Pulsing Glow Background Behind the Badge Box */}
                <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-emerald-500/30 to-lime-500/30 blur-3xl" />
                
                {/* 9. Floating Glassmorphism Box */}
              
             </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}

export default Aboutus;
