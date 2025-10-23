import { useState } from 'react'

import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Landing from './Landing'


function Routesk(){


  const [currentUser, setCurrentUser] = useState()
     const[users,setuser]=useState(
        [
            {
                username:"kowshi",
                password:"123"
            }
        ]
    )
    return(
        <>

            <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setuser={setuser} setCurrentUser={setCurrentUser} currentUser={currentUser} ></Login>}></Route>
        <Route path='/signup' element={<Signup users={users} setuser={setuser}></Signup>}></Route>
         <Route path='/landing' element={<Landing currentUser={currentUser} ></Landing>}></Route>
       
      </Routes>
      </BrowserRouter>
     </div>
        </>
    )
}
export default Routesk