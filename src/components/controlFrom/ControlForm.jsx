export const ControlForm = () => {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(event.target.name.value);
  //     console.log(event.target.email.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.value);
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
        <label htmlFor="name">Name:</label>
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
