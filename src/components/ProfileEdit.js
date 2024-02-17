import React, { useState } from "react";
import Header from "./navbar/Header";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../Auth/Firebase";
import { auth } from "../Auth/Firebase"; // Assuming you have set up Firebase in a separate file

export default function ProfileEdit() {
  const [profileImage, setProfileImage] = useState("../img/profilepic.jpg"); // Default profile image
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [expertise, setExpertise] = useState("");
  const [college, setcollege] = useState("");
  const [city, setCity] = useState("");
  const [skills, setSkills] = useState("");
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setcourse] = useState("");
  const [year, setyear] = useState("");
  const [socialLinks, setSocialLinks] = useState("");
  const currentUserid = auth.currentUser.uid;
  console.log(currentUserid);

  const postValue = doc(firestore, "userData", currentUserid);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(postValue, {
        fullName: fullName,
        email: email,
        expertise: expertise,
        college: college,
        course: course,
        year: year,
        city: city,
        phone: phone,
        about: about,
        skills: skills,
        socialLinks: socialLinks,
        // profileImage: profileImage
      });
      alert("Successfully submitted");
    } catch (error) {
      console.error("Error submitting data: ", error);
      alert("Error submitting data. Please try again later.");
    }
  };

  // Function to handle image selection
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row lg:gap-4">
        <div className="left-div lg:[30%]">
          <div className="flex flex-col justify-center items-center py-4 border-2 shadow-lg lg:p-12">
            <label htmlFor="file-input">
              <img
                src={profileImage}
                alt="Profile"
                className="lg:w-60 lg:h-60 w-24 h-24 rounded-full cursor-pointer"
              />
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <h1 className="text-md font-semibold pt-2">user</h1>
            <h1 className="text-xs text-gray-400">email@gmail.com</h1>
          </div>
        </div>
        <div className="right-div  lg:w-[70%]">
          <div className="flex gap-4 py-4 border-2 justify-center lg:justify-start lg:px-12 shadow-lg">
            <h1 className="text-md p-1 border-2 border-gray-300 rounded-md shadow-lg  hover:text-white hover:bg-blue-600 cursor-pointer">
              About
            </h1>
            <h1 className="text-md p-1 border-2 border-gray-300 rounded-md shadow-lg  hover:text-white hover:bg-blue-600 cursor-pointer">
              Academics
            </h1>
            <h1 className="text-md p-1 border-2 border-gray-300 rounded-md shadow-lg  hover:text-white hover:bg-blue-600 cursor-pointer">
              Projects
            </h1>
            <h1 className="text-md p-1 border-2 border-gray-300 rounded-md shadow-lg  hover:text-white hover:bg-blue-600 cursor-pointer">
              Certificates
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="border-2 py-4 px-2 shadow-md">
              <div className="flex gap-4 items-center py-2">
                <h1 className="text-md font-semibold  w-32"> Full Name :</h1>
                <input
                  type="text"
                  placeholder="  full name"
                  value={fullName}
                  onChange={(e) => setfullName(e.target.value)}
                  className="border-2 w-96 rounded-lg shadow-lg hover:border-blue-600"
                />
              </div>
              <div className="flex gap-4 items-center py-2">
                <h1 className="text-md font-semibold w-32"> Email Id :</h1>
                <input
                  type="email"
                  placeholder="  email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 w-96 rounded-lg shadow-lg hover:border-blue-600"
                />
              </div>
              <div className="flex gap-4 items-center py-2">
                <h1 className="text-md font-semibold  w-32"> College :</h1>
                <input
                  type="text"
                  placeholder="  college"
                  value={college}
                  onChange={(e) => setcollege(e.target.value)}
                  className="border-2 w-96 rounded-lg shadow-lg hover:border-blue-600"
                />
              </div>
              <div className="flex gap-4 items-center py-2">
                <h1 className="text-md font-semibold  w-32"> Course :</h1>
                <input
                  type="text"
                  placeholder="  course"
                  value={course}
                  onChange={(e) => setcourse(e.target.value)}
                  className="border-2 w-96 rounded-lg shadow-lg hover:border-blue-600"
                />
              </div>
              <div className="flex gap-4 items-center py-2">
                <h1 className="text-md font-semibold  w-32"> Years :</h1>
                <input
                  type="text"
                  placeholder="  year"
                  value={year}
                  onChange={(e) => setyear(e.target.value)}
                  className="border-2 w-96 rounded-lg shadow-lg hover:border-blue-600"
                />
              </div>
              <div className="flex gap-4 items-center py-2">
                <h1 className="text-md font-semibold w-32">Expertise :</h1>
                <input
                  type="text"
                  placeholder="  expertise"
                  value={expertise}
                  onChange={(e) => setExpertise(e.target.value)}
                  className="border-2 w-96 rounded-lg shadow-lg hover:border-blue-600"
                />
              </div>
              <div className="flex gap-4 items-center py-2">
                <h1 className="text-md font-semibold w-32">City :</h1>
                <input
                  type="text"
                  placeholder="  city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border-2 w-96 rounded-lg shadow-lg hover:border-blue-600"
                />
              </div>
              <div className="flex gap-4 items-center py-2">
                <h1 className="text-md font-semibold w-32">About :</h1>
                <input
                  type="text"
                  placeholder="  about"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="border-2 w-96 rounded-lg shadow-lg hover:border-blue-600"
                />
              </div>
              <div className="flex gap-4 items-center py-2">
                <h1 className="text-md font-semibold w-32">Phone Number :</h1>
                <input
                  type="number"
                  placeholder="  number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-2 w-96 rounded-lg shadow-lg hover:border-blue-600"
                />
              </div>
              <div className="flex gap-4 py-2">
                <h1 className="text-md font-semibold w-32">Skills :</h1>
                <input
                  type="text"
                  placeholder="  add skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="border-2 w-96 rounded-lg shadow-lg hover:border-blue-600"
                />
              </div>
              <div className="flex gap-4 py-2">
                <h1 className="text-md font-semibold w-32">Social Links :</h1>
                <input
                  type="text"
                  placeholder="  add skills"
                  value={socialLinks}
                  onChange={(e) => setSocialLinks(e.target.value)}
                  className="border-2 w-96 rounded-lg shadow-lg hover:border-blue-600"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full border-2 h-12 bg-blue-700 text-white font-semibold rounded-xl shadow-xl hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
          <div>
            <div className="border-2 border-gray-400 h-12 mt-6 mt-32 bg-gray-100 overflow-hidden text-lg font-semibold flex gap-2 justify-center items-center">
              <h1>Made By</h1>
              <h1 className="text-blue-700 cursor-pointer">
                🧡Akash Kumar Goutam
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
