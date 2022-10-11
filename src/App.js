import { useEffect } from "react";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import { Routes, Route} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "styled-components";
import {theme} from "./Utils/Theme";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
    );
}

export default App;
