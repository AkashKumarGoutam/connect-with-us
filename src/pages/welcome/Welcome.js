import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <div className="bg-blue-800 h-screen">
        <div className="container mx-auto px-16 py-6 text-white flex justify-between items-center">
          <label className=" text-4xl">Board.</label>
          <Link
            to="/sign_in"
            className="text-xl px-4 text-black border-2 bg-white rounded-full w-24 hidden lg:block"
          >
            Sign_in
          </Link>
        </div>
        <div className="container lg:mx-auto lg:w-[95%] ">
          <section className=" lg:text-5xl text-3xl  lg:mt-[17%] mt-56 text-white flex justify-center ">
            Welcome to Board.
          </section>
          <div className="flex justify-center py-16">
            <Link
              to="/sign_in"
              className="text-xl px-4 text-black border-2 bg-white rounded-full w-24 lg:hidden"
            >
              Sign_in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
