import {useState} from 'react'

function Us1(){
    const[count,setCount]=useState(10)
    return(<div>
        <p>you have clicked {count} time</p>
        <button onClick={()=>setCount(count-1)}>Click</button>
    </div>)
}
export default Us1