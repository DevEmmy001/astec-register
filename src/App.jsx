import React from "react";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center h-screen pt-20">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScVwud3c7BmKUCn_JeocaXNVHhHIw1K8s25BXcSUUzdmliGGw/viewform?embedded=true"
          width="640"
          height=""
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default App;
