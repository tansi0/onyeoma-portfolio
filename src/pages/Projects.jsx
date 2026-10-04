import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <main className="page">
      <div className="page-intro">
        <p className="kicker">engineering portfolio</p>
        <h1>projects</h1>
        <p>
          Software, systems, AI and security work documented as engineering
          case studies: the problem, what was built, the decisions made and the
          measurable outcome.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
