import {useState} from 'react'

export default function RF() {
    const[txtarea,setTxtarea]=useState('')
    function handleChange(e){
        const {name,value}=e.target
        setTxtarea({...txtarea,[name]:value})
            }
    function handleSubmit(e){
        e.preventDefautl()
        alert(txtarea.to)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea onClick={handleChange} name='to' placeholder='Text here'></textarea>
        <br />
        <input type='submit'/>
      </form>
    </div>
  )
}
