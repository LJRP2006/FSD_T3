import { useContext } from "react";
import { Sty } from "./omp1";
import { Str } from "./comp2";

function Comp3(){
    const style1=useContext(Sty)
    const string1=useContext(Str)
    return(<h1 style={style1}>Welcome {string1}</h1>)}

export default Comp3
