import React ,{useState}from 'react'

const Usestate2 = () => {

    const[inputvalue,setinputvalue]= useState('Hello')


    const handlechange= (e)=>{
      
        const value = e.target.value;
        setinputvalue(value);
    }
  return (
    <div>
      
      <input placeholder='enter Something' onChange={handlechange}></input>
       
       {inputvalue}

    </div>
  )
}

export default Usestate2
