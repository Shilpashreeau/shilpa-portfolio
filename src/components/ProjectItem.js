import React from "react";
import { useNavigate } from "react-router-dom";


function ProjectItem(props) {
  const { name,image,id } = props;
  const navigate=useNavigate();
  console.log(props);
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
        
      }}
    >
    <h1> {name} </h1>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      
    </div>
  
  );
}
export default ProjectItem;