import { useRef, useState } from "react";

function InputRef() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");


  const handleClick = () => {
      setValue(inputRef.current.value);
  };
  return (
    <div>
        <h1>Input Ref</h1>
      <input className="input" ref={inputRef} type="text" />
      <button onClick={handleClick}>Click</button>
      <p>Value: {value}</p>
    </div>
  );
}
export default InputRef;