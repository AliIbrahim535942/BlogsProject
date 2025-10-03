import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";
function BlogDetails() {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPanding,
  } = useFetch(`http://localhost:4000/blogs/${id}`);
  const handleDelete = () => {
    fetch(`http://localhost:4000/blogs/${blog.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPanding && <div>Loding ...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
}
export default BlogDetails;
