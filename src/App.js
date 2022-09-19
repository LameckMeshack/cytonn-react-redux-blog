import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogComponent from "./components/BlogComponent";
import BlogContainer from "./components/BlogContainer";
import CreateForm from "./components/CreateForm";
import Footer from "./components/Footer";
import UpdateForm from "./components/Update";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

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
            <Route path="create" element={<CreateForm />} />
            <Route path="update/:id" element={<UpdateForm />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
