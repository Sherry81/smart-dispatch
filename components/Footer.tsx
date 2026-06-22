export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between">

          <p>© 2026 Smart Dispatch</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-300 transition">Features</a>
            <a href="#" className="hover:text-teal-300 transition">Privacy</a>
            <a href="#" className="hover:text-teal-300 transition">Contact</a>
          </div>

        </div>
      </div>
    </footer>
  );
}