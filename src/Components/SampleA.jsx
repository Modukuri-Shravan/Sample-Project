import React from "react";
import { useState } from "react";

const SampleA = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  // const handleSubmit = () => {
  //   setArray([...array, input]);
  // };
  const handleSubmit = () => {
    if (input) {  // Optional: Prevent adding empty strings
      setArray([...array, input]);
      setInput(""); // Clear input after adding
    }}



  return (
    <>
      <input
        type="text"
        name="username"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Enter your Username"
      />
      <input type="button" value="ADD" onClick={handleSubmit} />
      <ul>
        {array.map((item, index) => (
 <li key={index}>{item}</li>
        )
         
        )}
      </ul>
    </>
  );
};

export default SampleA;
