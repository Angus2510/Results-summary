import React from "react";

const Results = () => {
  return (
    <div className="flex rounded-3xl bg-white mt-10 shadow-lg">
      <div className=" flex justify-center flex-col items-center bg-gradient-to-t from-blue-700 to-blue-500 rounded-3xl p-8 w-96">
        <h1 className="text-gray-400 font-semibold pb-6">Your Results</h1>
        <div className=" rounded-full bg-gradient-to-b from-blue-800 to-blue-600 p-8 flex flex-col">
          <span className="text-white text-4xl font-semibold pb-2">82</span>
          <span className="text-gray-400">of 100</span>
        </div>
        <h1 className="text-white text-xl mb-2">Great</h1>
        <p className="text-gray-400 text-center">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div className="w-96 mt-10 ml-6">
        <h1 className="font-semibold mb-4">Summary</h1>
        <div className="bg-red-100 flex justify-between mb-4  rounded-xl py-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="#F55"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
            />
          </svg>
          <h6 className="text-red-400">Reaction</h6>
          <span>
            <strong>80</strong>/100
          </span>
        </div>
        <div className="flex justify-between bg-yellow-50 mb-4 rounded-xl py-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="#FFB21E"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
            />
            <path
              stroke="#FFB21E"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
            />
            <path
              stroke="#FFB21E"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
            />
          </svg>
          <h6 className="text-yellow-400">Memory</h6>
          <span>
            <strong>80</strong>/100
          </span>
        </div>
        <div className="flex justify-between mb-4 bg-green-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="#00BB8F"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
            />
          </svg>
          <h6 className="text-green-400">Verbal</h6>
          <span>
            <strong>80</strong>/100
          </span>
        </div>
        <div className="flex justify-between bg-blue-50 mb-4 rounded-xl py-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="#1125D6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
            />
            <path
              stroke="#1125D6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
            />
          </svg>
          <h6 className="text-blue-500">Visual</h6>

          <span>
            <strong>80</strong>/100
          </span>
        </div>
        <button className="bg-blue-950 text-white p-4 rounded-3xl px-16">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Results;
