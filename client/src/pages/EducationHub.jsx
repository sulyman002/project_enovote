import React, { useState } from "react";
import { tabs } from "../data/data";
import edu from "../assets/edu.png";
import { faqs } from "../data/data";
import { MessageSquare, Minus, Plus } from "lucide-react";
import faq from "../assets/faq.png";
import video1 from "../assets/video1.png";
import video2 from "../assets/video2.png";

const EducationHub = () => {
  const [step, setStep] = useState("secure");
  const [openIndex, setOpenIndex] = useState(0);
  const active = tabs.find((t) => t.key === step);
  if (!active) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-20 ">
      {/* Section 1 */}
      <div className="w-full bg-gray-100 ">
        <section className="flex min-h-screen flex-col mx-auto container py-16  md:flex-row gap-10 items-center px-6 md:px-20">
          <div className="flex-1 space-y-3">
            <h1 className="md:text-4xl text-3xl font-bold">
              A GUIDE TO SECURE <br /> ONLINE VOTING
            </h1>
            <p className="text-gray-600">
              Learn all there is to know about the online voting and gain full
              confidence in the platform.
            </p>
          </div>
          <div className="flex-1 w-full h-100 bg-gray-300 rounded-xl overflow-hidden">
            <img src={edu} alt="guide" className="w-full h-full object-cover" />
          </div>
        </section>
      </div>

      {/* Section 2 */}
      <section className="px-6 md:px-20 flex flex-col py-16 gap-6 mx-auto container">
        <h2 className="text-xl font-semibold">
          HOW IT WORKS : STEP BY STEP GUIDE
        </h2>

        <div className="flex gap-4 bg-[#D1CECE] rounded-md p-2 w-full md:w-max">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setStep(tab.key)}
              className={`cursor-pointer px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                ${
                  step === tab.key
                    ? "bg-white shadow text-green-600"
                    : "text-gray-600"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {active.content.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-[#EBE6E6E5] rounded-xl flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700">{item.instruction}</p>
              <p className="text-gray-700">{item.required}</p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>{item.details}</li>
              </ul>
            </div>
            <div className="w-full md:w-100 h-40 md:h-80 bg-gray-300 rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Section 3 */}
      <div className="w-full bg-gray-100 py-20">
        <section className="px-6 md:px-20 flex flex-col gap-4 mx-auto container">
          <h2 className="text-xl font-semibold">Transparency and Security</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full flex flex-col gap-3 font-500 font-medium text-gray-600 h-80 rounded-xl overflow-hdden">
              <img
                src={video1}
                alt="transparency"
                className="w-full h-full object-cover rounded-xl"
              />
              <p className="">How we Protect Your Vote</p>
            </div>
            <div className="w-full flex flex-col gap-3 font-500 font-medium text-gray-600 h-80 rounded-xl overflow-hdden">
              <img
                src={video2}
                alt="security"
                className="w-full h-full object-cover rounded-xl"
              />
              <p className="">The Transparent Process</p>
            </div>
          </div>
        </section>
      </div>

      {/* Section 4 */}
      <div className="w-full bg-[#D9D9D999] my-16">
        <section className="w-full px-6 md:px-20 py-10 flex flex-col md:flex-row gap-10 items-start mx-auto container">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl text-gray-900 font-semibold">
              Frequently Asked Questions (FAQ)
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="bg-[#D9D9D9] rounded-lg p-4 cursor-pointer transition"
                  >
                    <div
                      className="flex justify-between items-center"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-[16px] text-gray-900 font-medium">
                        {faq.question}
                      </h3>

                      {isOpen ? (
                        <Minus className="text-gray-900" size={20} />
                      ) : (
                        <Plus className="text-gray-900" size={20} />
                      )}
                    </div>

                    {/* Answer Section */}
                    {isOpen && (
                      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Help Button */}
            <button className="flex items-center gap-2 bg-[#39FF14B2] text-gray-900 shadow-md px-4 py-2 rounded-full font-500 font-medium text-base cursor-pointer">
              <div className="flex items-center gap-2">
                {" "}
                <MessageSquare size={16} /> <span>Need Help?</span>
              </div>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full h-72 md:h-96 rounded-xl overflow-hidden shadow">
            <img
              src={faq}
              alt="faq"
              className="w-full h-full object-cover object-bottom-left"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationHub;
