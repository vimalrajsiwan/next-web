export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 font-sans">
      <section className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">Contact VizLix</h1>
  <p className="mb-6 text-lg text-center">We'd love to hear from you! Fill out the form below or reach us directly at <a href="mailto:info@vizlix.com" className="text-indigo-700 hover:underline">info@vizlix.com</a>.</p>
        <form className="grid gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
          <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
          <textarea placeholder="Your Message" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" rows={4} required></textarea>
          <button type="submit" className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded shadow hover:bg-indigo-700 transition">Send Message</button>
        </form>
        <div className="mt-8 text-gray-700 text-center">
          <p>Email: <a href="mailto:info@vizlix.com" className="text-indigo-700 hover:underline">info@vizlix.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-indigo-700 hover:underline">+1 234 567 890</a></p>
        </div>
      </section>
    </div>
  );
}
