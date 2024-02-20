import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../../Auth/Firebase'
import {signInWithEmailAndPassword} from '../../Auth/Firebase'


export default function Signin() {
  const [email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate = useNavigate();

  const handleSignin = async(e) => {
    e.preventDefault();
    console.log(email,password);

try {
await signInWithEmailAndPassword(auth ,email, password);
console.log("User signed up successfully!");
navigate('/home');

} catch (error) {
console.error("Error signing up:", error);
alert("your password is wrong ")
}
};




  return (
    <div>
      <div className="flex lg:flex-row flex-col">
        {/* left part */}
        <div className="flex flex-col lg:w-[50%] h-32 bg-blue-800 lg:h-screen">
          <div className=" lg:text-4xl text-xl p-4 text-white lg:mt-5 lg:p-7">LOGO. </div>
          <div className="  lg:mt-[30%] flex justify-center lg:text-6xl text-2xl text-white">
            Board.
          </div>
          <div className=" flex justify-center mt-[25%] hidden lg:block">
            <i
              className="fab fa-github p-4 text-2xl text-white text-2xl text-white text-2xl "
              id="ic"
            ></i>

            <i
              className="fab fa-twitter p-4 text-2xl text-white text-2xl text-white text-2xl"
              id="ic"
            ></i>

            <i
              className="fab fa-linkedin-in p-4 text-2xl text-white text-2xl text-white text-2xl"
              id="ic"
            ></i>

            <i
              className="fab fa-facebook-f p-4 text-2xl text-white text-2xl text-white text-2xl"
              id="ic"
            ></i>
          </div>
        </div>
        {/* end left part */}

        {/* right part */}
        <div className="h-12">
          {/* right top div */}
          <div >
            <h3 className="lg:text-4xl text-2xl flex justify-center lg:justify-start pt-6 lg:py-0 font-semibold lg:px-[170px] lg:mt-[90px]">
              Sign In
            </h3>
            <h5 className="lg:px-[170px] lg:mt-1 text-sm flex justify-center lg:justify-start">Sign in to your account</h5>


            <div className="flex  justify-center mt-2 gap-4 ">
              
              <div className="flex flex-row items-center lg:px-[180px]  ">
              <img src="../img/google-pic.png" alt="Google" />
                <h5 className="text-gray-400 block px-2 text-xs lg:text-base">Sign in with Google</h5>
              </div>

              <div className="flex flex-row items-center ">
              <img src="../img/github-pic.png" alt="Google" />
                <h5 className="text-gray-400 block px-2 text-xs lg:text-base">Sign in with Github</h5>
              </div>

            </div>



          </div>
          {/* end right top div */}

          {/* right second div */}
          <div>
            <div className="flex px-8 flex-col justify-center lg:py-[10%] lg:px-56">
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSignin} className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        // onChange={handleEmail}
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        type="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {/* {emailError?"please fill email":""} */}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        // onChange={handlePassword}
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        type="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {/* {passwordError?"please fill password":""} */}
                    </div>
                    <div className="text-sm">
                      <a
                        href="/"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                Don't have an account?
                  <Link
                    to="/sign_up"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    SignUp                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* end right second div */}
        </div>
        {/* end right part */}
      </div>
    </div>
  );
}
