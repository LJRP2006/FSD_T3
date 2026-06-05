import { useState,useEffect } from "react";
import axios from "axios";

function StudentList(){
    const[students,setStudents]=useState([])

    useEffect(()=>{
        axios.get('/Student.json')
        .then((res)=>{setStudents(res.data)})
        .catch((err)=>{console.log(err)})
    },[])

    return(<>
        <h1>Student list</h1>
        {students.map((s)=>(
            <div>
                <p>ID:{s.id}</p>
                <p>Name:{s.name}</p>
                <p>Course:{s.course}</p><hr/>
            </div>
        ))}
    </>)
}
export default StudentList