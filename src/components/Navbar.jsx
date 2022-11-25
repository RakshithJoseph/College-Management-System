import React from "react";
import "../style/Navbar.css";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const adminHandler = () =>{
    localStorage.clear();
    navigate("/admin");
  }
  const logoutHandler = () => {
    localStorage.clear();
    if (props.route !== "admin") {
      navigate("/");
    } else {
      navigate("/admin");
    }
  };
  if (props.showText !== "") {
    return (
      <>
        <section className="navMain">
          <p className="navTitle">{props.title}</p>
          <button className="logoutNavBtn" onClick={logoutHandler}>
            <span id="logoutText">Logout </span>
            <span className="navLogoutIcon">
              <MdLogout />
            </span>
          </button>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="navMain MainNavHead">
          <p className="navTitle">{props.title}</p>
          <button className="adminNavBtn" onClick={adminHandler}>
            <span id="logoutText">Admin Page</span>
          </button>
        </section>
      </>
    );
  }
};

export default Navbar;
