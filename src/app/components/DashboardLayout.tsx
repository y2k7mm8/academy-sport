import { Outlet, Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  Trophy,
  CalendarDays,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const { t, language } = useLanguage();

  const navigation = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Athletes", href: "/admin/athletes", icon: Users },
    { name: "Sports", href: "/admin/sports", icon: Trophy },
    { name: "Events", href: "/admin/events", icon: CalendarDays },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-[#0a0a0a] text-white transition-all duration-300 flex flex-col fixed inset-y-0 z-50 md:relative`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-neutral-800">
          {sidebarOpen && (
            <span className="font-bold text-lg tracking-tight truncate uppercase text-white">
              Platform
            </span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            className="p-1.5 hover:bg-neutral-800 rounded-md text-neutral-400 hover:text-white transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#D50000] text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-neutral-400"}`}
                />
                {sidebarOpen && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-neutral-800">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors w-full"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Back to Site</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 sticky top-0">
          <div className="flex items-center flex-1 gap-4">
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search athletes, events..."
                className="w-full pl-10 pr-4 py-2 bg-neutral-100 border-none rounded-md text-sm focus:ring-2 focus:ring-[#D50000] outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              aria-label="Notifications"
              className="relative p-2 text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#D50000] rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-neutral-200 mx-2"></div>
            <Link
              to="/profile"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden border border-neutral-300">
                <img
                  src="https://images.unsplash.com/photo-1606335544053-c43609e6155d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdGhsZXRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNzQ3OTE0fDA&ixlib=rb-4.1.0&q=80&w=100"
                  alt="Admin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-sm font-bold text-neutral-900 leading-none mb-1">
                  Admin User
                </div>
                <div className="text-xs text-neutral-500 leading-none">
                  System Admin
                </div>
              </div>
            </Link>
          </div>
        </header>

        {/* Photo column on the right side (desktop only) */}

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:pr-[50%] overflow-y-auto bg-neutral-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
