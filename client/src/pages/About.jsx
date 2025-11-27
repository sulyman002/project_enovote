import React, { useState, useEffect } from "react";
import video1 from "../assets/video1.png";
import video2 from "../assets/video2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { principles } from "../data/data";
import * as Icons from "lucide-react";

const About = () => {
  const images = [video1, video2];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const next = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="w-full flex flex-col gap-20 px-5">
      {/* SECTION 1 */}
      <section className="text-center md:px-6 flex flex-col gap-6 max-w-5xl mx-auto container mt-24">
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl md:tex-4xl font-600 font-bold text-center text-gray-900">
            Democracy, Wherever, <br />
            Whenever, Digitized
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            E-Vote is a secure, transparent and accessible online voting
            platform designed to empower every voice, kick out political apathy
            and build a future for democratic participation.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative w-full overflow-hidden rounded-xl mt-6">
          <img
            src={images[index]}
            alt="slide"
            className="w-full h-64 object-cover transition-all duration-700"
          />

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 -translate-y-1/2 border border-gray-500 p-2 rounded-full shadow-md bg-white/20 hover:bg-white/50 cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 border border-gray-500 p-2 rounded-full shadow-md bg-white/20 hover:bg-white/50 cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      <div className="w-full bg-gray-50">
        {/* SECTION 2 */}
        <section className=" py-20 px-6 text-center container mx-auto">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold">
              Our core Principles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto ">
              Committed to upholding the highest standard to ensure every vote
              is secure, with a transparent process and voter empowerment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {principles.map((principle, index) => {
              const Icon = Icons[principle.icon];
              return (
                <div
                  key={index}
                  className="p-6 flex flex-col items-center gap-3 bg-[#F5F6FA] rounded-xl shadow"
                >
                  {Icon && <Icon size={22} className="text-[#0B72CC]" />}

                  <h3 className="font-bold text-gray-500">{principle.title}</h3>
                  <p className="text-sm text-gray-600">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="text-center py-14 px-6 max-w-4xl mx-auto pb-20">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Vision for the Future
          </h2>
          <p className="text-gray-600 mt-4">
            The long term vision is to encourage a more engaged global citizen
            by getting rid of obstacles to voting. Aimed to increase voter
            participation, strengthen democratic institutions and use technology
            to bridge the gap.
          </p>
        </section>

        {/* SECTION 4 */}
        <section className="py-16 max-w-5xl mx-auto container">
          <div className="bg-[#0B72CC] gap-6 rounded-xl p-10 flex flex-col items-center justify-center text-white">
            <p className="text-xl md:text-3xl font-bold font-600 text-center">
              Ready to shape the future of voting?
            </p>
            <p className="text-sm md:text-base text-center">
              Discover how our platform works or get in touch to learn <br />{" "}
              more about implementing E-vote for your next election
            </p>

            <div className="flex items-center gap-4">
              <button className="cursor-pointer font-semibold text-base bg-white shadow text-gray-900 px-5 py-2 rounded-lg duration-300">
                Contact Us
              </button>
              <button className="cursor-pointer font-semibold text-base  bg-[#2150BE] shadow text-white px-5 py-2 rounded-lg duration-300">
               Explore features
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
