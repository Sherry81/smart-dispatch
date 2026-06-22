import { Feature } from "@/types/feature";

export default function FeatureCard({ title, description }: Feature) {
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-teal-200 transition-all duration-300">

      <div className="w-10 h-1 bg-teal-500 rounded mb-4 group-hover:w-14 transition-all" />

      <h3 className="font-semibold text-lg text-slate-900 mb-2">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed text-sm">
        {description}
      </p>

      <p className="text-teal-600 text-xs mt-4 opacity-0 group-hover:opacity-100 transition">
        Learn more →
      </p>
    </div>
  );
}