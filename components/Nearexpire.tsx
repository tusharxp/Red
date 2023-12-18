import React from "react";
import Image from "next/image";

function Nearexpire() {
  return (
      <div className="bg-red1 px-4 w-full flex flex-wrap items-center justify-items-center justify-around mx-auto pt-12 pb-10 ">
        <Image
          className="hidden md:block mb-80"
          src="/percent.svg"
          height="20"
          width="30"
          alt=""
        ></Image>
        <div className=" lg:text-left text-center lg:border-r-2 pr-12">
          <p className="text-white text-2xl ">Expires in</p>
          <p className="text-white text-6xl font-extrabold">45 DAYS </p>
          <div className="hidden md:block">
            <div className="flex justify-around items-center m-2 rounded-md h-20 bg-white border-white border-1 bg-opacity-25 p-3 md:w-auto ">
              <div>
                <p className="text-white pr-3 text-sm">
                  You have saved a <br /> total of
                </p>
              </div>
              <p className="text-white font-extrabold text-xl">Rs. 2450</p>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden justify-around w-full h-20 items-center m-2 rounded-md bg-white border-white border-1 bg-opacity-25 p-3 md:w-auto ">
          <div>
            <p className="text-white pr-3 text-sm">
              You have saved a <br /> total of
            </p>
          </div>
          <p className="text-white font-extrabold text-xl">Rs. 2450</p>
        </div>

        <div>
          <div className="flex text-center">
            <div className="m-1">
              <p className="text-white pl-2 ">
                You Saved <br />
                <span className=" text-4xl font-extrabold pl-2">60%</span>
              </p>
            </div>
            <div className="ml-4">
              <p className="text-white pt-5">
                Lower compared to an average <br /> RED user.
              </p>
            </div>
          </div>

          <div className="grid">
            <div className="flex overflow-x-scroll no-scrollbar">
              <div className="bg-white rounded-md p-3 mt-3 mx-2 w-40 font-extralight text-xs flex-shrink-0">
                <Image
                  src="/airplane.svg"
                  height="30"
                  width="25"
                  alt=""
                  className="mb-2"
                ></Image>
                <p className="text-black text-base font-semibold">
                  Upto 30% off on flights
                </p>
                <p className="text-gray-400 font-extralight text-xs">
                  You have saved
                </p>
                <p className="text-gray-400 font-extralight text-xs">
                  till now.
                </p>
              </div>
              <div className="bg-white rounded-md p-3 mt-3 mx-2 w-40 flex-shrink-0">
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
              <div className="bg-white rounded-md p-3 mt-3 mx-2 w-40 flex-shrink-0">
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
                <p className="text-gray-400 font-extralight text-xs">
                  You have saved
                </p>
                <p className="text-gray-400 font-extralight text-xs">
                  till now.
                </p>
              </div>
            </div>
            <div className="flex justify-around mx-2 my-5 rounded-md bg-white border-white border-1 bg-opacity-25 p-5 ">
              <div className="pt-2">
                <p className="text-white font-thin text-xs">
                  Enjoy your benifits of
                </p>
                <p className="text-white text-xl">Additional Discount</p>
                <p className="text-white text-xs">
                  On Flights, Hotels and Holidays free
                </p>
                <button className="bg-white text-red-700 font-bold p-1 rounded-md mt-1">
                  Book Now
                </button>
              </div>
              <div>
                <Image src="/clock.svg" height="80" width="80" alt=""></Image>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="hidden md:block mt-80"
          src="/percent.svg"
          height="40"
          width="80"
          alt=""
        ></Image>
      </div>
  );
}

export default Nearexpire;
