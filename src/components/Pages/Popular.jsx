import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import Card from "react-bootstrap/Card";
import react from "../../assets/imgs/react-ts.jpg";
import angular from "../../assets/imgs/angular.jpg";
import micro from "../../assets/imgs/microreact.jpg";
import typescript from "../../assets/imgs/typescript.jpg";
import next from "../../assets/imgs/next.png";

const Popular = () => {
  const popular = [
    {
      title: "The Ultimate React Course 2024: React",
      text: "Jonas Schmedtmann",
      rating: "4.8",
      review: "(7748)",
      price: "$79.99",
      btntext: "Highest Rated",
      image: react,
    },
    {
      title: "Angular: The Complete Guide (2023 Edition)",
      text: "Maxmilian Schmedtmann",
      rating: "4.6",
      review: "(5248)",
      price: "$12.99",
      btntext: "Highest Rated",
      image: angular,
    },
    {
      title: "Micro Frondend with React",
      text: "Stephen Grider",
      rating: "4.8",
      review: "(7748)",
      price: "$15.99",
      btntext: "Highest Rated",
      image: micro,
    },
    {
      title: "Advanced Typescript Course: Complete Guide",
      text: "Florin Pop",
      rating: "4.8",
      review: "(7748)",
      price: "$45.99",
      btntext: "Highest Rated",
      image: typescript,
    },
    {
      title: "Advanced NextJS 14 and React Course",
      text: "Jonas Schmedtmann",
      rating: "4.8",
      review: "(7748)",
      price: "$23.99",
      btntext: "Highest Rated",
      image: next,
    },
  ];
  return (
    <div className="mt-5  ">
      <div className="m-4">
        <p className="fw-bold fs-2  g-3">
          Popular for Front End Web Developers
          <a className="link-opacity-100 fs-6 p-4 " href="#">
            Edit Occupation
          </a>
        </p>

        <div className="fw-bold fs-5 text-body-secondary">
          <Button
            variant="info"
            className="rounded-0 bg-primary-subtle fw-bold"
          >
            New
          </Button>{" "}
          <span className="text-secondary fs-6 fw-light ">
            Inspired by your selection
          </span>
          <div className="d-flex justify-content-between">
            {popular.map((pop, key) => (
              <div className="d-inline fs-6 fw-normal ">
                <Card key={key} style={{ width: "18rem", border: "none"}} className="mt-3">
                  <Card.Img variant="top" src={pop.image} />
                  <Card.Body>
                    <Card.Title className="fw-bold">{pop.title}</Card.Title>
                    <Card.Text className="fw-normal text-secondary">
                      {pop.text}
                    </Card.Text>
                    <span className="fw-bold">{pop.rating}</span>
                    <span style={{ color: "red" }}>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="fw-normal text-secondary">
                      {pop.review}
                    </span>
                    <br />
                    <div>
                      <span className="fw-bold fs-5">{pop.price}</span>{" "}
                    </div>
                    <Button
                      style={{
                        background: "#ffb366",
                        color: "#000",
                        border: "none",
                      }}
                      className="rounded-0"
                    >
                      {pop.btntext}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
