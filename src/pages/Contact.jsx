import React from 'react'
import { Mail, Phone, MapPin, Send, Sprout } from "lucide-react";
import contactImg from "../assets/contactus.png";

function Contact() {
  return (
    <main>
      {/* hero section */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-emerald-950 to-green-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-lime-400/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl items-center justify-center px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200 shadow-[0_0_0_10px_rgba(16,185,129,0.08)]">
              <Sprout size={16} />
               Waranamayii
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* heading and form section */}
    <section className="bg-gray-50 pt-14 pb-16 px-4  bg-gradient-to-br from-gray-100 to-green-100">
      {/* Heading */}
      <div className="text-center ">
        {/* <p className="text-white text-3xl">Contact Us</p> */}
        <h2 className="text-3xl font-bold text-green-900">
          Feel <span className="text-green-400">Free to Contact </span>  
          With Us
        </h2>
      </div>

      {/* Form Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center -mt-4">
        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src={contactImg} // replace with your image
            alt="contact"
            className="w-130 h-130"
          />
        </div>

        {/* Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green-900 pt-4">
            Send your <span className="text-green-400">Message To Us</span>
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-green-700 text-green-900 rounded-lg p-3 w-full focus:outline-none 
                   focus:border-transparent focus:ring-1 focus:ring-green-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-green-700 text-green-900 rounded-lg p-3 w-full focus:outline-none 
                focus:border-transparent focus:ring-1 focus:ring-green-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-green-700 text-green-900 rounded-lg p-3 w-full focus:outline-none 
                    focus:border-transparent focus:ring-1 focus:ring-green-300"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-green-700 text-green-900 rounded-lg p-3 w-full focus:outline-none 
                focus:border-transparent focus:ring-1 focus:ring-green-300"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message Here..."
             className="border border-green-700 text-green-900 rounded-lg p-3 w-full focus:outline-none 
             focus:border-transparent focus:ring-1 focus:ring-green-300"
              ></textarea>

            <button
              type="submit"
              className="  rounded-lg flex items-center gap-2 border border-green-800 px-8 py-3 
                text-base font-semibold text-green-800  hover:bg-green-600 hover:text-white hover:border-green-400 transition"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto pt-6">
        {/* Mail */}
        <div className="group bg-gradient-to-r from-green-900 via-green-900 to-green-900
                shadow-md rounded-xl p-6 flex items-start gap-4 border border-[#029F86]
                transition-all duration-200 
                hover:border hover:border-green-400 
                hover:backdrop-blur-lg hover:bg-white/30">
            {/* Icon */}
            <div className="bg-[#A4F4CF] p-3 rounded-full">
                <Mail className="text-[#007A55]" />
            </div>
            {/* Content */}
            <div>
                <p className="text-white font-medium">Drop a line</p>
                <h3 className="font-semibold text-lg text-white">Mail Us</h3>
                <p className="text-white text-sm">contact123@gmail.com</p>
            </div>
        </div>

        {/* Call */}
        <div className="group bg-gradient-to-r from-green-900 via-green-900 to-green-900
                shadow-md rounded-xl p-6 flex items-start gap-4 border border-[#029F86]
                transition-all duration-200 
                hover:border hover:border-green-400 
                hover:backdrop-blur-lg hover:bg-white/30">
          <div className="bg-[#A4F4CF] p-3 rounded-full">
            <Phone className="text-[#007A55]" />
          </div>
          <div>
            <p className="text-white font-medium">24/7 Service</p>
            <h3 className="font-semibold text-lg text-white">Call Us</h3>
            <p className="text-white text-sm">+91 99889 88988</p>
          </div>
        </div>

        {/* Location */}
        <div className="group bg-gradient-to-r from-green-900 via-green-900 to-green-900
                shadow-md rounded-xl p-6 flex items-start gap-4 border border-[#029F86]
                transition-all duration-200 
                hover:border hover:border-green-400 
                hover:backdrop-blur-lg hover:bg-white/30">
          <div className="bg-[#A4F4CF] p-3 rounded-full">
            <MapPin className="text-[#007A55]" />
          </div>
          <div>
            <p className="text-white font-medium">Location</p>
            <h3 className="font-semibold text-lg text-white">Visit Us</h3>
            <p className="text-white text-sm">
              158, ralegth sit, houston, yk 2446, uk
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Map Section */}
    <section className="py-20 px-6 bg-gradient-to-br from-gray-100 to-green-100">
      <div className='max-w-7xl mx-auto'>
        <div className="w-full h-[350px] md:h-[350px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps?q=Belagavi,Karnataka&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
    </main>
    
  )
}

export default Contact
