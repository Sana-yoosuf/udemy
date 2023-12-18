import React from "react";

const Topics = () => {
  const topics = [
    "Redux Framework",
    "React Hooks",
    "React Native",
    "Frontend Web Development",
    "MERN Stack",
    "React JS",
    "GraphQL",
    "JavaScript",
    "NodeJS",
    "Web Development",
  ];
  return (
    <div className="mt-5  container">
      <div className="m-4 row text-center justify-content-center">
        <div>
          <p className="fw-bold fs-2  ">Topics Recommended For You</p>
        </div>
        <div className="d-flex fw-bold
         fs-5 gap-3  
         justify-content-around 
         align-items-baseline" 
        >
          {/* {topics.map((topic) => (
              <div className="border p-2 col-6 col-md-auto">
              <p>{topic}</p>
              </div>
            ))} */}
          <div className="border p-2 col-6 col-md-auto text-center"  style={{width:'20rem',height:'4rem'}}>
            <p>Redux Framework</p>
          </div>
          <div className="border p-2 col-6 col-md-auto" style={{width:'20rem',height:'4rem'}}>
            <p>React Hooks</p>
          </div>
          <div className="border p-2 col-6 col-md-auto" style={{width:'20rem',height:'4rem'}}>
            <p>React Native</p>
          </div>
          <div className="border p-2 col-6 col-md-auto" style={{width:'20rem',height:'4rem'}}>
            <p>Frontend Web Development</p>
          </div>
         
         
          <div className="border p-2 col-6 col-md-auto" style={{width:'17rem',height:'4rem'}}>
            <p>React JS</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Topics;
