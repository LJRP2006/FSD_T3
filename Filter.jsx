function Filter_fil(){
    const arr=[1,2,3,4,5,6,7,8,9]
    const newarr=arr.filter(num=>num!==3)
    var arr1= arr.join(',')
    var arr2= newarr.join(',')
    return(
        <div>
            <h1>Actual array:{arr1}</h1><br></br>
            <h1>Filtered array:{arr2}</h1>
        </div>
    )
}
export default Filter_fil