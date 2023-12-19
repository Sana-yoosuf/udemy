import React from "react";
import { Button } from "react-bootstrap";
import nasdaq from "../../assets/imgs/nasdaq-light.svg";
import volks from "../../assets/imgs/volkswagen.svg";
import box from "../../assets/imgs/box-light.svg";
import netapp from "../../assets/imgs/netapp-light.svg";
import event from "../../assets/imgs/eventbrite-light.svg";
import logo from "../../assets/imgs/logo1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

const Footer = () => {
  const linkone = [
    "Udemy Business",
    "Teach on Udemy",
    "Get the app",
    "About us",
    "Contact us",
  ];

  const linktwo = [
    "Career",
    "Blog",
    "Help and Support",
    "Affiliate",
    "Investors",
  ];
  const linkthree = [
    "Terms",
    "Privacy Policy",
    "Cookie Settings",
    "Sitemap",
    "Accessibility statement",
  ];
  const images=[nasdaq,volks,box,netapp,event]

  return (
    <div className="text-bg-dark p-5">
      <div>
        <div className="d-flex justify-content-between">
          <div className="lh-lg">
            <div className="fs-3 fw-bold">
              <p>Teach the world online</p>
            </div>
            <div className="fs-5">
              <p>
                Create an online video course, reach students across the globe,
                and earn money
              </p>
            </div>
          </div>
          <div>
            <Button
              variant="outline-light "
              className="p-3 fw-bold rounded-0 fs-5"
            >
              Teach on Udemy
            </Button>
          </div>
        </div>
        <hr />

        <div className="d-flex gap-5">
          <div>
            <p className="fs-4 fw-bold">
              Top companies choose Udemy Business to build in-demand <br />
              career skills.
            </p>
          </div>
          <div className="d-flex gap-3">
            <div>
              <img src={nasdaq} style={{ width: "8rem", height: "3rem" }} />
            </div>
            <div>
              <img src={volks} style={{ width: "8rem", height: "3rem" }} />
            </div>
            <div>
              <img src={box} style={{ width: "8rem", height: "3rem" }} />
            </div>
            <div>
              <img src={netapp} style={{ width: "8rem", height: "3rem" }} />
            </div>
            <div>
              <img src={event} style={{ width: "8rem", height: "3rem" }} />
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div>
            <div className="line fw-bold fs-6">
              {linkone.map((links) => (
                <p className="text-light ">
                  <a
                    href="#"
                    className="text-reset "
                    style={{ textDecoration: "none" }}
                  >
                    {links}
                  </a>
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="line fw-bold fs-6">
              {linktwo.map((links) => (
                <p className="text-light">
                  <a
                    href="#"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    {links}
                  </a>
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="line fw-bold fs-6">
              {linkthree.map((links) => (
                <p className="text-light">
                  <a
                    href="#"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    {links}
                  </a>
                </p>
              ))}
            </div>
          </div>

          <div>
            <Button
              variant="outline-light "
              className="p-3 fw-bold rounded-0 fs-5"
              style={{ width: "12rem" }}
            >
              <FontAwesomeIcon icon={faGlobe} /> English
            </Button>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <img src={logo} style={{ width: "8rem", height: "8rem" }} />
          </div>
          <div className="m-5">
            <p>&copy;2023 Udemy, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
