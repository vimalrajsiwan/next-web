// import SEOHead from "@/component/SEOHead";
// import Head from "next/head";
// import Image from "next/image";

// export default function About() {
//   return (
//     <>
//       <SEOHead
//         title="About Us"
//         description="Learn about Vizlyx — a trusted IT consulting company providing digital transformation, cloud modernization, and custom software solutions for global enterprises."
//         keywords="About Vizlyx, IT consulting, software development company, digital transformation"
//         url="https://vizlyx.com/about"
//       />

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 font-sans">
//         <section className="max-w-3xl mx-auto">
//           <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
//             About vizlyx
//           </h1>
//           <div className="flex flex-col items-center mb-8">
//             <Image
//               src="/images/about.jpg"
//               alt="Vizlyx IT solutions team working on software development"
//               width={180}
//               height={180}
//               className="rounded-xl shadow-lg object-cover mb-4"
//             />
//             <p className="text-lg mb-6 text-gray-800 text-center">
//               vizlyx is dedicated to delivering innovative IT solutions that
//               empower businesses to thrive in the digital era. Our mission is to
//               provide reliable, scalable, and secure technology services
//               tailored to our clients' unique needs.
//             </p>
//           </div>
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-indigo-600 mb-2">
//               Our Mission
//             </h2>
//             <p className="text-gray-700">
//               To drive business success through technology innovation,
//               exceptional service, and trusted partnerships.
//             </p>
//           </div>
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-indigo-600 mb-2">
//               Our Vision
//             </h2>
//             <p className="text-gray-700">
//               To be a global leader in IT services, recognized for our
//               expertise, integrity, and commitment to client growth.
//             </p>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-indigo-600 mb-2">
//               Our Team
//             </h2>
//             <p className="text-gray-700">
//               Our team consists of passionate professionals with deep expertise
//               in software development, cloud, cybersecurity, and digital
//               transformation. We work collaboratively to deliver outstanding
//               results for our clients.
//             </p>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

import SEOHead from "@/component/SEOHead";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Vizlyx | Innovative IT Consulting & Digital Transformation Experts"
        description="Vizlyx empowers businesses worldwide with modern IT consulting, cloud transformation, and custom software development. Learn more about our story, mission, and why companies trust us to shape their digital future."
        keywords="Vizlyx, IT consulting, digital transformation, software development, cloud modernization, IT solutions company, technology consulting firm"
        url="https://vizlyx.com/about"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 font-sans text-gray-800">
        <section className="max-w-5xl mx-auto">
          {/* Header */}
          <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8">
            About <span className="text-blue-600">Vizlyx</span>
          </h1>
          <p className="text-lg text-gray-700 text-center mb-14 leading-relaxed max-w-3xl mx-auto">
            Vizlyx is a next-generation{" "}
            <strong>IT consulting and digital transformation company</strong>
            helping organizations redefine the way they use technology. We
            specialize in
            <strong>
              cloud modernization, enterprise software development, and digital
              innovation
            </strong>
            — turning complex business challenges into intelligent, scalable
            solutions.
          </p>

          {/* Our Story */}
          <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
            <img
              src="/images/about.jpg"
              alt="Vizlyx team collaborating on digital solutions"
              width={400}
              height={300}
              className="rounded-2xl shadow-xl object-cover"
            />
            <div>
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded by passionate technologists and strategists, Vizlyx was
                created with one goal — to make technology more accessible,
                reliable, and result-oriented for businesses of all sizes. What
                began as a small tech initiative has evolved into a global brand
                delivering impactful digital experiences to enterprises across
                industries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we’ve partnered with startups, SMEs, and Fortune
                500 companies to build products that not only solve technical
                problems but drive{" "}
                <strong>
                  growth, scalability, and digital competitiveness
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-700 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is simple — to empower businesses through
              <strong>
                {" "}
                digital innovation, automation, and strategic technology
                transformation
              </strong>
              . We help organizations harness the power of modern IT to enhance
              efficiency, reduce costs, and unlock new revenue opportunities.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-700 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To become a globally recognized name in IT consulting, known for
              building reliable partnerships, transforming businesses, and
              leading the digital revolution through technology that inspires
              trust, creativity, and excellence.
            </p>
          </div>

          {/* Why Choose Vizlyx */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-indigo-700 mb-5">
              Why Clients Choose Vizlyx
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>
                <strong>Proven Expertise:</strong> Experienced professionals
                across web, cloud, and enterprise IT.
              </li>
              <li>
                <strong>End-to-End Services:</strong> From strategy to
                implementation and long-term support.
              </li>
              <li>
                <strong>Tailored Solutions:</strong> We craft technology around
                your specific business needs.
              </li>
              <li>
                <strong>Transparent Communication:</strong> You’ll always know
                what’s happening at every stage.
              </li>
              <li>
                <strong>Global Delivery Model:</strong> Agile, scalable, and
                designed to support international clients.
              </li>
            </ul>
          </div>

          {/* Our Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-indigo-700 mb-5">
              Our Expertise
            </h2>
            <p className="text-gray-700 mb-4">
              We combine cutting-edge technologies with strategic insight to
              deliver solutions that stand the test of time. Our core expertise
              includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Custom software and web application development</li>
              <li>Cloud solutions & DevOps consulting</li>
              <li>Digital transformation and automation</li>
              <li>Cybersecurity and infrastructure management</li>
              <li>Enterprise mobility and system integration</li>
            </ul>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-indigo-700 mb-5">
              Our Core Values
            </h2>
            <p className="text-gray-700 mb-4">
              At Vizlyx, our values define who we are and how we work:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Integrity:</strong> We believe in honesty, transparency,
                and ethical delivery.
              </li>
              <li>
                <strong>Innovation:</strong> Technology is our passion — we
                continuously evolve with it.
              </li>
              <li>
                <strong>Commitment:</strong> Your success is our priority, every
                single time.
              </li>
              <li>
                <strong>Excellence:</strong> We aim to exceed expectations in
                every project we undertake.
              </li>
            </ul>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-indigo-700 mb-5">
              Our Team
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our team is our biggest strength — a blend of creative thinkers,
              engineers, cloud architects, designers, and business strategists.
              We bring together innovation and practicality to create measurable
              business outcomes.
            </p>
            <p className="text-gray-700 mt-3">
              Every member of Vizlyx shares one belief — technology should
              simplify life, not complicate it. That’s the driving force behind
              every line of code, every strategy, and every solution we deliver.
            </p>
          </div>

          {/* Global Presence */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-indigo-700 mb-5">
              Our Global Presence
            </h2>
            <p className="text-gray-700 leading-relaxed">
              With clients across the U.S., Europe, and Asia, Vizlyx operates
              with a truly global mindset. Our digital-first approach allows us
              to deliver projects seamlessly across time zones — ensuring
              consistent communication and on-time delivery, no matter where you
              are.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Let’s build your next digital success story together.
            </h3>

            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
