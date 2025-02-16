import Link from "next/link";
import React from "react";

const Room = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Special Rooms</h2>
      <div className="flex flex-col md:flex-row max-w-7xl m-auto gap-10">
        <Link href={"/couplecottage"} className="md:w-1/2 ">
          <div className="bg-[url('/Beach.jpg')] hover:scale-105 transition-all duration-500 md:rounded-lg relative h-80 flex flex-col  my-5 bg-center bg-cover">
            <p className="px-2 border rotate-[270deg] right-1 absolute text-right mt-7 text-white rounded w-fit">
              View
            </p>
            <div className="flex-1"></div>
            <h3 className="text-white text-center py-2 bg-black bg-opacity-30">
              Couple Rooms (Cottage)
            </h3>
          </div>
        </Link>
        <Link href={"/familycottage"} className="md:w-1/2">
          <div className="bg-[url('/Beach.jpg')] hover:scale-105 transition-all duration-500 md:rounded-lg relative h-80 flex flex-col  my-5 bg-center bg-cover">
            <p className="px-2 border rotate-[270deg] right-1 absolute text-right mt-7 text-white rounded w-fit">
              View
            </p>
            <div className="flex-1"></div>
            <h3 className="text-white text-center py-2 bg-black bg-opacity-30">
              Family Rooms
            </h3>
          </div>
        </Link>
      </div>

     
    </>
  );
};

export default Room;
