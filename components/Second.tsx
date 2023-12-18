import React from "react";
import Image from "next/image";

function Second() {
  return (
      <div className="px-4 w-full bg-red1 flex flex-wrap items-center justify-around mx-auto pt-12 pb-24 ">
        <Image
          className="hidden md:block mb-36"
          src="/percent.svg"
          height="20"
          width="30"
          alt=""
        ></Image>
        <div className="lg:text-left text-center lg:border-r-2 border-b-2 pb-5 lg:pb-0 lg:border-b-0 lg:pr-12">
          <p className="text-white text-2xl">Book now to</p>
          <p className="text-white text-6xl font-extrabold">SAVE BIG</p>
          <p className="text-white text-2xl">On Your Next Trip</p>
        </div>
        <div className="lg:text-left text-center lg:mt-0 mt-2">
          <p className="text-white my-2 text-sm pl-2 ">
            Make travel your lifestyle with the Travelxp RED
          </p>
          <p className="text-white mb-5 text-sm pl-2">
            Avail these exclusive discounts and offers with your membership!
          </p>
          <div className="grid lg:mt-0 mt-2">
            <div className="flex overflow-x-scroll no-scrollbar text-left">
              <div className="bg-white rounded-md p-3 mx-2 w-40 flex-shrink-0">
                <Image
                  src="/airplane.svg"
                  height="30"
                  width="25"
                  alt=""
                  className="mb-2"
                ></Image>
                <p className="text-black font-semibold">
                  Upto 30% off on flights
                </p>
                <p className="text-gray-400 font-extralight text-xs">
                  You have saved
                </p>
                <p className="text-gray-400 font-extralight text-xs">
                  till now.
                </p>
              </div>
              <div className="bg-white rounded-md p-3 mx-2 w-40 flex-shrink-0">
                <Image
                  src="/hotel.svg"
                  height="30"
                  width="25"
                  alt=""
                  className="mb-2"
                ></Image>
                <p className="text-black font-semibold">
                  Upto 30% off on hotels
                </p>
                <p className="text-gray-400 font-extralight text-xs">
                  You have saved
                </p>
                <p className="text-gray-400 font-extralight text-xs">
                  till now.
                </p>
              </div>
              <div className="bg-white rounded-md p-3 mx-2 w-40 flex-shrink-0">
                <Image
                  src="/holiday.svg"
                  height="30"
                  width="25"
                  alt=""
                  className="mb-2"
                ></Image>
                <p className="text-black font-semibold">
                  Upto 30% off on holidays
                </p>
                <p className="text-gray-400 text-xs">You have saved</p>
                <p className="text-gray-400 text-xs">till now.</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="hidden md:block mt-48"
          src="/percent.svg"
          height="40"
          width="80"
          alt=""
        ></Image>
      </div>
  );
}

export default Second;
