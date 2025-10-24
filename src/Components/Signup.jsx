import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Signup(props) {
  const [entereduser, setentereduser] = useState()
  const [enterepass, setenteredpass] = useState()
  const users = props.users
  const setuser = props.setuser
  const navigate = useNavigate()

  function Handleuser(evt) {
    setentereduser(evt.target.value)
  }

  function Handlepass(evt) {
    setenteredpass(evt.target.value)
  }

  function adduser() {
    setuser([...users, { username: entereduser, password: enterepass }])
    navigate("/")
  }

  return (
    <>

      

<div className="bg-black width-100% min-h-screen flex justify-center items-center p-4">
  <div className="bg-[#EFEFEF] w-full max-w-xs p-6 rounded-xl shadow-lg">

    {/* Heading */}
    <h1 className="text-2xl font-bold text-center text-gray-900">
      Hey hii
    </h1>
    <p className="text-center text-gray-700 text-sm mt-1">
      Sign up here buddyy :)
    </p>

    {/* Form */}
    <div className="flex flex-col gap-3 my-5">
      <input
        type="text"
        placeholder="Username"
        className="w-full border border-gray-400 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#d36216]"
        onChange={Handleuser}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border border-gray-400 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#d36216]"
        onChange={Handlepass}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full border border-gray-400 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#d36216]"
      />
      <button
        onClick={adduser}
        className="bg-[#d36216] w-full p-2 rounded-md text-white font-semibold text-sm hover:bg-[#b85612] active:scale-95 transition-all duration-200"
      >
        Sign Up
      </button>
    </div>

    {/* Footer */}
    <p className="text-center text-gray-700 text-xs">
      Already have an account?{" "}
      <Link to="/" className="text-[#d36216] underline">
        Login
      </Link>
    </p>
  </div>
</div>




         
    
    </>
  )
}

export default Signup
