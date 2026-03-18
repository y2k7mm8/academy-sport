import { Link } from "react-router";
import { Search, Filter, MoreHorizontal, Plus, Download } from "lucide-react";

export function AdminAthletesTable() {
  const athletes = [
    { id: 1, name: "Aisuluu Tynybekova", sport: "Wrestling", region: "Bishkek", age: 31, status: "Active" },
    { id: 2, name: "Akzhol Makhmudov", sport: "Wrestling", region: "Osh", age: 24, status: "Active" },
    { id: 3, name: "Meerim Zhumanazarova", sport: "Wrestling", region: "Talas", age: 24, status: "Active" },
    { id: 4, name: "Gulshat Asylbekova", sport: "Athletics", region: "Chui", age: 20, status: "Pending" },
    { id: 5, name: "Nurbek Ulanov", sport: "Judo", region: "Issyk-Kul", age: 19, status: "Draft" },
  ];

  return (
    <div className="space-y-6 max-w-[1440px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-black text-neutral-900 tracking-tight uppercase">Athletes Directory</h1>
          <p className="text-sm text-neutral-500 font-medium mt-1">Manage and track national team members</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-white border border-neutral-200 text-sm font-bold uppercase tracking-wider text-neutral-700 hover:bg-neutral-50 rounded shadow-sm transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="px-4 py-2 bg-[#D50000] text-sm font-bold uppercase tracking-wider text-white hover:bg-red-700 rounded shadow-sm transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Athlete
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-neutral-50/50">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Search by name, sport, or ID..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-neutral-200 rounded-md text-sm focus:ring-2 focus:ring-[#D50000] outline-none transition-shadow"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="px-4 py-2 bg-white border border-neutral-200 text-sm font-bold uppercase tracking-wider text-neutral-700 hover:bg-neutral-50 rounded shadow-sm transition-colors flex items-center gap-2 flex-1 justify-center sm:flex-none">
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-50/80 border-b border-neutral-200">
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest w-12">
                  <input type="checkbox" className="rounded border-neutral-300 text-[#D50000] focus:ring-[#D50000]" />
                </th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest">Athlete</th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest">Sport / Discipline</th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest">Region</th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest">Age</th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest">Status</th>
                <th className="py-4 px-6 text-xs font-bold text-neutral-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 bg-white">
              {athletes.map((athlete) => (
                <tr key={athlete.id} className="hover:bg-neutral-50/50 transition-colors group">
                  <td className="py-4 px-6">
                    <input type="checkbox" className="rounded border-neutral-300 text-[#D50000] focus:ring-[#D50000]" />
                  </td>
                  <td className="py-4 px-6">
                    <Link to={`/admin/athletes/${athlete.id}`} className="flex items-center gap-3 group-hover:text-[#D50000] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 overflow-hidden flex-shrink-0">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(athlete.name)}&background=f3f4f6&color=D50000&rounded=true`}
                          alt={athlete.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-neutral-900 group-hover:text-[#D50000]">{athlete.name}</div>
                        <div className="text-xs text-neutral-500 font-medium">ID: #{2000 + athlete.id}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-neutral-700">{athlete.sport}</td>
                  <td className="py-4 px-6 text-sm text-neutral-600">{athlete.region}</td>
                  <td className="py-4 px-6 text-sm text-neutral-600 font-medium">{athlete.age}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
                      athlete.status === "Active" ? "bg-emerald-100 text-emerald-800" :
                      athlete.status === "Pending" ? "bg-[#FFD700]/20 text-yellow-800" :
                      "bg-neutral-100 text-neutral-600"
                    }`}>
                      {athlete.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-neutral-400 hover:text-neutral-900 transition-colors p-1.5 hover:bg-neutral-100 rounded-md">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-neutral-200 flex items-center justify-between bg-neutral-50/50">
          <span className="text-sm font-medium text-neutral-500">Showing 1 to 5 of 124 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-neutral-200 bg-white rounded text-sm font-bold text-neutral-400 cursor-not-allowed">Prev</button>
            <button className="px-3 py-1.5 border border-[#D50000] bg-[#D50000] text-white rounded text-sm font-bold shadow-sm">1</button>
            <button className="px-3 py-1.5 border border-neutral-200 bg-white hover:bg-neutral-50 rounded text-sm font-bold text-neutral-700">2</button>
            <button className="px-3 py-1.5 border border-neutral-200 bg-white hover:bg-neutral-50 rounded text-sm font-bold text-neutral-700">3</button>
            <button className="px-3 py-1.5 border border-neutral-200 bg-white hover:bg-neutral-50 rounded text-sm font-bold text-neutral-700">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
