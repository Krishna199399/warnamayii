import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-green-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-linear-to-br from-green-400 to-emerald-500 text-lg font-bold text-white shadow-lg shadow-green-400/20">
            W
          </span>
          <div>
            <p className="text-lg font-semibold tracking-tight text-gray-900">
              Waranmayii
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-green-600">
              Green agriculture
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to="/" className="text-gray-700 transition hover:text-green-600">
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 transition hover:text-green-600"
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="text-gray-700 transition hover:text-green-600"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 transition hover:text-green-600"
          >
            Contact Us
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 transition hover:text-green-600"
          >
            dashboard
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to={"/login"}
            className="rounded-full border border-emerald-500 bg-linear-to-r from-emerald-500 to-teal-500 px-5 py-2 text-sm font-semibold text-white transition hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="rounded-full bg-linear-to-r from-lime-500 to-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:from-lime-600 hover:to-green-600 hover:shadow-lg hover:shadow-lime-500/30"
          >
            Register
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-green-300 text-gray-700 transition hover:bg-green-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-green-100 bg-white px-4 py-5 md:hidden">
          <div className="space-y-2">
            <Link
              to="/"
              className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-green-50 hover:text-green-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-green-50 hover:text-green-600"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-green-50 hover:text-green-600"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-green-50 hover:text-green-600"
            >
              Contact
            </Link>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Link
              to={"/login"}
              className="w-full rounded-full border border-emerald-500 bg-linear-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white text-center transition hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="w-full rounded-full bg-linear-to-r from-lime-500 to-green-500 px-4 py-2 text-sm font-semibold text-white text-center transition hover:from-lime-600 hover:to-green-600 hover:shadow-lg hover:shadow-lime-500/30"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
