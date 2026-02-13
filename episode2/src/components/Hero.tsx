import React from "react";

const Hero = () => {
  return (
    <div className="px-4 py-2 flex items-center flex-col justify-center">
      <button className="border px-4 py-2 rounded-full border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200 transition  cursor-pointer duration-200">
        Delaware franchise taxes are due by March 1
      </button>

      <div>
        <h1 className="font-bold mt-10 text-7xl text-black tracking-tighter text-center">
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-center mt-4 text-neutral-700">
          Automated bookkeeping. Effortless tax filing. Financial clarity.{" "}
          <br />
          Set up in 10 mins. Back to building by 10:36pm.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-10">
        <button className="bg-blue-500 cursor-pointer hover:bg-blue-700 font-medium text-xl text-white rounded-lg py-2 px-4 shadow-lg text-shadow-md tracking-wide">
          Get Started{" "}
        </button>
        <button className="cusror-pointer font-medium text-xl text-black rounded-lg py-2 px-4  text-shadow-md tracking-wide">
          Pricing &rarr;
        </button>
      </div>
    </div>
  );
};

export default Hero;
