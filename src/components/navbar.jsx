import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const Navbar = ({ setIsAuth, isAuth }) => {
  const navigate = useNavigate();

  const logoutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/createpost"}>Create Post</Link>
      {!isAuth ? (
        <Link to={"/login"}>Login</Link>
      ) : (
        <button className="logout-btn" onClick={logoutUser}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar;
