import React from "react";
import Home from "../../img/home.png";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link
        to="../home"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: "#333",
          fontWeight: "bold",
        }}
        
        onMouseEnter={(e) => e.target.style.color = "blue"}
        onMouseLeave={(e) => e.target.style.color = "#333"}
      >
        <img src={Home} alt="" style={{ width: "24px", height: "24px" }} />
        <span>Home</span>
      </Link>
    </div>
  );
};


export default NavIcons;
