import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page">
      <p className="kicker">404</p>
      <h1>That page does not exist.</h1>
      <p><Link to="/">← return home</Link></p>
    </main>
  );
}

export default NotFound;
