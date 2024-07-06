import React, { useState } from 'react';

export default function Eg02() {
  const [name, setName] = useState({
    fname: 'Fname',
    lname: 'Lname'
  });

  return (
    <div>
      <input
        type='text'
        placeholder='Enter First name'
        className='m-3'
        onChange={e => setName({ ...name, fname: e.target.value })}
      />
      <input
        type='text'
        placeholder='Enter Last name'
        className='m-3'
        onChange={e => setName({ ...name, lname: e.target.value })}
      />
      <h3>First Name:- {name.fname}</h3>
      <h3>Last Name:- {name.lname}</h3>
    </div>
  );
}
