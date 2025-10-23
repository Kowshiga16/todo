
import { useState } from "react"
import ToDo from "./ToDo"

function Container(){
    
        const [activityarr,setactivity]=useState([
            {
                id:1,
                activity:"wake up at 6",
            },
             {
                id:2,
                activity:"do yoga for 15 mins",
            },
             {
                id:3,
                activity:"take shower",
            },
        ])
    return(
        <>

<ToDo activityarr={activityarr} setactivity={setactivity}></ToDo>


        </>
    )
}
export default Container