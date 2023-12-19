import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import Card from "react-bootstrap/Card";
import s3 from "../../assets/imgs/s3.jpg";
import linux from "../../assets/imgs/linux.jpg";
import visual from "../../assets/imgs/visual.png";
import js from "../../assets/imgs/js.jpg";
import asp from "../../assets/imgs/asp.jpg";

const Webdev = () => {
  const recommand = [
    {
      title: "Amazon s3 Mastery:Complete  Guide",
      text: "Steve Doughtry",
      rating: "4.5",
      review: "(2364)",
      price: "$23.99",
      btntext: "Highest Rated",
      image: s3,
    },
    {
      title: " Complete Linux Learning Essential",
      text: "Colt Stlee",
      rating: "4.7",
      review: "(23452)",
      price: "$88.99",
      btntext: "Highest Rated",
      image: linux,
    },
    {
      title: "Salesforce Visualforce Development",
      text: "Jonas Schmedtmann",
      rating: "4.8",
      review: "(7748)",
      price: "$79.99",
      btntext: "Highest Rated",
      image: visual,
    },
    {
      title: "JS Understanding the Weird Part ",
      text: "Stephen Grider",
      rating: "4.9",
      review: "(2317)",
      price: "$99.99",
      btntext: "Highest Rated",
      image: js,
    },
    {
      title: "ASP .net MVC Guide for Quick Start",
      text: "Brian Gordan",
      rating: "4.6",
      review: "(34226)",
      price: "$79.99",
      btntext: "Highest Rated",
      image: asp,
    },
  ];
  return (
    <div className="mt-5  ">
      <div className="m-4">
        <div className="fw-bold fs-2  gap-3 d-flex">
          <p>Top Courses in</p>
          <p>
            <a class="link-opacity-100" href="#">
              Web Development
            </a>
          </p>
        </div>
        <div className="d-flex justify-content-between">
          {recommand.map((reco, key) => (
            <div className="d-inline fs-6 fw-normal ">
              <Card
                key={key}
                style={{ width: "18rem", border: "none" }}
                className="mt-3"
              >
                <Card.Img variant="top" src={reco.image} />
                <Card.Body>
                  <Card.Title className="fw-bold">{reco.title}</Card.Title>
                  <Card.Text className="fw-normal text-secondary">
                    {reco.text}
                  </Card.Text>
                  <span className="fw-bold">{reco.rating}</span>
                  <span style={{ color: "red" }}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className="fw-normal text-secondary">
                    {reco.review}
                  </span>
                  <br />
                  <div>
                    <span className="fw-bold fs-5">{reco.price}</span>{" "}
                  </div>
                  <Button
                    style={{
                      background: "#ffb366",
                      color: "#000",
                      border: "none",
                    }}
                    className="rounded-0"
                  >
                    {reco.btntext}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webdev;
