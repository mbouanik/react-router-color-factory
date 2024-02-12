import { NavLink } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <>
      <h1>Please select a Color or Add a new one </h1>
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
