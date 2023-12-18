import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import Card from "react-bootstrap/Card";
import data from "../../assets/imgs/data.jpg";
import freecode from "../../assets/imgs/freecode.jpg";
import ajelia1 from "../../assets/imgs/angelia1.jpg";
import anjelia2 from "../../assets/imgs/angelia2.jpg";
import jason from "../../assets/imgs/jason.jpg";

const View = () => {
  const popular = [
    {
      title: "The Complete 2023 Web Development Bootcamp",
      text: "Dr Angelia Yu",
      rating: "4.7",
      review: "(7748)",
      price: "$79.99",
      btntext: "Highest Rated",
      image: ajelia1,
    },
    {
      title: "Python Development Guide",
      text: "Colt Stlee",
      rating: "4.7",
      review: "(23452)",
      price: "$88.99",
      btntext: "Highest Rated",
      image: freecode,
    },

    {
      title: "Data Analysis with python",
      text: "Benza Mamman",
      rating: "4.6",
      review: "(34226)",
      price: "$79.99",
      btntext: "Highest Rated",
      image: data,
    },
    {
      title: "Complete Guide For Network",
      text: "Jason Dion",
      rating: "4.9",
      review: "(2317)",
      price: "$99.99",
      btntext: "Highest Rated",
      image: jason,
    },
    {
      title: "100 Days of Python:Ultimate Course",
      text: "Dr Angelia Yu",
      rating: "4.8",
      review: "(7748)",
      price: "$79.99",
      btntext: "Highest Rated",
      image: anjelia2,
    },
  ];
  return (
    <div className="mt-5  ">
      <div className="m-4">
        <p className="fw-bold fs-2  g-3">Learners are viewing</p>

        <div className="d-flex justify-content-between">
          {popular.map((pop, key) => (
            <div className="d-inline fs-6 fw-normal ">
              <Card
                key={key}
                style={{ width: "18rem", border: "none" }}
                className="mt-3"
              >
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
                  <span className="fw-normal text-secondary">{pop.review}</span>
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
  );
};

export default View;
