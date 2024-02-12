import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddColor = ({ handleSetColor }) => {
  const INITIAL_VALUES = {
    name: "",
    color: "black",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_VALUES);

  const handleChange = (evt) => {
    setFormData((formData) => ({
      ...formData,
      [evt.target.name]: evt.target.value,
    }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSetColor(formData);
    setFormData(INITIAL_VALUES);
    navigate("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Pick a name"
        onChange={handleChange}
      />
      <label htmlFor="color">Color</label>

      <input
        type="color"
        name="color"
        value={formData.color}
        placeholder="Pick a color"
        onChange={handleChange}
      />
      <button> Add Color </button>
    </form>
  );
};

export default AddColor;
