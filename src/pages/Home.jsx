import { Link } from "react-router-dom";
import { site } from "../config/site";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <main>
      <section className="hero page">
        <p className="kicker">{site.location}</p>

        <h1>{site.name}</h1>
        <h2>{site.role}</h2>

        <p className="hero-copy">
          I build software and security-focused systems across Python, Linux,
          AI/ML and cloud infrastructure. My work includes automation
          frameworks, adversarial machine-learning research, secure
          applications and systems benchmarking.
        </p>

        <div className="hero-links">
          <Link to="/work">work</Link>
          <Link to="/projects">projects</Link>
          <a href={site.github} target="_blank" rel="noreferrer">github ↗</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">linkedin ↗</a>
          {site.showResume && (
            <a href={site.resumePath} target="_blank" rel="noreferrer">
              cv ↗
            </a>
          )}
        </div>

        <p className="contact-line">
          Open to software, security engineering, AI infrastructure and systems
          opportunities. <a href={`mailto:${site.email}`}>Get in touch.</a>
        </p>
      </section>

      <section className="page section-block">
        <div className="section-heading">
          <p className="kicker">selected work</p>
          <h2>Projects with depth, not just demos.</h2>
        </div>

        <div className="project-grid">
          {featured.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>

        <div className="section-link">
          <Link to="/projects">view all projects →</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
