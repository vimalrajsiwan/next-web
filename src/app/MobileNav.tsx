"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Close menu when a link is clicked
  const handleLinkClick = () => setOpen(false);

  return (
    <>
      {/* Button */}
      <button
        ref={buttonRef}
        className="md:hidden flex items-center px-2 py-1 border rounded text-indigo-700 border-indigo-200 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
        <svg
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Menu */}
      {open && (
        <div
          ref={menuRef}
          className="absolute top-16 right-4 bg-white shadow-lg rounded-lg flex flex-col gap-4 p-6 z-50 md:hidden animate-fade-in"
        >
          <Link href="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/services" onClick={handleLinkClick}>
            Services
          </Link>
          <Link href="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/portfolio" onClick={handleLinkClick}>
            Portfolio
          </Link>
          <Link href="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
