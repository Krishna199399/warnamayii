import React from 'react'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-slate-950 via-emerald-950 to-teal-900 text-slate-100">
      <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute left-10 top-24 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-950 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* <div className="mb-14 rounded-4xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Waranmayii</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Modern green solutions for farms, wellness, and everyday sustainability.
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:from-emerald-600 hover:to-teal-600">
                Explore offerings
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Contact us
              </a>
            </div>
          </div>
        </div> */}

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-6 rounded-4xl border border-green-600/20 bg-white/5 p-8 shadow-2xl shadow-emerald-400/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-linear-to-br from-emerald-500 to-teal-500 text-lg font-bold text-white shadow-lg shadow-emerald-500/20">
                W
              </span>
              <div>
                <p className="text-2xl font-semibold">Waranmayii</p>
                <p className="text-sm text-slate-300">Sustainable tools, education, and community support for modern growers.</p>
              </div>
            </div>

            <p className="max-w-md leading-7 text-slate-300">
              A polished gradient footer using strong green tones, soft glow accents, and clean typography for a premium finish.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
              <div className="rounded-3xl bg-emerald-500/10 px-3 py-2 text-center text-sm font-semibold text-emerald-200">
                120+ farmers
              </div>
              <div className="rounded-3xl bg-slate-900/70 px-3 py-2 text-center text-sm text-slate-300">
                24/7 support
              </div>
              <div className="rounded-3xl bg-slate-900/70 px-3 py-2 text-center text-sm text-slate-300">
                100% organic
              </div>
            </div>

            <div className="flex items-center gap-3">
              {['Facebook', 'Twitter', 'Instagram'].map((label, index) => (
                <a
                  key={label}
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 transition hover:bg-emerald-500 hover:text-white"
                  aria-label={label}
                >
                  <span className="sr-only">{label}</span>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    {index === 0 ? (
                      <path d="M22 12a10 10 0 10-11.5 9.86v-6.98H8v-2.88h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.22.2 2.22.2v2.44h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86H18l-.4 2.88h-2.2v6.98A10 10 0 0022 12z" />
                    ) : index === 1 ? (
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.58 8.58 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 5.92a4.28 4.28 0 001.33 5.72 4.25 4.25 0 01-1.94-.54v.06a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0022.46 6z" />
                    ) : (
                      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Explore</h3>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li><a href="#" className="transition hover:text-emerald-400">Products</a></li>
                <li><a href="#" className="transition hover:text-emerald-400">Services</a></li>
                <li><a href="#" className="transition hover:text-emerald-400">Pricing</a></li>
                <li><a href="#" className="transition hover:text-emerald-400">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Resources</h3>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li><a href="#" className="transition hover:text-emerald-400">Blog</a></li>
                <li><a href="#" className="transition hover:text-emerald-400">Help Center</a></li>
                <li><a href="#" className="transition hover:text-emerald-400">Partners</a></li>
                <li><a href="#" className="transition hover:text-emerald-400">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="rounded-4xl border border-emerald-500/10 bg-emerald-500/5 p-8 shadow-lg shadow-emerald-500/10 backdrop-blur-xl">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Stay in the loop</h3>
            <p className="mt-4 text-slate-300">Get farm-care tips, product updates, and community news in your inbox.</p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 rounded-2xl border border-emerald-500/20 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:from-emerald-600 hover:to-teal-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-emerald-500/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Waranmayii. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-slate-300">
            <a href="#" className="transition hover:text-emerald-400">Privacy Policy</a>
            <a href="#" className="transition hover:text-emerald-400">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer