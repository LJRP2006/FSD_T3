import { useState } from "react";
function Task5(){
    const [formdata,setFormdata]=useState({})
    function handleChange(e){
        const{name,value}=e.target
        setFormdata({...formdata,[name]:value})
    }
    function handleSubmit(e){
        e.preventDefault()
        alert("your form has been submited \nName:"+formdata.fname+"\n Email:"+formdata.eid+"\n City:"+formdata.city+"\n Gender:"+formdata.gen)
    }
    return(
        <form onSubmit={handleSubmit}>
        <input type="text" name="fname" onChange={handleChange}/>FirstName <br/> <br />
        <input type="email" name="eid" onChange={handleChange}/>Email <br/><br />
        <input type="password" name="pass" onChange={handleChange}/>Password <br /><br />
        <input type="password" name="cpass" onChange={handleChange}/>Confirm Password <br/><br />
        <textarea name="msg" onChange={handleChange}/>Message <br />
        <select name="city" onChange={handleChange}>
        <option value="">Select City</option>
        <option value='ahmedabad'>AMD </option>
        <option value="gandhinagar">GNR </option>
        <option value='ahmedabad'>RAJ </option>
        <option value="gandhinagar">Surat </option>
        <option value='ahmedabad'>VADODRA </option>
        <option value="gandhinagar">DWARKA</option>
        </select> <br/>
        <input type="radio" name="gen" value="Female" onChange={handleChange}/>Female <br />
        <input type="radio" name="gen" value="Male" onChange={handleChange}/>Male <br />
        <input type="submit"/>
        </form>
        
    )
}
export default Task5