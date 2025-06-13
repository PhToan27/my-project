import { useState } from 'react';

function Ex2() {
  const [name, setName] = useState('Toan');
  const [age, setAge] = useState(18);

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => {setName(e.target.value);
          console.log(e.target.value)
        }} 
      />
      <p>My name is {name}</p>

      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(parseInt(e.target.value, 10))} 
      />
      <p>My age is {age}</p>
    </div>
  );
}
  
export default Ex2;
