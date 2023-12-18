import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import Card from "react-bootstrap/Card";
import reactcourse from "../../assets/imgs/react-course.jpg";
import webdev from "../../assets/imgs/webdev course.jpg";
import graphic from "../../assets/imgs/graphic.jpg";
import golang from "../../assets/imgs/golang.jpg";
import chat from "../../assets/imgs/chat.jpg";

const Recommendation = () => {
  const recommand = [
    {
      title: "React and Typescript the Practicle Guide",
      text: "Academind by maxmilian",
      rating: "4.8",
      review: "(7748)",
      price: "$79.99",
      btntext: "Highest Rated",
      image: reactcourse,
    },
    {
      title: "The Web Developer Bootcamp : 2024",
      text: "Colt Stlee",
      rating: "4.7",
      review: "(23452)",
      price: "$88.99",
      btntext: "Highest Rated",
      image: webdev,
    },
    {
      title: "Graphic Design Master Class",
      text: "Jonas Schmedtmann",
      rating: "4.8",
      review: "(7748)",
      price: "$79.99",
      btntext: "Highest Rated",
      image: graphic,
    },
    {
      title: "The Complete Developer Guide(Golang)",
      text: "Stephen Grider",
      rating: "4.9",
      review: "(2317)",
      price: "$99.99",
      btntext: "Highest Rated",
      image: golang,
    },
    {
      title: "ChatGPT complete guide : 2024",
      text: "Benza Mamman",
      rating: "4.6",
      review: "(34226)",
      price: "$79.99",
      btntext: "Highest Rated",
      image: chat,
    },
  ];
  return (
    <div className="mt-5  ">
      <div className="m-4">
        <p className="fw-bold fs-2  g-3">Recommended For You</p>

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
                  <span className="fw-normal text-secondary">{reco.review}</span>
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

export default Recommendation;
