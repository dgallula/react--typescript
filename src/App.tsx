import React , {useEffect, useRef,useState } from 'react';
import {count} from 'console';
 
function App() {
  const [name,setName] = useState('');
  const  counterRef =useRef(0);

  useEffect(()=> {
    console.log('useEffect');
    console.log(counterRef)
    counterRef.current= counterRef.current + 1;
    
     
  });

  return (
    <>
    
    <input value={name} onChange={e=> setName(e.target.value)}/>
    <h1>my name is: {name}</h1>
    <h2> I rendered {counterRef.current} times</h2>

    </>
  
  );
}

export default App;
