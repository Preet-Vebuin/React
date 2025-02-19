import React, { useState, useRef } from "react";

const UseRef: React.FC = () => {
  const [num, setNum] = useState<number>(0);
  const inputOne = useRef<HTMLInputElement | null>(null); // Input field ref
  const containerRef = useRef<HTMLDivElement | null>(null); // Container ref

  const getNumBox = () => {
    console.log("hello");
    console.log(inputOne.current); // Access input field
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value)); // Update state
  };

  // Function to append a new child element (e.g., a <p> tag)
  const addChild = () => {
    if (containerRef.current) {
      // Create a new <p> element and append it to the container
      const newChild = document.createElement("p");
      newChild.textContent = `New child element: ${Math.random()}`;
      containerRef.current.appendChild(newChild);
    }
  };

  return (
    <>
      <h1>Hi: {num}</h1>

      {/* First input with ref */}
      <input
        ref={inputOne}
        value={num}
        onChange={handleInputChange}
        type="number"
      />
      <button onClick={getNumBox}>Get Input Ref</button>

      {/* Button to append a new child element */}
      <button onClick={addChild}>Add Child</button>

      {/* Container where children will be appended */}
      <div ref={containerRef}>
        <h2>Child Elements:</h2>
        {/* Child elements will be appended here */}
      </div>
    </>
  );
};

export default UseRef;
