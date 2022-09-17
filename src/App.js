import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogComponent from "./components/BlogComponent";
import BlogContainer from "./components/BlogContainer";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="main">
          <Routes>
            {/* <Route path="/" element=></Route> */}
            <Route index path="/" element={<BlogContainer />} />
            <Route path="login" element={<Login />} />
            <Route path="blog/:id" element={<BlogComponent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
