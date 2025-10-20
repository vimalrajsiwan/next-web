
"use client";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Only render mobile menu here. Desktop menu is in layout.tsx */}
      <button
        className="md:hidden flex items-center px-2 py-1 border rounded text-indigo-700 border-indigo-200 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      {open && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg flex flex-col gap-4 p-6 z-50 md:hidden animate-fade-in">
          <a href="/" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setOpen(false)}>Home</a>
          <a href="/services" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setOpen(false)}>Services</a>
          <a href="/about" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setOpen(false)}>About</a>
          <a href="/contact" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
}
