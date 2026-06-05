import { useState } from "react";
function Us4()
{
    const[sty,setSty]=useState('green')
    function handleClick()
    {
        setSty('red')
    }
    return(<div>
        <button onClick={handleClick} style={{backgroundColor:'pink'}}>Change Style</button>
        <h2 style={{backgroundColor:sty}}>Hello With Style</h2>
    </div>)
}
export default Us4
