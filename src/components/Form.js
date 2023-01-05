import React, { useState } from "react";
import { generateImage } from "../http/generateImage";

const Form = ({ setImageSrc, setImageStatus }) => {
  const [value, setValue] = useState("");
  const generateHandler = (e) => {
    generateImage(value, "medium").then((data) => {
      console.log(data.data);
      setImageSrc(data.data);
    });
  };
  return (
    <form className="w-4/5 md:w-2/5 flex bg-gray-100">
      <input
        className="w-4/5 p-2 border-2 border-green-400 outline-none"
        type="text"
        placeholder="Gimme some thoughts..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="w-1/5 bg-green-400 p-2 text-white"
        onClick={(e) => {
          e.preventDefault();
          generateHandler();
          setValue("");
        }}
      >
        Generate
      </button>
    </form>
  );
};

export default Form;
