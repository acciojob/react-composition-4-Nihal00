import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function update() {
    console.log(user);
  }

  return (
    <>
      <form onSubmit={update}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setUser(...user, user.name = e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setUser(...user, user.email = e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setUser(...user, user.password = e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
