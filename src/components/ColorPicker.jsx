import React, { useState } from "react";

// colors array
const [colorList, setColorList] = useState([
  { color: "blue" },
  { color: "white" },
  { color: "red" },
]);
// color to be displayed
const [color, setColor] = useState("green");

const handleColorChange = () => {
  // function to handle color change
};

export const ColorPicker = () => {
  return (
    <>
      <form>
        <select value={colorList.color} onChange={handleColorChange}>
          {colorList.map((color) => {
            <option value={color.color}>{color.color}</option>;
          })}
        </select>
      </form>

      {/* div to display color */}
      <div style={{ color: `${color}` }}>{color}</div>
    </>
  );
};
