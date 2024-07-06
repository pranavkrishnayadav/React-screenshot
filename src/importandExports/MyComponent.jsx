import React, { useRef } from 'react';

// import url, { flag, score, db_config } from './Variables';
import * as obj from './Variables';
import my_fun, { auth } from './functions';

const MyComponent = () => {
  const unameRef = useRef(null);
  const upwdRef = useRef(null);

  const login = (e) => {
    e.preventDefault();
    let uname = unameRef.current.value;
    let upwd = upwdRef.current.value;
    let loginSuccess = auth(uname, upwd);
    if (loginSuccess) {
      alert('Authentication Success');
    } else {
      alert('Authentication Failed');
    }
  };

  return (
    <div>
      {/* <p style={{ color: 'rgb(255,0,0)' }}>Url:- {url} </p>
      <p style={{ color: 'rgb(200,0,0)' }}>Flag:-
      {JSON.stringify(flag)} </p>
      <p style={{ color: 'rgb(180,0,0)' }}>Score :- {score}</p>
      <p style={{ color: 'rgb(160,0,0)' }}>Database Configuration :-
      {JSON.stringify(db_config)}</p>  */}
      <p style={{ color: 'rgb(0,255,0)' }}>Url:- {obj.default} </p>
      <p style={{ color: 'rgb(0,200,0)' }}>Flag:-
        {JSON.stringify(obj.flag)} </p>
      <p style={{ color: 'rgb(0,180,0)' }}>Score :- {obj.score}</p>
      <p style={{ color: 'rgb(0,160,0)' }}>Database Configuration :-
        {JSON.stringify(obj.db_config)}</p>
      <p style={{ color: 'rgb(0,0,255)' }}>{my_fun()} </p>

      <form onSubmit={login}>
        <input type='text' placeholder='Enter Username' name='uname' ref={unameRef}></input>
        <br /><br />
        <input type='password' placeholder='Enter Password' name='upwd' ref={upwdRef}></input>
        <br /><br />
        <input type='submit' value='Login'></input>
      </form>
    </div>
  );
};

export default MyComponent;
