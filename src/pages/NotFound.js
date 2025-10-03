import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h2>Sorry</h2>
      <p>That page cannot found</p>
      <Link to="/">Back to the home page...</Link>
    </div>
  );
}
export default NotFound;
