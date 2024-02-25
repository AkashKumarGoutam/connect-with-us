import React from "react";
import { Link } from "react-router-dom";
import CardDev from "../../components/card/CardDev";

export default function Body() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="bg-cyan-700 w-[20%] hidden rounded-xl lg:block">
          <nav className="flex flex-col justify-center ">

            <Link to="/home" className="p-4 text-xl text-white hover:ml-4">
              &rarr; Home
            </Link>
            
            <Link to="/dashboard" className="p-4 text-xl text-white hover:ml-4">
              &rarr; Community
            </Link>
            
            <Link to="/forum" className="p-4 text-xl text-white hover:ml-4">
              &rarr; Forum
            </Link>
            
          </nav>
        </div>


        <div className="lg:flex lg:flex-wrap lg:w-[100%] w-full">
            <CardDev/>
         </div>


      </div>
    </div>
  );
}
