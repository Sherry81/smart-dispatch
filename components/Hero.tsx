import DashboardSample from "./DashboardSample";

export default function Hero() {
  return (
    <section className="bg-gradient-to-l from-teal-700 to-teal-900 text-white">
      <div className="container mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-5xl font-bold mb-6">
              Dispatch Smarter,
              Deliver Faster
            </h2>

            <p className="text-lg mb-8">
              Smart Dispatch automatically assigns
              jobs, optimizes routes and improves
              fleet efficiency.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-teal-700 px-6 py-3 rounded-lg font-medium">
                Book Demo
              </button>

              <button className="border border-white text-white px-6 py-3 rounded-lg">
                Learn More
              </button>
            </div>
          </div>

          <DashboardSample />
        </div>
      </div>
    </section>
  );
}