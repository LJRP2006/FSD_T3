import { useState } from "react";
function Task3()
{
    const[name,setName]=useState("LJ University")
    const[txtcolor,settxtcolor]=useState("Red")
    const[hidetxt,sethidetxt]=useState("React JS Hooks")
    const[btntxt,setbtntxt]=useState("Hide")
    function showhide()
    {
        if(btntxt=="Hide")
        {
            setbtntxt("Show")
            sethidetxt('')
        }
        else
        {
            setbtntxt("Hide")
            sethidetxt("React JS Hooks")
        }
    }
    function changeName()
    {
        if(name=="LJ University")
        {
            setName("Welcome Student")
        }
        else
        {
            setName("LJ University")
        }
    }
    function changeColor()
    {
        if(txtcolor=="Red")
        {
            settxtcolor("aqua")
        }
        else
        {
            settxtcolor("Red")
        }
    }
    return(<div>
        <button onClick={changeName}>Change Text</button>
        <br />
        <button onDoubleClick={changeColor}>Change Color</button>
        <br />
        <button onClick={showhide}>{btntxt}</button>
        <br />
        <h1 style={{color:txtcolor}}>{name}</h1>
        <br />
        <h2>{hidetxt}</h2>
    </div>)
}
export default Task3