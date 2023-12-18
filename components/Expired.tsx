import React from "react";
import Image from "next/image";

function Expired() {
  return (
    <div className="bg-red1 w-full px-4 flex flex-wrap items-center justify-items-center justify-around mx-auto pt-12 pb-10 ">
      <Image
        className="hidden md:block mb-80"
        src="/percent.svg"
        height="20"
        width="30"
        alt=""
      ></Image>
      <div className=" lg:text-left text-center lg:border-r-2 pr-12">
        <p className="text-white text-2xl pl-1">Your plan has</p>
        <p className="text-white text-6xl pl-1 font-extrabold">EXPIRED</p>
        <div className="md:block hidden">
          <div className="flex justify-around items-center m-2 rounded-md h-20 bg-white border-white border-1 bg-opacity-25 p-3 ">
            <div>
              <p className="text-white pr-3 text-sm">
                You have saved a <br /> total of
              </p>
            </div>
            <p className="text-white font-extrabold text-xl">Rs. 2450</p>
          </div>
        </div>
      </div>
      {/* m v */}
      <div className="flex lg:hidden w-full justify-around items-center m-3 h-20 rounded-xl bg-white border-white border-1 bg-opacity-25 p-3 ">
        <div>
          <p className="text-white pr-3 text-sm">
            You have saved a <br /> total of
          </p>
        </div>
        <p className="text-white font-extrabold text-xl">Rs. 2450</p>
      </div>
      {/*  */}
      <div className="grid ">
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="bg-white rounded-md p-3 mt-3 mx-2 w-40 flex-shrink-0">
            <Image
              src="/airplane.svg"
              height="30"
              width="25"
              alt=""
              className="mb-2"
            ></Image>
            <p className="text-black font-semibold">Upto 30% off on flights</p>
            <p className="text-gray-400 font-extralight text-xs ">
              You have saved
            </p>
            <p className="text-gray-400 font-extralight text-xs ">till now.</p>
          </div>
          <div className="bg-white rounded-md p-3 mt-3 mx-2 w-40 flex-shrink-0">
            <Image
              src="/hotel.svg"
              height="30"
              width="25"
              alt=""
              className="mb-2"
            ></Image>
            <p className="text-black font-semibold">Upto 30% off on hotels</p>
            <p className="text-gray-400 font-extralight text-xs ">
              You have saved
            </p>
            <p className="text-gray-400 font-extralight text-xs ">till now.</p>
          </div>
          <div className="bg-white rounded-md p-3 mt-3 mx-2 w-40 flex-shrink-0">
            <Image
              src="/holiday.svg"
              height="30"
              width="25"
              alt=""
              className="mb-2"
            ></Image>
            <p className="text-black font-semibold">Upto 30% off on holidays</p>
            <p className="text-gray-400 font-extralight text-xs">
              You have saved
            </p>
            <p className="text-gray-400 font-extralight text-xs">till now.</p>
          </div>
        </div>
        <div className="flex justify-around mx-2 my-5 rounded-md bg-white border-white border-1 bg-opacity-25 p-3 ">
          <div className="pt-2">
            <p className="text-white text-xs">Renew now to get an</p>
            <p className="text-white text-xl">Additional Month</p>
            <p className="text-white text-xs">for free</p>
            <button className="bg-white text-red-700 font-bold p-1 rounded-md mt-1">
              Redeem Now
            </button>
          </div>
          <div>
            <Image src="/calendar.svg" height="80" width="80" alt=""></Image>
          </div>
        </div>
      </div>
      <Image
        className="hidden md:block mt-80"
        src="/percent.svg"
        height="20"
        width="80"
        alt=""
      ></Image>
    </div>
  );
}

export default Expired;
