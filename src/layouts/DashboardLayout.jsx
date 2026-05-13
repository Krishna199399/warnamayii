import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AdvisorSidebar from "../sidebars/AdvisorSidebar";
import AreaSidebar from "../sidebars/AreaSidebar";
import DoSidebar from "../sidebars/DoSidebar";
import StateSiderBar from "../sidebars/StateSiderBar";
import ZonalSiderbar from "../sidebars/ZonalSiderbar";

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Select sidebar based on user role
  const getSidebar = () => {
    switch (user?.role) {
      case 'advisor':
        return <AdvisorSidebar />;
      case 'areamanager':
        return <AreaSidebar />;
      case 'domanager':
        return <DoSidebar />;
      case 'statehead':
        return <StateSiderBar />;
      case 'zonalmanager':
        return <ZonalSiderbar />;
      default:
        return <AdvisorSidebar />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <div className="hidden lg:block">
        {getSidebar()}
      </div>

      {/* ==================== Mobile Sidebar ==================== */}
      {open && (
        <div className="fixed inset-0 z-50 flex">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <div className="relative z-50">
            <ZonalSiderBar/>
          </div>
        </div>
      )}

      {/* ==================== Main Content ==================== */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">
            Dashboard - {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
          </h2>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">{user?.name || user?.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
            <div className="h-9 w-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}