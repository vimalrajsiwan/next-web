export default function WhyChooseUsSection() {
  const points = [
    "Proven expertise in .NET, C#, ReactJS, Angular, and Azure.",
    "Client-first approach with measurable outcomes.",
    "Agile, transparent, and collaborative work process.",
    "Full-stack development capabilities across technologies.",
    "Focus on scalability, performance, and security.",
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-900">
        Why Choose <span className="text-blue-700">Vizlyx</span>
      </h2>

      {/* Responsive grid instead of stacked list */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 text-left">
        {points.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300 border border-gray-100 flex items-start gap-3"
          >
            <span className="text-green-600 text-xl">✅</span>
            <p className="text-gray-700">{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
