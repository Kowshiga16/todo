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
      <div className="bg-black min-h-screen flex justify-center items-center p-5 sm:p-10">
        <div className="bg-[#EFEFEF] w-full max-w-md p-6 sm:p-10 border rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-medium text-center">Hey hii</h1>
          <p className="text-center text-sm sm:text-base mt-1">Sign up here buddyy :)</p>

          <div className="flex flex-col gap-3 my-4 items-center">
            <input
              onChange={Handleuser}
              type="text"
              className="w-full sm:w-64 md:w-72 border-black p-2 bg-transparent border rounded-md text-sm sm:text-base"
              placeholder="username"
            />
            <input
              onChange={Handlepass}
              type="text"
              className="w-full sm:w-64 md:w-72 border-black p-2 bg-transparent border rounded-md text-sm sm:text-base"
              placeholder="password"
            />
            <input
              type="text"
              className="w-full sm:w-64 md:w-72 border-black p-2 bg-transparent border rounded-md text-sm sm:text-base"
              placeholder="confirm password"
            />
            <button
              onClick={adduser}
              className="bg-[#d36216] w-28 sm:w-32 p-2 rounded-md text-white text-sm sm:text-base hover:bg-[#b85612] transition-all"
            >
              Sign up
            </button>
            <p className="text-center text-sm sm:text-base">
              Already have an Account?{" "}
              <Link to={"/"} className="underline text-[#d36216] hover:text-[#b85612]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
