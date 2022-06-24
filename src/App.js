import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CreatePost from "./pages/createPost";
import Login from "./pages/login";
import Navbar from "./components/navbar";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar setIsAuth={setIsAuth} isAuth={isAuth}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
