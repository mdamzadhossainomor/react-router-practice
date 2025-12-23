import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/trams">Trams</NavLink>
      <NavLink to="/user">User</NavLink>
    </div>
  );
};
