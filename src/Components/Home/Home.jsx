import React from "react";
import Banner from "../Banner/Banner";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full ">
      {/* Hero / Banner */}
      <Banner />

      {/* Call to Action Section */}
      <section className="bg-black text-white py-20 px-4 mt-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-purple-500">
            📞 Call to Action
          </h1>

          <p className="text-lg md:text-xl text-gray-300">
            Ready to transform your body and lifestyle?
          </p>

          <p className="text-gray-400">
            Join{" "}
            <span className="text-purple-400 font-semibold">PowerFlex Gym</span>{" "}
            today and start your fitness journey with confidence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://wa.me/8801712345678?text=Hi%20PowerFlex%20Gym!%20I%20want%20to%20join.",
                  "_blank"
                )
              }
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300 rounded-lg font-semibold shadow-lg"
            >
              Join Now
            </button>

            <button
              type="button"
              onClick={() => navigate("/packages")}
              className="px-8 py-3 border border-purple-600 hover:bg-purple-600 hover:scale-105 transition-all duration-300 rounded-lg font-semibold"
            >
              View Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
