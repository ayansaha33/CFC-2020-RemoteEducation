import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import img from "../Data/Images/logo3.png";
import LoginModal from "./HomePage/Login/LoginModal";
import CreateAccModal from "./HomePage/CreateAccount/CreateAccModal";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <>
      <Navbar fixed="top" bg="light" variant="light">
        <Link to={"/"} className="nav-link">
          <img
            src={img}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Edumote logo"
          />
        </Link>
        <Navbar.Brand href="/" style={{ fontSize: "30px" }}>
          Edumote
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to={""} className="nav-link">
            Home
          </Link>
          <Link to={"features"} className="nav-link">
            Features
          </Link>
          <Link to={"pricing"} className="nav-link">
            Pricing
          </Link>
          <Link to={"contactus"} className="nav-link">
            Contact Us
          </Link>
          <Link to={"about"} className="nav-link">
            About
          </Link>
        </Nav>
        <Nav className="mr-right">
          <Nav.Item className="mr-sm-2">
            <Button
              variant="outline-primary"
              onClick={() => setModalShow(true)}
            >
              Log In
            </Button>{" "}
            <Button
              variant="outline-secondary"
              onClick={() => setModalShow2(true)}
            >
              Create Account
            </Button>{" "}
          </Nav.Item>
        </Nav>
      </Navbar>

      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <CreateAccModal show={modalShow2} onHide={() => setModalShow2(false)} />
    </>
  );
}
