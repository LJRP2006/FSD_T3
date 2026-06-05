import { useState,useEffect } from "react";

function UE2(){
    const[date,setDate]=useState(new Date())

    useEffect(()=>{setInterval(()=>{setDate(new Date())},1000)},[])

    return(<>
        <h1>
            Hour:{date.getHours()}<br/><br/>
            Min:{date.getMinutes()}<br/><br/>
            sec:{date.getSeconds()}<br/><br/>
            <h1>{date.toLocaleTimeString()}</h1>
        </h1>
    </>)}
export default UE2