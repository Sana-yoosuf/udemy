import React from "react";
import "../../App.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Card from "react-bootstrap/Card";

import reactnet from "../../assets/imgs/reactnet.png";
import reactinterview from "../../assets/imgs/reactinterview.jpg";
import reacttest from "../../assets/imgs/reacttest.jpg";
import reactnative from "../../assets/imgs/reactnative.jpg";
import fullstack from "../../assets/imgs/fullstack.jpg";

const Featuredreact = () => {
  const recommand = [
    {
      title: "Learn and build e-commerce with .net",
      text: "Steve Doughtry",
      rating: "4.5",
      review: "(2364)",
      price: "$23.99",
      btntext: "Highest Rated",
      image: reactnet,
    },
    {
      title: " Mastering React with Interview Question",
      text: "Colt Stlee",
      rating: "4.7",
      review: "(23452)",
      price: "$88.99",
      btntext: "Highest Rated",
      image: reactinterview,
    },
    {
      title: "React Testing Library and Jest:Guide",
      text: "Jonas Schmedtmann",
      rating: "4.8",
      review: "(7748)",
      price: "$79.99",
      btntext: "Highest Rated",
      image: reacttest,
    },
    {
      title: "Complete Guide for React Native ",
      text: "Stephen Grider",
      rating: "4.9",
      review: "(2317)",
      price: "$99.99",
      btntext: "Highest Rated",
      image: reactnative,
    },
    {
      title: "Full Stack React Bootcamp with .NET API",
      text: "Brian Gordan",
      rating: "4.6",
      review: "(34226)",
      price: "$79.99",
      btntext: "Highest Rated",
      image: fullstack,
    },
  ];
  return (
    <div className="mt-5  ">
      <div className="m-4">
        <div className="fw-bold fs-2  gap-3 d-flex">
          <p>Featured Courses in</p>
          <p>
            <a class="link-opacity-100" href="#">
              React JS
            </a>
          </p>
        </div >
        <div className="fw-bold fs-5  gap-3 d-flex mt-3" >
        <p ><a className="link-opacity-100 text-secondary " href="#" style={{textDecoration:'none'}}>Most Popular</a></p>
        <p><a className="link-opacity-100 text-secondary " href="#" style={{textDecoration:'none'}}>New</a></p>
        <p><a className="link-opacity-100 text-secondary" href="#" style={{textDecoration:'none'}}>Intermediate & advanced</a></p>
        </div>
        <hr/>
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

export default Featuredreact;
