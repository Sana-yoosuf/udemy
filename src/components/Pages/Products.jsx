import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import react from "../../assets/imgs/react-ts.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Products = () => {



  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3031/courses")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);
  return (
    <div className="d-flex ">
      {posts.map((post,key) => (
        <div className="d-inline fs-6 fw-normal ">
          <Card key={key} style={{ width: "18rem" , border: "none"}} className="m-4">
            <Card.Img variant="top" src={react} />
            <Card.Body>
              <Card.Title className="fw-bold">
                {post.title}
              </Card.Title>
              <Card.Text className="fw-normal text-secondary">
              {post.text}
              </Card.Text>
              <span className="fw-bold">{post.rating}</span>
              <span style={{ color: "red" }}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="fw-normal text-secondary">{post.review}</span>
              <br />
              <div>
                <span className="fw-bold fs-5">{post.price}</span>{" "}
                <strike className="fw-bold fs-5 text-secondary">{post.oldprice}</strike>
              </div>
              <Button style={{ background: "#ffb366", color: "#000",border:'none' }} className="rounded-0">
               {post.btntext}
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;
