import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import heroBg from "../assets/heroBg.png";
import { process, transparency } from "../data/data.js";
import { useNavigate } from "react-router-dom";
import * as Icons from "lucide-react";

import { useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer.jsx";
import trust from "../assets/trust.png";

const Home = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrow = arrowRef.current;

    gsap.set(arrow, { autoAlpha: 0, x: -10 });

    const handleMouseOver = () => {
      gsap.to(arrow, {
        autoAlpha: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseOut = () => {
      gsap.to(arrow, {
        autoAlpha: 0,
        x: -10,
        duration: 0.4,
        ease: "power2.in",
      });
    };

    const btn = buttonRef.current;

    if (btn) {
      btn.addEventListener("mouseenter", handleMouseOver);
      btn.addEventListener("mouseleave", handleMouseOut);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("mouseenter", handleMouseOver);
        btn.removeEventListener("mouseleave", handleMouseOut);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "190%" }}
        className="w-full h-screen bg-[#f4ebda] bg-no-repeat bg-center flex items-center"
      >
        <div className="w-full flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl font-bold mb-4">
            Simple and Secure Online Voting
          </h1>
          <p className="text-gray-600 max-w-xl mb-6 ">
            Cast Your vote with confidence, from anywhere within the country,
            makes participation easy, transparent and secure. Your vote, Your
            voice.
          </p>
          <button
          onClick={() => navigate("/app/dashboard")}
            ref={buttonRef}
            className="flex items-center rounded-lg cursor-pointer text-base text-gray-900 "
          >
            <p className="cursor-pointer uppercase border border-gray-700/50 px-6 py-3 font-semibold rounded-md bg-[#39FF14B2]">
              Get Started
            </p>
            <div
              ref={arrowRef}
              className="flex border-y h-full px-1.5 py-3 items-center border-r border-gray-700/50 rounded-r-lg "
            >
              <ArrowRight size={18} />
            </div>
          </button>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="container mx-auto py-30">
        <h2 className="text-2xl font-bold text-center mb-4">
          All You Need for a Seamless Voting Experience
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          E-vote is built for transparency, security, and ease of use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 mx-5 md:mx-0">
          {transparency.map((item) => {
            const IconComponent = Icons[item?.icon];
            return (
              <div
                key={item?.id}
                className="p-6  rounded-lg bg-[#F5F6FA] flex flex-col gap-3"
              >
                {IconComponent && (
                  <IconComponent size={22} className="text-[#0B72CC]" />
                )}
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold ">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="container mx-auto py-30 flex flex-col gap-12">
        <h2 className="text-2xl font-bold text-center">
          3 Easy Steps to Get You Going!
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto ">
          Simple and direct process for ease of use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {process.map((item, index) => (
            <div key={index}>
              <div className="w-full flex items-center justify-center">
                <p className="text-3xl text-white font-bold mb-2 h-12 w-12 flex items-center justify-center rounded-full bg-[#0B72CC]">
                  {index + 1}
                </p>
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* SECTION 4 */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div className="w-full">
            <img
              src={trust}
              alt="Security Illustration"
              className="rounded-lg w-full object-cover shadow"
            />
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
              Security and Transparency You Can Trust
            </h2>

            <p className="text-gray-600 mb-6">
              Your vote security prioritized with the use of state of the art
              technology to ensure security and integrity in Elections.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-lg">
                  Voter Privacy Commitment
                </h3>
                <p className="text-gray-500 text-sm">
                  Some lorem ipsum dolor sit amet, consectetur adipiscing and
                  more lorem ipsum to follow
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">End to End encryption</h3>
                <p className="text-gray-500 text-sm">
                  Some lorem ipsum dolor sit amet, consectetur adipiscing and
                  more lorem ipsum to follow
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Real time status information
                </h3>
                <p className="text-gray-500 text-sm">
                  Some lorem ipsum dolor sit amet, consectetur adipiscing and
                  more lorem ipsum to follow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
    </div>
  );
};

export default Home;
