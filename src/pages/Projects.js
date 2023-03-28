import ProjectItem from "../components/ProjectItem";

function Projects(props) {
  const { projectData } = props;
  return (
    <div className="projects">
      <h2>My projects</h2>
      <div className="projectList">
        {projectData.map((ele,idx) => {
          return <ProjectItem key={idx} id={idx} name={ele.name} image={ele.image} />;
        })}
      </div>
    </div>
  );
}
export default Projects;