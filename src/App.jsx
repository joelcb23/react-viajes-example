import React from "react";
import NavBar from "./components/NavBar";
import ImageHeader from "./components/ImageHeader";
import Content from "./components/Content";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <div className="font-[Poppins]">
      <NavBar />
      <ImageHeader />
      <Content />
      <ContactInfo />
    </div>
  );
}

export default App;
