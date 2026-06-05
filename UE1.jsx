import { useState,useEffect } from "react";
function UE1()
{
    const [countA,setCountA]=useState(0)
    const [countB,setCountB]=useState(0)
    function handleA()
    {
        setCountA(countA+1)
    }
    function handleB()
    {
        setCountB(countB+1)
    }
    useEffect(()=>{alert("Clicked")})
    //useEffect(()=>{alert("Clicked")},[countA],[countB])
    return(<div>
        <button onClick={handleA} style={{backgroundColor:"pink"}}>A{countA}</button>
        <br />
        <button onClick={handleB} style={{backgroundColor:"red"}}>B{countB}</button>
    </div>)
}
export default UE1

// write react js script to create digital clock running continuiosluy usong use effect 