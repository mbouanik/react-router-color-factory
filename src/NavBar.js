import { NavLink } from "react-router-dom";

const NavBar = ({ colors }) => {
  return (
    <nav>
      <NavLink to="/colors/add-color"> Add Colors</NavLink>
    </nav>
  );
};

export default NavBar;
