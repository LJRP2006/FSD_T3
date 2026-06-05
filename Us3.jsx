import {useState} from 'react'

function Us3(){
    const[num,setnum]=useState(0)

    function Increment(){
        if(num<10){
            setnum(num+1)
        }
    }
    function Decrement(){
        if(num>0){
            setnum(num-1)
    }
        }
        
    return(<div>
        <p><b>you have clicked {num} time</b></p>
        <button onClick={Increment} style={{backgroundColor:'green'}}>Click for Increment</button><br></br>
        <button onClick={Decrement} style={{backgroundColor:'red'}}>Click for Decrement</button>
    </div>)
}
export default Us3