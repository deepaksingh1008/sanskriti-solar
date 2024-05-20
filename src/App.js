// App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
