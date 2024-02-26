import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore, auth } from "../../Auth/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [userData, setUserData] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false); // State to track if profile dropdown is open
  const navigate = useNavigate();

  const handleProfile = () => {
    setProfileOpen(!profileOpen); // Toggle the profile dropdown
  };

  const openNoticePage = () => {
    navigate("/notice_page");
  };

  const handleLogOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/");
    }
  });

  const fetchData = async () => {
    try {
      const userUid = auth.currentUser.uid;
      if (!userUid) return;

      const querySnapshot = await getDocs(collection(firestore, "userData"));
      querySnapshot.forEach((doc) => {
        if (doc.id === userUid) {
          setUserData(doc.data());
        }
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <nav className="flex justify-between bg-blue-800 text-white border-b-2 shadow-xl lg:h-20 h-20">
        <div className="flex justify-center items-center">
          <h1 className="lg:text-3xl text-md font-bold lg:px-8 px-2 cursor-pointer hover:ml-6 hover:text-yellow-600">
            <span className="lg:block hidden">Connect-With-Us🙂</span> <span className="lg:hidden block text-xl pl-2 text-white">Connect-With-Us</span>
          </h1>
        </div>
        <div className="flex justify-center items-center lg:gap-16 lg:px-6 gap-2">
          <Link to="/home" className="lg:text-xl text-xs font-semibold hover:mb-2 hover:text-yellow-600 lg:block hidden">
            Home
          </Link>
          <Link to="/dashboard" className="lg:text-xl text-xs font-semibold hover:mb-2 hover:text-yellow-600 lg:block hidden">
            Community
          </Link>
          <Link to="/forum" className="lg:text-xl text-xs font-semibold hover:mb-2 hover:text-yellow-600 lg:block hidden">
            Forum
          </Link>
          <div className="flex items-center gap-2 pr-2">
            <div className="relative">
              <sup className="absolute text-sm font-semibold">1</sup>
              <img
                src="../img/bell-icon.png"
                alt="bell-icon"
                onClick={openNoticePage}
                className="lg:w-8 lg:h-8 h-8 w-full cursor-pointer hover:mb-1"
              />
            </div>
            <div className="relative">
              {userData ? (
                <img
                  src={userData.profileImage}
                  alt="User"
                  className="border-2 w-12 h-12 rounded-full cursor-pointer"
                  onClick={handleProfile}
                />
              ): <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" alt="img" className="lg:w-8 lg:h-8 h-8 w-full rounded-full cursor-pointer hover:mb-1" onClick={handleProfile}/>}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                  {/* Dropdown content */}

                  <Link
                    to="/home"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-800 hover:text-white lg:hidden block"
                  >
                    Home
                  </Link>

                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-800 hover:text-white lg:hidden block"
                  >
                    Communty
                  </Link>

                  <Link
                    to="/forum"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-800 hover:text-white lg:hidden block"
                  >
                    Forum
                  </Link>
                  <Link
                    to="/profile_edit"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-800 hover:text-white"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="block w-full flex justify-start px-4 py-2 text-sm text-gray-800 hover:bg-blue-800 hover:text-white"
                  >
                    Log Out
                  </button>

                  {/* Add more dropdown items as needed */}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
