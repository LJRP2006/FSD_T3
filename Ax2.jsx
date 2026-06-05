import { useState,useEffect } from "react";
import axios from "axios";

function Ax(){
    const[myimg,setImg]=useState('')
    
    function fetchImg(){
        axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then((response)=>{
                console.log(response.data)
                setImg(response.data)
            })
            .catch((e)=>{console.log(e)})}

    useEffect(fetchImg,[])

    return(<>
        <img src={myimg.message} alt="no image" height='400px' width='400px' />
        <button onClick={fetchImg}>Change Image</button>
    </>)

}
export default Ax