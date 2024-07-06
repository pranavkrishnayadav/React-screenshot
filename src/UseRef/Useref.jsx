import React from 'react'

//Exception

import { useState,useEffect } from 'react'
const Useref = () => {
  const [name,setname]= useState('')
    const[rendercount, setrendercount] = useState(0);


    useEffect(()=>{
        setrendercount(prevRenderCount => prevRenderCount+1
        )
    })



  return (
    <>
      
      <input value={name} onChange={e => setname(e.target.value)}/>

      <div>
        My name is {name} 
      </div>

      <div> I rendered {rendercount}</div>

    </>
  )
}

export default Useref
