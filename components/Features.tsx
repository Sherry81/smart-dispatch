import { Feature } from "@/types/feature";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const features: Feature[] = [
    {
      title: "Automated Assignment",
      description:
        "Assign jobs instantly to available drivers.",
    },
    {
      title: "Route Optimization",
      description:
        "Save fuel and improve efficiency.",
    },
    {
      title: "Real-Time Visibility",
      description:
        "Track operations from one dashboard.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">

            <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900">
                Everything your field team needs
            </h2>

            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                Buildstone Smart Dispatch brings automation, visibility, and control
                to construction operations in real time.
            </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
            ))}
            </div>

        </div>
    </section>
  );
}