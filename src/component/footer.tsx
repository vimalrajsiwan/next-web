//"use client";

export default function Footer() {
  return (
    <>
      <footer className="w-full py-6 bg-black text-white text-center">
        &copy; {new Date().getFullYear()} vizlyx. All rights reserved.
      </footer>
    </>
  );
}
