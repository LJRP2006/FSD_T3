function Form()
{
    function handleSubmit(e)
    {
        e.preventDefault()
        alert("Form Submited")
    }
   return(<form onSubmit={handleSubmit}>
    <input type="text"/>
    <input type="submit"/>
    </form>)
}
export default Form