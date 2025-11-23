import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">E-VOTE</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-green-600">Home</li>
          <li className="cursor-pointer hover:text-green-600">Dashboard</li>
          <li className="cursor-pointer hover:text-green-600">Education Hub</li>
          <li className="cursor-pointer hover:text-green-600">About</li>
          <li className="cursor-pointer hover:text-green-600">Verify</li>
        </ul>

        {/* Register Button */}
        <button className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-lg">
          Register
        </button>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow px-6 py-4 animate-slideDown">
          <ul className="flex flex-col gap-4 font-medium">
            <li className="cursor-pointer hover:text-green-600">Home</li>
            <li className="cursor-pointer hover:text-green-600">Dashboard</li>
            <li className="cursor-pointer hover:text-green-600">Education Hub</li>
            <li className="cursor-pointer hover:text-green-600">About</li>
            <li className="cursor-pointer hover:text-green-600">Verify</li>
          </ul>

          <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg">
            Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/* Optional small animation */
/* Add this to your global CSS if using Tailwind + custom animations */
// @keyframes slideDown {
//   from { opacity: 0; transform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-slideDown { animation: slideDown 0.25s ease-out; }
