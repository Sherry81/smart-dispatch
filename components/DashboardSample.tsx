export default function DashboardSample() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
      
        <div className="grid grid-cols-3 gap-4 mb-5">

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-4 text-white shadow-sm">
            <p className="text-xs text-teal-100">Active Jobs</p>
            <p className="text-2xl font-bold">128</p>
            <p className="text-xs text-teal-100 mt-1">+12% this week</p>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-4 text-white shadow-sm">
            <p className="text-xs text-teal-100">Drivers</p>
            <p className="text-2xl font-bold">96</p>
            <p className="text-xs text-teal-100 mt-1">8 available now</p>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-4 text-white shadow-sm">
            <p className="text-xs text-teal-100">On-Time Rate</p>
            <p className="text-2xl font-bold">98%</p>
            <p className="text-xs text-teal-100 mt-1">+2% improved</p>
        </div>

        </div>

        <div className="relative h-56 rounded-xl border border-slate-200 overflow-hidden bg-white">
            <img
                src="/map-preview.jpg"
                alt="Map"
                className="absolute inset-0 w-full h-full object-cover z-0"
            /></div>
        </div>

  );
}