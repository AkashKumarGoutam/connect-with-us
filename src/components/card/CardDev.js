import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { firestore } from "../../Auth/Firebase";

export default function CardDev() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = collection(firestore, "userData");
        const querySnapshot = await getDocs(dataRef);
        const userDataArray = [];
        querySnapshot.forEach((doc) => {
          userDataArray.push({ id: doc.id, ...doc.data() });
        });
        setUserData(userDataArray);
        console.log(userDataArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {userData ? (
        userData.map((user) => (
          <div key={user.id}>
            <div className="flex flex-col lg:p-4 rounded-xl p-2 border-2 lg:m-4 m-2 shadow-xl bg-white  ">
              <div className="flex lg:gap-16 gap-4 items-center ">
                <div className="w-[50%]">
                  <img
                    src={user.profileImage}
                    className="lg:w-24 lg:h-24 w-24 h-24 border-2 rounded-full "
                    alt="profile-pic"
                  />
                </div>
                <div className="flex flex-col lg:w-96">
                  <h1 className="lg:text-xl  font-semibold">
                    {user.fullName}
                  </h1>
                  <div className="flex flex-row pt-4">
                    <img src="../img/year.png" alt="year-icon" />
                    <h1 className="px-2 text-sm">
                      {user.year}, {user.course}
                    </h1>
                  </div>
                  <div className="flex flex-row pt-2">
                    <img src="../img/college.png" alt="college-icon" />
                    <h1 className="px-2 text-sm">{user.college}</h1>
                  </div>
                  <div className="flex flex-row items-center pr-6 pt-2">
                    <img src="../img/about.png" alt="about-icon" />
                    <h1 className="px-2 text-sm">{user.about}</h1>
                  </div>
                </div>
              </div>
              <br />
              <hr />

              <div className="flex flex-col lg:mt-4 mt-3">
                <div className="flex flex-row ">
                  <img src="../img/college.png" alt="college-icon" />
                  <h1 className="px-4 text-sm">{user.skills}</h1>
                </div>
                <div className="flex flex-row mt-2">
                  <img src="../img/expertise.png" alt="expertise-icon" />
                  <h1 className="px-4 text-sm">{user.expertise}</h1>
                </div>
                <div className="flex flex-row lg:pt-6 pt-2 justify-end">
                  <Link
                    to={`/profile_community/${user.id}`}
                    className="border-2 bg-blue-700 text-white lg:px-8 px-4 rounded-full p-1 flex flex-row justify-center items-center"
                  >
                    <img src="../img/view-details-icon.png" alt="user-icon" />
                    <h1 className="lg:px-2 text-xs ">View Details</h1>
                  </Link>

                  <Link
                    to="/chat"
                    className="border-2 bg-blue-700 text-white px-8 rounded-full p-1 flex flex-row justify-center items-center"
                  >
                    <img src="../img/chat-icon.png" alt="chat-icon" />
                    <h1 className="lg:px-2 text-xs">Chat</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
