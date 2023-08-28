import React, { useState } from "react";

export const DataExample = () => {
  const [name, setName] = useState("Stas");

  const [age, setAge] = useState(20);
  const [isStudent, setIsStudent] = useState(true);

  const changeName = () => {
    setName("Romko");
  };

  const changeAge = () => {
    setAge(2020);
  };

  const toggleStudent = () => {
    setIsStudent(!isStudent);
  };

  return (
    <>
      <h1>Different data types</h1>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Студент:{isStudent ? "Yes" : "No"}</p>
      <button onClick={changeName}>Change name</button>
      <button onClick={changeAge}>Change age</button>
      <button onClick={toggleStudent}>Change stud</button>
    </>
  );
};
