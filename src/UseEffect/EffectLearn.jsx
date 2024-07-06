import React, { useEffect, useState } from 'react'
import axios from 'axios'
const EffectLearn = () => {

    const [data,setdata] = useState("")

    const [count,setcount] = useState(0)

    useEffect(()=>{
        axios  
          .get("https://jsonplaceholder.typicode.com/comments")
          .then((Response)=>{
            setdata(Response.data[0].email);
            console.log("API Was Called ")
          })
    })
  return (
    <div>
      
    </div>
  )
}

export default EffectLearn
