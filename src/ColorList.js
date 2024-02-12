import { NavLink } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <>
      {colors.map((color) => (
        <div>
          <NavLink to={`/colors/${color.name.toLowerCase()}`}>
            {color.name}
          </NavLink>
        </div>
      ))}
    </>
  );
};
export default ColorList;
