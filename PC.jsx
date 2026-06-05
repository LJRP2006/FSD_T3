// create a react js programm to perform the task as asked below
// 1) create 1 parent file pc.jsx and other two component files c1.jsx and c2.jsx
// 2) pass fname and lname from pc.jsx to c2.jsx file and display welcome msg with this fname and lname in browser
import { createContext } from "react";
const Fname=createContext()
const Lname=createContext()
import C1 from './C1'
function PC()
{
    return(<>
    <Fname.Provider value="Rudra">
    <Lname.Provider value="patel">
    <C1></C1>
    </Lname.Provider>
    </Fname.Provider>
    </>)
}
export default PC
export {Fname,Lname}