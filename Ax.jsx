import { useState,useEffect } from "react";
import axios from "axios";

function Ax(){
    const[myimg,setImg]=useState('')

    useEffect(()=>{
        setInterval(()=>{
            axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then((response)=>{
                console.log(response.data)
                setImg(response.data)
            })
            .catch((e)=>{console.log(e)})
        },1000)
    },[])

    return(<>
        <img src={myimg.message} alt="no image" height='300px' width='300px'/>
    </>)
}
export default Ax