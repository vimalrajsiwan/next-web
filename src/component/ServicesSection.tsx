// //"use client";

// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Web Development",
//     description:
//       "Build responsive, high-performance websites and enterprise-grade web apps using ReactJS, Angular, and .NET Core.",
//   },
//   {
//     title: "Software Development",
//     description:
//       "Custom software solutions using C#, Java, and modern frameworks — automating workflows and driving efficiency.",
//   },
//   {
//     title: "Cloud Solutions",
//     description:
//       "Azure-powered cloud infrastructure, migration, and DevOps setup to make your business scalable and secure.",
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "Designing and developing intuitive cross-platform apps that deliver seamless user experiences.",
//   },
//   {
//     title: "IT Consulting & Support",
//     description:
//       "Strategic guidance for digital transformation, infrastructure optimization, and technology modernization.",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-20 text-center">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl font-bold text-gray-900 mb-12"
//       >
//         Our Services
//       </motion.h2>
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
//         {services.map((s, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
//           >
//             <h3 className="text-2xl font-semibold text-blue-700 mb-3">
//               {s.title}
//             </h3>
//             <p className="text-gray-600">{s.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Build responsive, high-performance websites and enterprise-grade web apps using ReactJS, Angular, and .NET Core.",
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions using C#, Java, and modern frameworks — automating workflows and driving efficiency.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Azure-powered cloud infrastructure, migration, and DevOps setup to make your business scalable and secure.",
    },
    {
      title: "Mobile App Development",
      description:
        "Designing and developing intuitive cross-platform apps that deliver seamless user experiences.",
    },
    {
      title: "IT Consulting & Support",
      description:
        "Strategic guidance for digital transformation, infrastructure optimization, and technology modernization.",
    },
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              {s.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
