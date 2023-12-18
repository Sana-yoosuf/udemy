import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/imgs/slide1.jpg";
import slide2 from "../../assets/imgs/slide2.jpg";

const Corousel = () => {
  return (
    <Carousel data-bs-theme="dark" className="m-5">

      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption className="bg-white mb-5 p-3 ml-2" style={{height:'50%',width:'30%'}}>
          <h1>Learning that gets You</h1>
          <p>Skills for your present (and your future). Get started with us.Contact us for special offers, personalized course recommendations, and more.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption className="bg-white mb-5 p-3 ml-2" style={{height:'50%',width:'30%'}}>
          <h1>Build ready-for-anything teams</h1>
          <p>See why leading organizations choose to learn with Udemy Business.</p>
          <Button variant="dark">Request a demo</Button>
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
  );
};

export default Corousel;
