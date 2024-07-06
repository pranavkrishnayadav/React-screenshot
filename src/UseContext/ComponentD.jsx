import React from 'react'

import { useContext } from 'react'
import { usercontext } from './ComponentA'


const ComponentD = () => {
  const user  = useContext(usercontext)
  return (
    <div>
      <h1>Component D {user}</h1>
    </div>
  )
}

export default ComponentD
