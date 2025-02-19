import { useState } from "react";
import './LogName.css';

function Logname() {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleClick = () => {
    setShowName(name);
  }

  return (
    <div>
      <h1>Input your name</h1>
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange}
      />
      <button onClick={handleClick}>Click</button>
      <br />
      
      {showName && <span><h1>Your name is : {showName}</h1></span>}
    </div>
  );
}

export default Logname;