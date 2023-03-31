import { React } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";

function ProjectDisplay() {
  const { id } = useParams();
  const project = data[id];
  return (
    <div className="project">
      <img src={project.image} alt="project name"></img>
      <p>
        <b>Built with:</b> {project.skills}
      </p>
      <br />
      <a id="res" target="_blank" rel="noreferrer" href={project.github}>
        Github
      </a>{" "}
      <br />
    </div>
  );
}
export default ProjectDisplay;
