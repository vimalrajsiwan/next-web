"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({
    message: "",
    type: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ email?: string; mobile?: string }>({});

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 4000);
  };

  const validateField = (field: string, value: string) => {
    const newErrors: any = { ...errors };

    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        newErrors.email = "Email is required.";
      } else if (!emailRegex.test(value)) {
        newErrors.email = "Please enter a valid email address.";
      } else {
        delete newErrors.email;
      }
    }

    if (field === "mobile") {
      if (value && (value.length !== 10 || isNaN(Number(value)))) {
        newErrors.mobile = "Please enter a valid 10-digit mobile number.";
      } else {
        delete newErrors.mobile;
      }
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: { email?: string; mobile?: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    const mobile = formData.mobile.trim();
    if (mobile.length !== 10 || isNaN(Number(mobile))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      showToast("Your message has been sent successfully!", "success");
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setErrors({});
    } else {
      showToast("Something went wrong. Please try again.", "error");
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.message && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-all duration-500 ease-in-out transform ${
            toast.type === "success"
              ? "bg-green-600 animate-slideIn"
              : "bg-red-600 animate-slideIn"
          }`}
        >
          <span className="text-lg">
            {toast.type === "success" ? "✔️" : "❌"}
          </span>
          <span>{toast.message}</span>
        </div>
      )}

      {/* Toast animation */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        .animate-slideIn {
          animation: slideIn 4s ease forwards;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 font-sans">
        <section className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
            Contact Vizlyx
          </h1>
          <p className="text-lg text-gray-700">
            We'd love to hear from you! Fill out the form below or reach us
            directly at{" "}
            <a
              href="mailto:info@vizlyx.com"
              className="text-indigo-700 font-semibold hover:underline"
            >
              info@vizlyx.com
            </a>
            .
          </p>
        </section>

        <section className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div>
              <label className="block font-semibold mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={(e) => validateField("email", e.target.value)}
                placeholder="Your Email"
                className={`w-full p-3 rounded border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                required
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Mobile
                <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={(e) => validateField("mobile", e.target.value)}
                placeholder="Your Mobile Number"
                className={`w-full p-3 rounded border ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                required
                maxLength={10}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /\D/g,
                    ""
                  );
                }}
              />
              {errors.mobile && (
                <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded shadow hover:bg-indigo-700 transition disabled:opacity-70 flex justify-center items-center"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          <div className="mt-8 text-gray-700 text-center">
            <p>
              Email:{" "}
              <a
                href="mailto:info@vizlyx.com"
                className="text-indigo-700 hover:underline"
              >
                info@vizlyx.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+91-8851626273"
                className="text-indigo-700 hover:underline"
              >
                +91 885 162 6273
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
