import { createContext } from "react";
import Comp2 from "./comp2";

const Sty=createContext()
const mystyle={backgroundColor:'cyan',
    Color:'blue',fontSize:'50px'}
function Comp1(){
    return(<Sty.Provider value={mystyle}>
        <Comp2/>
    </Sty.Provider>)}
export default Comp1
export {Sty}