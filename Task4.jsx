import { useState } from "react";
// import img1 from '../assets/react.svg'
// import img2 from '../assets/hero.png'
import img1 from '../assets/a.jpg'
import img2 from '../assets/s.jpg'
function Task4()
{
    const[pic,setpic]=useState(img1)
    function handleChange()
    {
        if(pic==img1)
        {
            setpic(img2)
        }
        else
        {
            setpic(img1)
        }
    }
    return(<div>
        <img src={pic}  height="200px" width="200px"/>
        <button onClick={handleChange}>Change Image</button>
    </div>)
}
export default Task4