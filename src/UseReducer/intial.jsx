import React, { useState } from 'react'

const Intial = () => {

    const [cout, setcount] = useState(0);
    const [showtext,setShowtext] = useState(true);
  return (
    <div>
<h1>{cout}</h1>
        <button onClick={()=> {
            setcount(cout+1)
            setShowtext(!showtext)
        }}>

            click Here
        </button>

        {showtext && <p>Hello I am Text</p>}
      
    </div>
  )
}

export default Intial
