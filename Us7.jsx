import { useState } from "react";
function Us7(){
    const[data,setData]=useState({})
    function handleChange(e){
        const{name,value}=e.target
        setData({...data,[name]:value})
    }
    return(<div>
        <input type="text" name="fname" placeholder="First Name" onChange={handleChange}/>
        <input type="text" name="lname" placeholder="Last Name" onChange={handleChange}/><br/>
        <h1>First Name:{data.fname}<br/><br/><hr/>
            Last Name:{data.lname}
        </h1>

    </div>)
}
export default Us7