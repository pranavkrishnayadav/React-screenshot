import React, { useState } from 'react';

export default function Eg03() {
  const [times, setTimes] = useState([]);

  const lap = () => {
    let today = new Date();
    setTimes([
      ...times,
      {
        id: times.length,
        value: today.getMinutes() + " : " + today.getSeconds() + " : " + today.getMilliseconds()
      }
    ]);
  };

  return (
    <div>
      <button className="btn btn-outline-warning" onClick={lap}><b>LAP</b></button>
      <ol>
        {
          times.map(item => (
            <li key={item.id}>{item.value}</li>
          ))
        }
      </ol>
    </div>
  );
}
