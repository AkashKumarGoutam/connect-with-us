import React from "react";
import { Link } from "react-router-dom";
import CardDev from "../../components/card/CardDev";

export default function Body() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="bg-gray-600 w-[16%] hidden lg:block">
          <nav className="flex flex-col justify-center ">

            <Link to="/home" className="p-4 text-xl text-white hover:ml-4">
              &rarr; Home
            </Link>
            <hr></hr>
            <Link to="/dashboard" className="p-4 text-xl text-white hover:ml-4">
              &rarr; Community
            </Link>
            <hr></hr>
            <Link to="/forum" className="p-4 text-xl text-white hover:ml-4">
              &rarr; Forum
            </Link>
            <hr></hr>
          </nav>
        </div>


        <div className="flex flex-wrap w-[84%] ">
            <CardDev/>
         </div>


      </div>
    </div>
  );
}
