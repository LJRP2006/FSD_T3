function P1(props)
{
    return(<>{props.info.map((pr)=>
    {
        return(
            <div>
                <img src={pr.pic} alt="no image"/>
                <h1>{pr.name}</h1>
                <h3>{pr.price}</h3>
            </div>
            )
    })}</>)
}
export default P1