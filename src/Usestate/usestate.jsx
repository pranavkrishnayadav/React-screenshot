import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

export default function Eg01() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className='btn btn-outline-info p-3 m-3' onClick={() => setCount(count - 1)}> - </button>
      <button className='btn btn-success mx-2 btn-lg'>{count}</button>
      <button className='btn btn-outline-info p-3 m-3' onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}


