import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AddColor from "./AddColor";
import ColorList from "./ColorList";
import { v4 as uuid } from "uuid";
import NavBar from "./NavBar";
import Color from "./Color";

const RouterList = () => {
  const [colors, setColors] = useState([]);
  const handleSetColor = (color) => {
    setColors((colors) => [...colors, { ...color, id: uuid() }]);
  };
  return (
    <>
      <NavBar colors={colors} />
      <Routes>
        <Route exact path="/colors" element={<ColorList colors={colors} />} />
        <Route exact path="/colors/:name" element={<Color colors={colors} />} />
        <Route
          exact
          path="/colors/add-color"
          element={<AddColor handleSetColor={handleSetColor} />}
        />
        <Route path="/*" element={<Navigate to="/colors" />} />
      </Routes>
    </>
  );
};
export default RouterList;
