import {useState} from 'react'

function Us1(){
    const[count,setCount]=useState(0)

    function handleCount(){
        setCount(count+1)
    }
    return(<div>
        <p>you have clicked {count} time</p>
        <button onClick={handleCount}>Click</button>
    </div>)
}
export default Us1