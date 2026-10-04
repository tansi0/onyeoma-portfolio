import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import TagList from "../components/TagList";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="page">
        <p className="kicker">404</p>
        <h1>Project not found</h1>
        <Link to="/projects">← back to projects</Link>
      </main>
    );
  }

  return (
    <main className="page case-study">
      <Link className="back-link" to="/projects">← back to projects</Link>

      <div className="case-header">
        <div>
          <p className="kicker">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
        </div>
        <p className="case-date">{project.dates}</p>
      </div>

      <TagList items={project.stack} />

      <section className="case-section">
        <h2>Problem</h2>
        <p>{project.problem}</p>
      </section>

      <section className="case-section">
        <h2>What I built</h2>
        <ul>
          {project.built.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="case-section">
        <h2>Results</h2>
        <ul>
          {project.results.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      {project.github && (
        <section className="case-section">
          <h2>Source</h2>
          <p>
            The repository contains the implementation, documentation and
            supporting files.
          </p>
          <a className="button-link" href={project.github} target="_blank" rel="noreferrer">
            view repository ↗
          </a>
        </section>
      )}
    </main>
  );
}

export default ProjectDetail;
