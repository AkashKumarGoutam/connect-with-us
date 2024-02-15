import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardDev() {
  const [cardDev, setCardDev] = useState([]);

  const fetchData = async () => {
    let response = await fetch(
      "https://raw.githubusercontent.com/AkashKumarGoutam/Dummy_json/main/data.json"
    );
    let data = await response.json();
    setCardDev(data.students);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {cardDev.map((element) => {
        console.log(element);
        return (
          <>
            <div>
              <div className="flex flex-col p-4 border-2  m-4 shadow-xl ">

                <div className="flex gap-16">
                  <img
                    src="../img/profilepic.jpg"
                    className="w-24 h-24 border-2 rounded-full  "
                    alt="profile-pic"
                  />
                  <div className="flex flex-col w-96">
                      <h1 className="text-xl font-semibold">{element.name}</h1>
                      <div className="flex flex-row pt-4">
                        <img src="../img/year.png" alt="year-icon" />
                        <h1 className="px-2 text-sm">{element.year} , {element.course}</h1>
                      </div>
                      <div className="flex flex-row pt-2">
                        <img src="../img/college.png" alt="college-icon" />
                        <h1 className="px-2 text-sm">{element.college}</h1>
                      </div>
                      <div className="flex flex-row justify-center items-center pr-6 pt-2">
                        <img src="../img/about.png" alt="about-icon" />
                        <h1 className="px-2 text-sm">{element.about}</h1>
                      </div>                  
                  </div>
                </div>
                <br />
                <hr />
                <div className="flex flex-col mt-4">
                  <div className="flex flex-row ">
                    <img src="../img/college.png" alt="college-icon" />
                    <h1 className="px-4 text-sm">
                      {element.skills.join(" , ")}{" "}
                    </h1>
                  </div>
                  <div className="flex flex-row mt-2">
                    <img src="../img/expertise.png" alt="expertise-icon" />
                    <h1 className="px-4 text-sm">{element.expertise}</h1>
                  </div>
                  <div className="flex flex-row pt-6 justify-end">
                    <Link to="/profile_page" className="border-2 bg-blue-700 text-white px-8 rounded-full p-1 flex flex-row ">
                      <img src="../img/view-details-icon.png" alt="user-icon" />
                      <h1 className="px-2">View Details</h1>
                    </Link>
                    <Link to="/chat" className="border-2 bg-blue-700 text-white px-8 rounded-full p-1 flex flex-row ">
                      <img src="../img/chat-icon.png" alt="chat-icon" />
                      <h1 className="px-2">Chat</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
