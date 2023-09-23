import React from "react";

const notFound = () => {
  return (
    <div className="w-full h-full flex mt-2">
      {/* black box */}
      <div className="bg-black w-[50vw] h-[90vh] text-white flex flex-col justify-center items-center px-8">
        <p className="text-[100px]">404</p>
        <div className="text-center">
          <p className="text-5xl text-yellow-400">Sorry</p>
          <p className="mt-2 text-lg text-yellow-400">
            Either you aren't cool enough to visit this page or it doesn't
            exist.
          </p>
        </div>
      </div>
      {/* white box */}
      <div className="bg-white w-[50vw] h-[90vh] flex flex-col items-center justify-center">
        <p className="mb-14 ">Here's a joke for you...</p>

        <p className="text-2xl text-center p-4">
          Why don't scientists trust atoms? Because they make up everything!
        </p>
        <a href="/">
          <button className="mt-4 w-40 bg-emerald-400 h-10 rounded-md">
            You can go now!
          </button>
        </a>
      </div>
    </div>
  );
};

export default notFound;
