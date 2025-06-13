import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


function Counter() {
  const [count, setCount] = useState(0);
  
  return (
   
    
    <div>
        
      <p>You clicked {count} times</p>
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Click Me
      </Button>
      
    </div>
    
  );
}
export default Counter;