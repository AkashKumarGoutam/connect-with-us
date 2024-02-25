import React from "react";
import Navbar from '../../components/navbar/Navbar'
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between p-12 items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold hover:text-blue-700">
              Welcome To Connect-With-Us
            </h1>
            <h1 className="text-sm">
              Platform for connect, collab, build and learn new skills
            </h1>
            <Link to="/dashboard" className="text-mb mb-8 lg:mb-0 bg-black text-white p-3 rounded-lg cursor-pointer ">
              Connect-With-Dev
            </Link>
          </div>
          <img src="../img/Agency.svg" alt="img" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:px-24 px-8 items-center">
          <img src="../img/Agency1.svg" alt="img" />
          <div className="flex flex-col lg:justify-start gap-2">
            <h1 className="lg:text-4xl font-bold hover:text-blue-700">
              Platform for connect, collab, build and learn new skills
            </h1>
            <h1 className="text-sm hover:font-semibold">
              A platform for university students can connect them with peers,
              mentors, and potential collaborators to enhance their educational
              experience.<br/> It offers resources for learning new skills,
              opportunities for collaboration, and access to experts in various
              fields. Such a platform can help<br/> students build their skills,
              explore new interests, and prepare for successful careers.{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
