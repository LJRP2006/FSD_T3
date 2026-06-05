import { useContext } from "react";
import { Fname,Lname } from "./PC";
function C2()
{
    const fn=useContext(Fname)
    const ln=useContext(Lname)
    return(<h1>Welcome{fn}{ln}</h1>)
}
export default C2

//crate a react app to pass data b/w components comp1.jsx create a context for css styleing
// and provide it to comp2.jsx comp2.jsx creates a context for string value students and
// procides it to copm3.jsx. comp3.jsx consumes both the context and display a message with provided 
// style of font color bg color on provided string