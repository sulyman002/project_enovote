import React from "react";
import logo from "../assets/evoteLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 mt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-10">
        {/* LOGO + TEXT */}
        <div>
          <img src={logo} alt="evote-logo" className="w-35 md:w-40" />
          <p className="text-gray-600 text-sm mt-2">
            Making your vote count anywhere, anytime
          </p>
        </div>

        {/* PLATFORM */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Platform</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Features</li>
            <li>Security</li>
            <li>Login</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
