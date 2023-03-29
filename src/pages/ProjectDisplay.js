import { React } from "react";
import { useParams } from "react-router-dom";
import {data} from "../data/data"

function ProjectDisplay() {

  const { id } = useParams();
  const project = data[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="project name" ></img> 
      <p><b>Built with:</b> {project.skills}</p>
      <a target="_blank" rel="noreferrer" href={project.github}>Github</a> 
    </div>
  );
}
export default ProjectDisplay;