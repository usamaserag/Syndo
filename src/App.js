import React from "react";
import "./App.less";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
