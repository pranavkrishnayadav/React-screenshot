import React, { useState, useEffect, useRef } from 'react';

const Userefr = () => {
  const [name, setName] = useState('');
//   const renderCount = useRef(0); // initialized as { current: 0 }

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   });

const inputref = useRef()

function focus(){
    inputref.current.focus()
}

// // const prevName = useRef('')

// useEffect(()=>{
//     prevName.current = name
// },[name])

// <input value={name} onChange={e => setName(e.target.value)}/>

// <div>My name is {name} and it is used to be {prevName.current}</div>


  return (
    <>
      <input ref={inputref} value={name} onChange={e => setName(e.target.value)} />
      <div>
        My name is {name}
      </div>
      {/* <div> I rendered {renderCount.current} times</div> */}

<button onClick={focus}>Focus</button>

    </>
  );
}

export default Userefr;
