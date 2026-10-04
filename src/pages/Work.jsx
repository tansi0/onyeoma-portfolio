import { work } from "../data/work";
import TagList from "../components/TagList";

function Work() {
  return (
    <main className="page">
      <div className="page-intro">
        <p className="kicker">experience</p>
        <h1>work</h1>
        <p>
          A progression from software development and user support into
          automation, distributed systems and security-focused engineering.
        </p>
      </div>

      <div className="timeline">
        {work.map((item) => (
          <article className="experience" key={`${item.company}-${item.role}`}>
            <div className="experience-date">{item.dates}</div>
            <div>
              <h2>{item.role} <span>at {item.company}</span></h2>
              <p className="muted">{item.location}</p>
              <p>{item.summary}</p>
              <TagList items={item.tags} />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Work;
