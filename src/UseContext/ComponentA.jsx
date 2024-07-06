import React, { useState ,createContext} from 'react';
import ComponentB from './ComponentB';

export const usercontext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState('Brocode');

  return (
    <div>
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>

      <usercontext.Provider value={user}>

      <ComponentB user ={user}/>

      </usercontext.Provider>
     
    </div>
  );
};

export default ComponentA;
