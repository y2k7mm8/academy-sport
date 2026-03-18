import { Settings, Award, Calendar as CalendarIcon, FileText, ChevronRight, User } from "lucide-react";

export function UserProfile() {
  return (
    <div className="max-w-[1440px] mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-black text-neutral-900 tracking-tight uppercase">My Profile</h1>
          <p className="text-sm text-neutral-500 font-medium mt-1">Manage your account and view activities</p>
        </div>
        <button className="px-4 py-2 bg-white border border-neutral-200 text-sm font-bold uppercase tracking-wider text-neutral-700 hover:bg-neutral-50 rounded shadow-sm transition-colors flex items-center gap-2">
          <Settings className="w-4 h-4" /> Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: User Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-neutral-100 border-4 border-white shadow-lg overflow-hidden mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1606335544053-c43609e6155d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdGhsZXRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNzQ3OTE0fDA&ixlib=rb-4.1.0&q=80&w=256" 
                  alt="Admin User" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-black text-neutral-900 tracking-tight mb-1">Admin User</h2>
              <div className="text-sm font-bold text-[#D50000] uppercase tracking-widest mb-4">System Administrator</div>
              
              <div className="w-full flex justify-center gap-2 mb-6">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest rounded-full">Active</span>
                <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-widest rounded-full">Staff</span>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-neutral-100">
              <div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Email</div>
                <div className="text-sm font-medium text-neutral-900">admin@sports.gov.kg</div>
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Phone</div>
                <div className="text-sm font-medium text-neutral-900">+996 555 123 456</div>
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Department</div>
                <div className="text-sm font-medium text-neutral-900">IT & Operations</div>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
            <h3 className="font-black text-neutral-900 uppercase tracking-wide mb-4 text-sm">My Activity</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-500 font-medium">System Logins</span>
                <span className="text-sm font-bold text-neutral-900">342</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-500 font-medium">Reports Generated</span>
                <span className="text-sm font-bold text-neutral-900">48</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-500 font-medium">Last Login</span>
                <span className="text-sm font-bold text-neutral-900">Today, 09:41</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Events */}
          <div className="bg-white rounded-xl border border-neutral-200 p-0 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/50">
              <h3 className="font-black text-neutral-900 uppercase tracking-wide flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-[#D50000]" /> My Schedule
              </h3>
              <button className="text-xs font-bold text-[#D50000] hover:text-red-700 uppercase tracking-wider">View Calendar</button>
            </div>
            <div className="divide-y divide-neutral-100">
              {[
                { title: "Weekly Staff Meeting", time: "10:00 AM - 11:30 AM", date: "Today", type: "Internal" },
                { title: "Athletes System Review", time: "14:00 PM - 15:00 PM", date: "Tomorrow", type: "Review" },
                { title: "Platform Update Deployment", time: "22:00 PM - 23:00 PM", date: "Friday", type: "Technical" }
              ].map((event, i) => (
                <div key={i} className="p-4 sm:p-6 hover:bg-neutral-50/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-neutral-500 uppercase">{event.date === 'Today' ? 'TODAY' : event.date === 'Tomorrow' ? 'TMRW' : 'FRI'}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 mb-1">{event.title}</h4>
                      <p className="text-xs text-neutral-500 font-medium flex items-center gap-1">
                        <CalendarIcon className="w-3 h-3" /> {event.time}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex px-2.5 py-1 bg-neutral-100 text-neutral-600 text-[10px] font-bold uppercase tracking-widest rounded self-start sm:self-auto">
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Documents */}
          <div className="bg-white rounded-xl border border-neutral-200 p-0 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/50">
              <h3 className="font-black text-neutral-900 uppercase tracking-wide flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#D50000]" /> Recent Documents
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 hover:border-[#D50000] hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-red-50 text-[#D50000] rounded-lg group-hover:bg-[#D50000] group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-neutral-900 truncate">Q3_Performance_Report.pdf</h4>
                    <p className="text-xs text-neutral-500 font-medium mt-0.5">2.4 MB • Updated 2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
