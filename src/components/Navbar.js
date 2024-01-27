import React from 'react'

export default function Navbar() {
  return (
    <div>
    <nav className="flex justify-between border-b-2 shadow-xl h-20">
      <div className="flex justify-center items-center">
      <h1 className="text-3xl font-semibold px-8 cursor-pointer hover:ml-6">Connect-With-Us🙂</h1>
      </div>
      <div className="flex justify-center items-center gap-16 px-6">
        <Link to='/home' className="text-xl font-semibold hover:mb-2 hover:text-blue-700">Home</Link>
        <Link to='/dashboard' className="text-xl font-semibold hover:mb-2 hover:text-blue-700">Community</Link>
        <Link to='/forum' className="text-xl font-semibold hover:mb-2 hover:text-blue-700">Forum</Link>
        <div className="flex items-center gap-2">
        <img src="../img/bell-icon.png" alt="bell-icon" className="w-8 h-8 cursor-pointer hover:mb-1"/>
        <img src="../img/profilepic.jpg" alt="profilepic" className="w-16 h-16 rounded-full cursor-pointer hover:mb-1"/>
        </div>
      </div>
    </nav>
  </div>
  )
}
