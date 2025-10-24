import { useState } from "react"
import { Link, useNavigate } from "react-router"

function Login(props) {
  const [entereduser, setentereduser] = useState()
  const [enterepass, setenteredpass] = useState()
  const [ruser, setruser] = useState(true)
  const users = props.users
  const setuser = props.setuser
  const setCurrentUser = props.setCurrentUser
  const navigate = useNavigate()
  var userf = false

  function Handleuser(evt) {
    setentereduser(evt.target.value)
  }

  function Handlepass(evt) {
    setenteredpass(evt.target.value)
  }

  function checkuser() {
    console.log(users)
    users.forEach(function (item) {
      if (item.username === entereduser && item.password === enterepass) {
        console.log("Login Succesfull")
        userf = true
        navigate("/landing")
      }
      if (userf == false) {
        console.log("please sign up")
        setruser(false)
      }
    })
  }

  return (
    <>
<div className="bg-black min-h-screen flex justify-center items-center p-4 sm:p-6 md:p-8">
  <div className="bg-[#EFEFEF] w-full max-w-xs sm:max-w-sm md:max-w-md p-6 sm:p-8 rounded-xl shadow-lg">

    {/* Heading */}
    <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
      Hey hii
    </h1>

    {ruser ? (
      <p className="text-center text-gray-700 text-sm sm:text-base mt-1">
        I help you manage your activities after you login :)
      </p>
    ) : (
      <p className="text-red-500 text-center text-sm sm:text-base mt-1">
        Please sign up
      </p>
    )}

    {/* Form */}
    <div className="flex flex-col gap-3 sm:gap-4 my-5">
      <input
        type="text"
        placeholder="Username"
        onChange={Handleuser}
        className="w-full border border-gray-400 p-2 sm:p-3 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#8272DA]"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={Handlepass}
        className="w-full border border-gray-400 p-2 sm:p-3 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#8272DA]"
      />
      <button
        onClick={checkuser}
        className="bg-[#8272DA] w-full p-2 sm:p-3 rounded-md text-white font-semibold text-sm sm:text-base hover:bg-[#6f63d2] active:scale-95 transition-all duration-200"
      >
        Login
      </button>
    </div>

    {/* Footer */}
    <p className="text-center text-gray-700 text-xs sm:text-sm">
      Don’t have an account?{" "}
      <Link
        to="/signup"
        className="underline text-[#8272DA] hover:text-[#6f63d2] transition-colors"
      >
        Signup
      </Link>
    </p>
  </div>
</div>



  
    </>
  )
}

export default Login
