import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ImageSection from "./components/ImageSection";
import Form from "./components/Form";
const App = () => {
  const [imageSrc, setImageSrc] = useState(
    `https://dummyimage.com/512x512.png?text=Image`
  );
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <ImageSection imageSrc={imageSrc} />
      <Form setImageSrc={setImageSrc} />
    </div>
  );
};

export default App;
