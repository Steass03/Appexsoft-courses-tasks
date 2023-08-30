import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  const reff = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1 onClick={reff}>Using useRef hook</h1>
      <input ref={inputRef} type="text" placeholder="Hello" />
    </div>
  );
}

export default FocusInput;
