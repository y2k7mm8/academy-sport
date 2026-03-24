import { Link } from "react-router";
import {
  Users,
  Target,
  Activity,
  Trophy,
  TrendingUp,
  MoreVertical,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function AdminDashboard() {
  const { language } = useLanguage();

  const stats = [
    {
      title: "Total Athletes",
      value: "1,248",
      change: "+12%",
      icon: Users,
      color: "bg-[#D50000]/10 text-[#D50000]",
    },
    {
      title: "Active Programs",
      value: "34",
      change: "+4%",
      icon: Activity,
      color: "bg-[#FFD700]/10 text-[#FFD700]",
    },
    {
      title: "Upcoming Events",
      value: "12",
      change: "Next week",
      icon: Target,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Medals Won",
      value: "156",
      change: "+24%",
      icon: Trophy,
      color: "bg-emerald-500/10 text-emerald-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-black text-neutral-900 tracking-tight uppercase">
            Dashboard Overview
          </h1>
          <p className="text-sm text-neutral-500 font-medium">
            Platform analytics and quick actions
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-neutral-200 text-sm font-bold uppercase tracking-wider text-neutral-700 hover:bg-neutral-50 rounded shadow-sm transition-colors">
            Generate Report
          </button>
          <button className="px-4 py-2 bg-[#D50000] text-sm font-bold uppercase tracking-wider text-white hover:bg-red-700 rounded shadow-sm transition-colors flex items-center gap-2">
            <span>+</span> Add Athlete
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <TrendingUp className="w-5 h-5 text-neutral-400" />
            </div>
            <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-1">
              {stat.title}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-neutral-900 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-emerald-500">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-neutral-200 p-6 shadow-sm flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-black text-neutral-900 uppercase tracking-wide">
              Performance Metrics
            </h3>
            <button className="text-neutral-400 hover:text-neutral-900">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center border-2 border-dashed border-neutral-100 rounded-lg bg-neutral-50/50">
            <div className="text-center">
              <Activity className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
              <p className="text-sm text-neutral-500 font-medium">
                Chart visualization loading...
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-black text-neutral-900 uppercase tracking-wide">
              Recent Activity
            </h3>
            <Link
              to="/admin/activity"
              className="text-xs font-bold text-[#D50000] hover:text-red-700 uppercase tracking-wider"
            >
              View All
            </Link>
          </div>
          <div className="space-y-6 flex-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4 items-start relative group">
                <div className="w-2 h-2 rounded-full bg-[#D50000] mt-1.5 ring-4 ring-[#D50000]/10 flex-shrink-0"></div>
                {i !== 4 && (
                  <div className="absolute left-1 top-4 w-px h-[calc(100%+8px)] bg-neutral-100"></div>
                )}
                <div>
                  <p className="text-sm font-bold text-neutral-900 leading-snug">
                    New athlete profile created
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Sadyr Japarov • 2 hours ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
