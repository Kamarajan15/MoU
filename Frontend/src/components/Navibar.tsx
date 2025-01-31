import { Button, Navbar } from "react-bootstrap";
import "../template/Navibar.css";
import { useState } from "react";

function Navibar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="src\assets\Logo.svg"
              alt="Logo"
              width="45"
              height="35"
              className="logo11"
            />
            BIT MoU's
          </a>
          <p className="para22"> Welcome : Name@gmail.com</p>
          <div className="logoutbutton">
            <Button variant="primary" className="butie1">
              {"Logout "}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navibar;
