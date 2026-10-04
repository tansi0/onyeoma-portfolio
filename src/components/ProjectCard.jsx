import { Link } from "react-router-dom";
import TagList from "./TagList";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="eyebrow-row">
        <span>{project.category}</span>
        <span>{project.dates}</span>
      </div>

      <h2>
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h2>

      <p>{project.summary}</p>

      <TagList items={project.stack.slice(0, 6)} />

      <div className="card-actions">
        <Link to={`/projects/${project.slug}`}>case study →</Link>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            source ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
