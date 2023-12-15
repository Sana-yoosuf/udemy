import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/imgs/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-white p-3 ">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            width="120"
            height="40"
            className="d-inline-block  mr-3 "
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="me-auto my-3 my-lg-0 p-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="fs-5 fw-normal text-black">
              Categories
            </Nav.Link>

            <Form className="d-flex">
              <span
                className="input-group-text 
              rounded-start-pill 
              border border-black 
               border-end-0 
               bg-white"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>

              <Form.Control
                type="search"
                className="me-2
                rounded-pill-circle
                border border-black
                 border-start-0
                fs-6 fw-semibold p-2"
                placeholder="Search for anything"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </Form>

            <Nav.Link href="#action2" className="fs-5 fw-normal text-black">
              Udemy Business
            </Nav.Link>
            <Nav.Link href="#action2" className="fs-5 fw-normal  text-black">
              Teach on Udemy
            </Nav.Link>
            <Nav.Link href="#action2" className="fs-5 fw-normal  text-black">
              My Learning
            </Nav.Link>
            <div className="mt-3">
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faCartShopping} />
              <FontAwesomeIcon icon={faBell} />
            </div>

            <div className="rounded-circle bg-black text-white p-2 m-1 fs-6 fw-bold">
              SY
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
