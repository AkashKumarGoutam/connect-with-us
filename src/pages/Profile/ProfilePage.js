import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import Navbar from '../../components/navbar/Navbar'
import { firestore, auth } from "../../Auth/Firebase"; // Assuming you have set up Firebase in a separate file
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const [userData, setUserData] = useState("null");

  const fetchData = async () => {
    try {
      // Check if the user is authenticated
      if (auth.currentUser) {
        const userUid = auth.currentUser.uid;
        console.log(userUid);
        if (!userUid) return;
  
        const querySnapshot = await getDocs(collection(firestore, "userData"));
        querySnapshot.forEach((doc) => {
          if (doc.id === userUid) {
            setUserData(doc.data());
            console.log(doc.data());
          }
        });
      } else {
        // Handle the case when the user is not authenticated
        console.log("User is not authenticated.");
        // You can redirect the user to a login page or display a message prompting them to log in.
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  

  useEffect(() => {
    fetchData();
  }, []);




  
  return (
    <div>
      <Navbar/>
      {userData && (

      <div className="flex flex-col lg:flex-row lg:gap-4">
        <div className="left-div lg:[30%]">
          <div className="flex flex-col justify-center items-center py-4 border-2 shadow-lg lg:p-12">
            <img
              src={userData.profileImage}
              alt="user"
              className="border-4 lg:w-60 lg:h-60 w-24 h-24 rounded-full "
            />
            <h1 className="text-md font-semibold pt-2">{userData.fullName}</h1>
            <h1 className="text-xs text-gray-400">{userData.email}   </h1>
          </div>
        </div>

        <div className="right-div lg:w-[70%]">
          <div className="flex justify-between items-center border-2 shadow-lg">
            <div className="flex py-4 gap-6 justify-between items-center lg:justify-start lg:px-12 ">
              <h1 className="text-md p-1 border-2 border-gray-300 rounded-md shadow-lg  hover:text-white hover:bg-blue-800 cursor-pointer">
                About
              </h1>
              <h1 className="text-md p-1 border-2 border-gray-300 rounded-md shadow-lg  hover:text-white hover:bg-blue-800 cursor-pointer">
                Academics
              </h1>
              <h1 className="text-md p-1 border-2 border-gray-300 rounded-md shadow-lg  hover:text-white hover:bg-blue-800 cursor-pointer">
                Projects
              </h1>
              <h1 className="text-md p-1 border-2 border-gray-300 rounded-md shadow-lg  hover:text-white hover:bg-blue-800 cursor-pointer">
                Certificates
              </h1>
            </div>
            <div>
              <Link
                to="/profile_edit"
                className="text-md p-1 lg:mr-12 border-2 border-gray-300 rounded-md shadow-lg lg:block hidden hover:text-white hover:bg-blue-800 cursor-pointer"
              >
                Edit
              </Link>
            </div>
          </div>
          <div className="border-2 py-4 px-2 shadow-md">
            <div className="flex gap-4 items-center py-2">
              <h1 className="text-md font-semibold  w-32"> Full Name :</h1>
              <h1 className="text-sm w-44"> {userData.fullName} </h1>
            </div>
            <div className="flex gap-4 items-center py-2">
              <h1 className="text-md font-semibold w-32"> Email Id :</h1>
              <h1 className="text-sm w-44">{userData.email}</h1>
            </div>
            <div className="flex gap-4 items-center py-2">
              <h1 className="text-md font-semibold w-32">Expertise :</h1>
              <h1 className="text-sm w-44">{userData.expertise}</h1>
            </div>
            <div className="flex gap-4 items-center py-2">
              <h1 className="text-md font-semibold w-32">City :</h1>
              <h1 className="text-sm w-44">{userData.city}</h1>
            </div>
            <div className="flex gap-4 items-center py-2">
              <h1 className="text-md font-semibold w-32">About :</h1>
              <h1 className="text-sm w-44">{userData.about}              </h1>
            </div>
            <div className="flex gap-4 items-center py-2">
              <h1 className="text-md font-semibold w-32">Phone Number :</h1>
              <h1 className="text-sm w-44">{userData.phone}</h1>
            </div>
            <div className="flex flex-col gap-4 py-2">
              <h1 className="text-md font-semibold">Skills :</h1>
              <div className="flex gap-2 flex-wrap px-4">
                <h1 className="text-sm border-2 p-1 shadow-md rounded-md cursor-pointer hover:bg-blue-300">
                  {userData.skills}
                </h1>
                <h1 className="text-sm border-2 p-1 shadow-md rounded-md cursor-pointer hover:bg-blue-300">
                  CSS
                </h1>
                <h1 className="text-sm border-2 p-1 shadow-md rounded-md cursor-pointer hover:bg-blue-300">
                  JavaScript
                </h1>
                <h1 className="text-sm border-2 p-1 shadow-md rounded-md cursor-pointer hover:bg-blue-300">
                  React Js
                </h1>
                <h1 className="text-sm border-2 p-1 shadow-md rounded-md cursor-pointer hover:bg-blue-300">
                  Tailwind CSS
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-2">
              <h1 className="text-md font-semibold">Social Links :</h1>
              <div className="flex gap-2 flex-wrap px-4">
                <h1 className="text-sm border-2 p-1 shadow-md rounded-md cursor-pointer hover:bg-blue-300">
                  LinkedIn
                </h1>
                <h1 className="text-sm border-2 p-1 shadow-md rounded-md cursor-pointer hover:bg-blue-300">
                  Leetcode
                </h1>
                <h1 className="text-sm border-2 p-1 shadow-md rounded-md cursor-pointer hover:bg-blue-300">
                  Codechef
                </h1>
                <h1 className="text-sm border-2 p-1 shadow-md rounded-md cursor-pointer hover:bg-blue-300">
                  geeksforgeeks
                </h1>
                <h1 className="text-sm border-2 p-1 shadow-md rounded-md cursor-pointer hover:bg-blue-300">
                  hackrrank
                </h1>
                <h1 className="text-sm border-2 p-1 shadow-md rounded-md cursor-pointer hover:bg-blue-300">
                  portfolio
                </h1>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
)}
    </div>
  );
}
