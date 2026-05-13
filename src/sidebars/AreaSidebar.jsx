import React from 'react'

import { Home, Users, BarChart3, FileText, DollarSign, Settings } from "lucide-react";

import { NavLink } from "react-router-dom";

export default function AreaSidebar() {
  return (

    <aside className="h-screen w-72 bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-900 text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-20 left-10 h-72 w-72 bg-emerald-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-10 h-80 w-80 bg-lime-400/10 blur-3xl rounded-full" />

      {/* Logo */}
      <div className="relative px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-black tracking-wide">
          🌱 Waranamayii
        </h1>

        <p className="text-xs text-slate-400 mt-1">Area Manager</p>

      </div>

      {/* Navigation */}
      <nav className="relative mt-6 px-4 space-y-2">

        <NavItem to="/dashboard/areamanager" icon={<Home size={20} />} label="Dashboard" />
        <NavItem to="/dashboard/areamanager/domanagers" icon={<Users size={20} />} label="DO Managers" />
        <NavItem to="/dashboard/reports" icon={<FileText size={20} />} label="Reports" />
        <NavItem to="/dashboard/revenue" icon={<DollarSign size={20} />} label="Revenue" />
        <NavItem to="/dashboard/settings" icon={<Settings size={20} />} label="Settings" />
      </nav>

    </aside>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 
        ${
          isActive
            ? "bg-emerald-500/20 text-emerald-300 shadow-lg"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      <span className="transition group-hover:scale-110">{icon}</span>
      <span className="font-medium tracking-wide">{label}</span>
    </NavLink>
  );
}
