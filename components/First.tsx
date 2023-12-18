import React from "react";
import Image from "next/image";

function First() {
  return (
    <>
      <div className="bg-red-100 pt-10">
        <div className=" px-4 max-w-screen-xl flex flex-wrap items-center justify-items-center justify-around mx-auto ">
          <div className=" text-center lg:text-left md:text-center pt-10 lg:ml-16 lg:mr-16 lg:pr-72">
            <p className=" text-3xl text-black">welcome to</p>
            <p className=" lg:text-5xl text-4xl font-extrabold text-red1 ">
              Travelxp RED
            </p>
            <div className="bg-white rounded-md p-3 text-xs mt-3 hidden md:block">
              <p className=" text-left text-gray-500">Current Plan Duration:</p>
              <p className="text-left text-gray-500">Subscription Amount:</p>
              <p className="text-left text-gray-500">Plan Expiry Date:</p>
            </div>
          </div>

          <div className="bg-[url('/icon1.png')] bg-cover  md:bg-center lg:h-[500px] h-[350px] w-[500px]"></div>
        </div>
      </div>

      {/* Mobile */}
      <div className="bg-white">
        <div className="shadow-xl  lg:hidden mr-3 ml-3 rounded-tl-3xl rounded-tr-3xl bg-red-100 border-black align-middle p-6 mt-7 mb-7 ">
          <p className="text-gray-500">Current Plan Duration:</p>
          <p className="text-gray-500">Subscription Amount:</p>
          <p className="text-gray-500">Plan Expiry Date:</p>
        </div>
      </div>
      </>
  );
}

export default First;
