import React from "react";
import Header from "../navbar/Header";

export default function HomePage() {
  return (
    <div>
      <Header />

      <div className="flex flex-col ">
        <div className="flex flex-col lg:flex-row justify-between p-12 items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold hover:text-blue-700">
              Welcome To Connect-With-Us
            </h1>
            <h1 className="text-sm">
              Platform for connect, collab, build and learn new skills
            </h1>
            <button className="text-mb mb-8 lg:mb-0 bg-blue-500 text-white w-40 h-8 rounded-lg cursor-pointer hover:text-lg">
              Connect-With-Dev
            </button>
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


        <div className="border-2 border-gray-400 h-12 lg:mt-6 mt-32 bg-gray-100 overflow-hidden text-lg font-semibold flex gap-2 justify-center items-center">
            <h1>Made By</h1>
            <h1 className="text-blue-700 cursor-pointer">🧡Akash Kumar Goutam</h1>
        </div>
      </div>
    </div>
  );
}
