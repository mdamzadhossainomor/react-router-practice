import { useState } from "react";

export const ControlForm = () => {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(event.target.name.value);
  //     console.log(event.target.email.value);
  //   };
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  const handleChange = (e) => {
    let input = e.target.value;
    setName(input);
    if (input.length < 3) {
      setError("Name must be at least 3 characters long.");
    } else {
      setError("");
    }
  };
  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" id="name" name="name" />
    //     <br />
    //     <label htmlFor="email">Email:</label>
    //     <input type="email" id="email" name="email" />
    //     <br />
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="name" defaultValue={name}>
          Name:
        </label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
