import Header from "./components/Header";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Upload from "./pages/UploadImgae";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>

    <Footer />

    </>
  );
}

export default App;