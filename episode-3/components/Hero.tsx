import React from "react";

const Hero = () => {
  return (
    <div className="my-40 w-full flex flex-col justify-center items-center">
      <h1 className="max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-500  bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className=" max-w-3xl text-xl mx-auto mt-10 text-neutral-300 selection:bg-white">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>
      <div className="flex justify-center mt-8">
   <button className=" relative rounded-xl px-4 py-2 text-neutral-400 border border-neutral-700 cursor-pointer">Join the Waitlist</button>
      </div>
    </div>
  );
};

export default Hero;
