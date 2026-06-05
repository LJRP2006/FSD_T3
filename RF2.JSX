import {useState} from 'react'
function RF2()
{
    const[car,setCar]=useState("Creta")
    function handleChange(e)
    {
        setCar(e.target.value)
    }
    function handleSubmit(e)
    {
        alert("You Have Selected Car :"+ car)
        e.preventDefault()
    }
    return(<form onSubmit={handleSubmit}>
        <select name="a" onChange={handleChange}>
            <option value="Creta">Creta</option>
            <option value="XUV 700">XUV 700</option>
            <option value="BMW">BMW</option>
        </select> 
        <input type='submit'/>
    </form>)
}
export default RF2