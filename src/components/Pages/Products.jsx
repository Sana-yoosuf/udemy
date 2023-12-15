import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import react from "../../assets/imgs/react-ts.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Products = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3031/courses`)
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    // <div >
    //   {data.map((datas) => (
    //     <div className="d-inline fs-6 fw-normal ">{datas.title}</div>
    //   ))}
    // </div>

<Card style={{ width: "19rem" }} className="m-4">
    <Card.Img variant="top" src={react} />
    <Card.Body>
      <Card.Title className="fw-bold">
        React and Type script the practicle guide
      </Card.Title>
      <Card.Text className="fw-normal text-secondary">
        Academind by Maximilian
      </Card.Text>
      <span className="fw-bold">4.8</span>
      <span style={{ color: "red" }}>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </span>
      <span className="fw-normal text-secondary">(474)</span>
      <br />
      <div>
        <span className="fw-bold fs-5">$12.99</span>{" "}
        <strike className="fw-bold fs-5 text-secondary">$44.99</strike>
      </div>
      <Button style={{ background: "orange", color: "#000" }}>
        Highest Rated
      </Button>
    </Card.Body>
  </Card>

  );

  
};

export default Products;
