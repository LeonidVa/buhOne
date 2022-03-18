import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Home from "./routes/Home";
import Keys from "./routes/Keys";
import { Layout } from "./routes/Layout/Layout";
import Services from "./routes/Services";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/keys" element={<Keys />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
