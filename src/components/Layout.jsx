import { NavLink, Outlet } from "react-router-dom";
import { site } from "../config/site";

function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink to="/" className="brand" aria-label="Home">
          {site.shortName.toLowerCase()}
        </NavLink>

        <nav className="nav" aria-label="Primary navigation">
          <NavLink to="/work">work</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <a href={site.github} target="_blank" rel="noreferrer">github ↗</a>
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{site.location}</span>
      </footer>
    </div>
  );
}

export default Layout;
