import { useReducer } from "react";
function UR2(){
    const[state,dispatch]=useReducer(reducer,10)
    function reducer(state,action){
        if(action.type=='increment'){
            return state+1
        }
        else
        {
            return state-1
        }
    }
    return(<div>
            <h1 style={{color:'red'}}>{state}</h1>
         <button onClick={()=>dispatch({type:'increment'})}>Click for Increment</button><br/><hr/>
         <button onClick={()=>dispatch({type:''})}>Click for Decrement</button>
    </div>)
}
export default UR2