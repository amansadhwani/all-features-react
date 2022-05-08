import React, { useState, useEffect } from "react";

export const FormValdiation = () => {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(10);
  const [errors, setErrors] = useState({
    firstName: false,
    age: false,
  });

  const handleBlur = (e: any) => {
    setErrors({ ...errors, [e.target.name]: true });
  };

  const onSubmit = () => {
    if (firstName === "" || age === 0) {
      setErrors({ ...errors, firstName: true, age: true });
    } else {
      alert("form submitted");
    }
  };
  return (
    <>
      <h1>Custom Form Valdiation</h1>
      <label> First Name </label>
      <input
        name="firstName"
        value={firstName}
        onChange={(e: any) => setFirstName(e.target.value)}
        style={{ margin: "30px" }}
        placeholder="input Name"
        onBlur={(e: any) => handleBlur(e)}
      />
      {firstName === "" && errors.firstName ? (
        <h3>Error First Name Is Required</h3>
      ) : null}
      <label> Age </label>
      <input
        name="age"
        value={age}
        onChange={(e: any) => setAge(Number(e.target.value))}
        style={{ margin: "30px" }}
        placeholder="input Name"
        onBlur={(e: any) => handleBlur(e)}
      />
      {age === 0 && errors.age ? <h3>Error should be more than 0</h3> : null}
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </>
  );
};
