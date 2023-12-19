import React from "react";

const Topics = () => {
  const topics = ["Redux Framework", "React Hooks", "React Native","Frondend Development"];
  return (
    <div className="mt-5  ">
      <div className="m-4 ">
        <div>
          <p className="fw-bold fs-2  ">Topics Recommended For You</p>
        </div>
        <div
          className="d-flex fw-bold .flex-wrap
         fs-5 gap-3  
         justify-content-around 
         align-items-baseline"
        >
          {topics.map((topic) => (
            <div
              className="border 
              p-2 
              col-6 col-md-auto 
              d-flex
               justify-content-center 
               align-items-center"
              style={{width:'20rem',height:'4rem'}}
            >
              <p>{topic}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
