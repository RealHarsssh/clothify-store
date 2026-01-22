export default function Hero() {
  return (
    <section className="bg-gray-100 flex flex-col md:flex-row items-center justify-between px-8 py-16 rounded-3xl shadow-lg mb-12">
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-6 leading-tight">
          Elevate Style,<br />Embrace Story
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-lg">
          We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours.
        </p>
        <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-gray-700 transition">
          Explore <span>→</span>
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80"
          alt="Hero Model"
          className="rounded-3xl w-80 h-auto object-cover shadow-xl"
        />
      </div>
    </section>
  );
}