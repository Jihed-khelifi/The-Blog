import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreateBlog from "./views/CreateBlog/CreateBlog";
import { BlogPage } from "./views/BlogPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create-blog" exact element={<CreateBlog />} />
        <Route path="/blog/:id" exact element={<BlogPage />} />
      </Routes>
      <Footer note="Footer Note" />
    </>
  );
}
export default App;
