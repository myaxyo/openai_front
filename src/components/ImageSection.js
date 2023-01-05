import React from "react";

const ImageSection = ({ imageSrc }) => {
  return (
    <div className="w-auto bg-gray-100 p-2 flex justify-center align-center my-5">
      <img src={imageSrc} alt="AIImage" />
    </div>
  );
};

export default ImageSection;
