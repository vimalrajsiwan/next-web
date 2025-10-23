"use client";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <footer className="w-full py-6 bg-black text-white text-center">
        &copy; {new Date().getFullYear()} vizlyx. All rights reserved.
      </footer>
    </>
  );
}
