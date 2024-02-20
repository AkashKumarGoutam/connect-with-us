import React, { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore , auth } from "../../Auth/Firebase";

export default function Header() {
  const [userData,setUserData]=useState()
const navigate = useNavigate()

const [profileOpen, setProfileOpen] = useState(false); // State to track if profile dropdown is open

const handleProfile = () => {
  setProfileOpen(!profileOpen); // Toggle the profile dropdown
}   


const openNoticePage=()=>{
  navigate("/notice_page")
}



const fetchData = async () => {
  try {
    const userUid = auth.currentUser.uid;
    console.log(userUid)
    if (!userUid) return;

    const querySnapshot = await getDocs(collection(firestore, "userData"));
    querySnapshot.forEach((doc) => {
      if(doc.id === userUid){
          setUserData(doc.data());
          console.log(doc.data());
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
      <nav className="flex justify-between border-b-2 shadow-xl lg:h-20 h-16">
        <div className="flex justify-center items-center">
        <h1 className="lg:text-3xl text-xs font-semibold lg:px-8 px-2 cursor-pointer hover:ml-6 hover:text-yellow-600">Connect-With-Us🙂</h1>
        </div>
        <div className="flex justify-center items-center lg:gap-16 lg:px-6 gap-2">
          <Link to='/home' className="lg:text-xl text-xs font-semibold hover:mb-2 hover:text-yellow-600">Home</Link>
          <Link to='/dashboard' className="lg:text-xl text-xs font-semibold hover:mb-2 hover:text-yellow-600">Community</Link>
          <Link to='/forum' className="lg:text-xl text-xs font-semibold hover:mb-2 hover:text-yellow-600">Forum</Link>
          <div className="flex items-center gap-2 pr-2">
            <div className="relative">
              <sup className="absolute text-xs font-semibold text-yellow-600">0</sup>
              <img src="../img/bell-icon.png" alt="bell-icon" onClick={openNoticePage} className="lg:w-8 lg:h-8 cursor-pointer hover:mb-1"/>
            </div>
          {/* <img src="../img/profilepic.jpg" alt="profilepic" onClick={OpenProfilePage} className="lg:w-16 lg:h-16 w-8 h-8 rounded-full cursor-pointer hover:mb-1"/> */}
          



          <div className="relative">
            {userData  &&(
              <img src={userData.profileImage} alt='User' className=' border-4 border-blue-400 w-16 h-16 rounded-full cursor-pointer' onClick={handleProfile}/>
              )}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                  {/* Dropdown content */}
                  <Link to="/profile_page" className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-600 hover:text-white">Profile</Link>
                  <Link to="/sign_in" className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-600 hover:text-white">Log Out</Link>
                  {/* Add more dropdown items as needed */}
                </div>
              )}
            </div>
          {/* end */}
          </div>
        </div>
      </nav>

    </div>
  );
}
