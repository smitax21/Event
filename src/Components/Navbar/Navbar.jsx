import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "./augb-logo.jpg";
import "./Navbar.css";

const NavbarMenu = (props) => {
  return (
    <>
      <Navbar>
        <Container className="nav-container">
          <Navbar.Brand href="/">
            <img
              className="logo"
              src={logo}
              alt="Association of Ukrainians in Great Britain logo"
            />
          </Navbar.Brand>
          <Navbar.Text className="nav-text">
            Association of Ukrainians in Great Britain <br /> Sheffield Branch
            Events
          </Navbar.Text>
          <Button>
            <a className="login-btn" href="/login">
              Login
            </a>
          </Button>

          <Button onClick={props.handleVisibility}>
            <a className="login-btn" href="/add">
              Add Event
            </a>
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
