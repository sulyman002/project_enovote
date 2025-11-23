import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full">
      {/* NAVBAR - stays fixed on scroll */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="w-full h-screen bg-gray-50 flex items-center">
        <div className="w-full flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl font-bold mb-4">Simple and Secure Online Voting</h1>
          <p className="text-gray-600 max-w-xl mb-6">
            Cast your vote with confidence, from anywhere. Transparency and security ensured.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg">Get Started</button>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="container mx-auto py-20">
        <h2 className="text-2xl font-bold text-center mb-4">All You Need for a Seamless Voting Experience</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          E-vote is built for transparency, security, and ease of use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold mb-2">Register to vote</h3>
            <p className="text-gray-600 text-sm">Easy and quick registration for upcoming elections.</p>
          </div>
          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold mb-2">Verify Identity</h3>
            <p className="text-gray-600 text-sm">Your data is secured and verified with strong ID checks.</p>
          </div>
          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold mb-2">Cast Your Vote</h3>
            <p className="text-gray-600 text-sm">Ensure your vote is counted and secure.</p>
          </div>
          <div className="p-6 shadow rounded-lg">
            <h3 className="font-semibold mb-2">Track Result</h3>
            <p className="text-gray-600 text-sm">Follow your vote status and result process.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="container mx-auto py-20">
        <h2 className="text-2xl font-bold text-center mb-6">3 Easy Steps to Get You Going!</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Simple and direct process for ease of use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">1</div>
            <h3 className="font-semibold mb-2">Register and Verify</h3>
            <p className="text-gray-600 text-sm">Complete registration through the secure portal.</p>
          </div>

          <div>
            <div className="text-3xl font-bold mb-2">2</div>
            <h3 className="font-semibold mb-2">Receive your Ballot</h3>
            <p className="text-gray-600 text-sm">Once verified, you'll receive a digital ballot.</p>
          </div>

          <div>
            <div className="text-3xl font-bold mb-2">3</div>
            <h3 className="font-semibold mb-2">Vote & Confirm</h3>
            <p className="text-gray-600 text-sm">Cast your vote securely and confirm submission.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
