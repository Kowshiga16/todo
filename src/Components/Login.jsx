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
      <div className="bg-black min-h-screen flex justify-center items-center p-5 sm:p-10">
        <div className="bg-[#EFEFEF] w-full max-w-md p-6 sm:p-10 border rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-medium text-center">Hey hii</h1>
          {ruser ? (
            <p className="text-center text-sm sm:text-base mt-1">
              I help you to manage your activities after you login :)
            </p>
          ) : (
            <p className="text-red-400 text-center text-sm sm:text-base mt-1">please sign up</p>
          )}

          <div className="flex flex-col gap-3 my-4 items-center">
              <input
              type="text"
              className="w-full sm:w-64 md:w-72 border-black p-2 bg-transparent border rounded-md text-sm sm:text-base"
              placeholder="username"
              onChange={Handleuser}
            />
            <input
              type="text"
              className="w-full sm:w-64 md:w-72 border-black p-2 bg-transparent border rounded-md text-sm sm:text-base"
              placeholder="password"
              onChange={Handlepass}
            />

            <button
              onClick={checkuser}
              className="bg-[#8272DA] w-28 sm:w-32 p-2 rounded-md text-white text-sm sm:text-base hover:bg-[#6f63d2] transition-all"
            >
              Login
            </button>

            <p className="text-center text-sm sm:text-base">
              Don't have an Account?{" "}
              <Link to={"signup"} className="underline text-[#8272DA] hover:text-[#6f63d2]">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
