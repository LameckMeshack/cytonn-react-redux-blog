import { BrowserRouter } from "react-router-dom";
import BlogComponent from "./components/BlogComponent";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>This is the header</h1>
        <BlogComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
